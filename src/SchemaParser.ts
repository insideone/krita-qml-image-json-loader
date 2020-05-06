import Rectangle from './Rectangle';
import RectangleStructure from './RectangleStructure';
import QmlElement from './QmlElement';
import Image from './Image';
import ImageStructure from './ImageStructure';

export default class SchemaParser {
    parse(meta: any[][]): Rectangle {
        for (const node of meta) {
            if (!(node instanceof Array)) {
                continue;
            }

            const [type, name, , children] = node;

            if (!(type === Rectangle.QML_TYPE && name === Rectangle.QML_NAME)) {
                continue;
            }

            const rectangleData: Partial<RectangleStructure> = {};

            for (const child of children) {
                SchemaParser.applyChild(rectangleData, child, Rectangle.CHILDREN_PROPERTY);
            }

            return new Rectangle(rectangleData as RectangleStructure);
        }
    }

    private static applyChild<T>(entity: Partial<T>, child: any[], childenProperty?: keyof T): void {
        const [type, name, meta, children] = child;

        switch (type) {
            case 'qmlprop':
                entity[name] = meta[1][1];
                break;

            case QmlElement.QML_TYPE:
                if (name !== Image.QML_NAME || !childenProperty) {
                    break;
                }

                if (!(childenProperty in entity)) {
                    // @ts-ignore
                    entity[childenProperty] = [];
                }

                (entity[childenProperty] as unknown as any[]).push(SchemaParser.parseImage(children));
                break;
        }
    }

    private static parseImage(chindren: any[]): Image {
        const imageData: Partial<ImageStructure> = {};
        for (const child of chindren) {
            SchemaParser.applyChild(imageData, child);
        }

        return new Image(imageData as ImageStructure);
    }
}
