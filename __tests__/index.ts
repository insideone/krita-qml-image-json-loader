import loaderUtils from 'loader-utils';
import KritaQmlImageJsonLoader from '../src';
import { failed, successful } from './cases';

function convert(input: any[]) {
    return KritaQmlImageJsonLoader.call({context: '/some/project/directory'}, '', {}, input);
}

test.each(successful)('on successfuly convertion', (options, input: any[], expected: string[]) => {
    loaderUtils.getOptions = () => options;
    expect(convert(input)).toEqual(expected.join(';'));
});

test.each(failed)('on having exception', (input: any[], exception: string) => {
    expect(() => convert(input)).toThrowError(exception);
});
