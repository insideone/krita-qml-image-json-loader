import ImageStructure from './ImageStructure';
import QmlElement from './QmlElement';

export default class Image extends QmlElement implements ImageStructure {
    public static readonly QML_NAME = 'Image';

    public readonly id: string;
    public readonly x: number;
    public readonly y: number;
    public readonly width: number;
    public readonly height: number;
    public readonly source: string;
    public readonly opacity: number;

    constructor(data: ImageStructure) {
        super();
        this.id = data.id;
        this.x = data.x;
        this.y = data.y;
        this.width = data.width;
        this.height = data.height;
        this.source = data.source;
        this.opacity = data.opacity;
    }
}
