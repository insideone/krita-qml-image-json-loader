import path from 'path';
import loaderUtils from 'loader-utils';
import SchemaValidator from './SchemaValidator';
import SchemaParser from './SchemaParser';
import KritaQmlImageJsonLoaderOptions from './KritaQmlImageJsonLoaderOptions';

export default function KritaQmlImageJsonLoader(content: string, map: object, meta: any[]) {
    (new SchemaValidator()).validate(meta);
    const rectangle = (new SchemaParser()).parse(meta);

    const options = {
        ...{
            requireSources: false,
        } as KritaQmlImageJsonLoaderOptions,
        ...loaderUtils.getOptions(this),
    } as KritaQmlImageJsonLoaderOptions;

    const result: string[] = [];

    if (options.requireSources) {
        for (const image of rectangle.images) {
            result.push(`require(${JSON.stringify(path.join(this.context, image.source))})`);
        }
    }

    result.push(
        'module.exports = ' + JSON.stringify({
            default: rectangle,
        })
    );

    return result.join(';');
}
