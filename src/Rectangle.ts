import Image from './Image';
import RectangleStructure from './RectangleStructure';
import QmlElement from './QmlElement';

export default class Rectangle extends QmlElement implements RectangleStructure {
    public static readonly QML_NAME = 'Rectangle';

    public static readonly CHILDREN_PROPERTY = 'images';

    public readonly width: number;
    public readonly height: number;
    public readonly images: Image[];

    constructor(data: RectangleStructure) {
        super();

        this.width = data.width;
        this.height = data.height;
        this.images = data.images;
    }
}
