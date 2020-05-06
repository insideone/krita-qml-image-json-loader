import ImageStructure from './ImageStructure';

interface RectangleStructure {
    readonly width: number;
    readonly height: number;
    readonly images: ImageStructure[];
}

export default RectangleStructure;
