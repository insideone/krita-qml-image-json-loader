import Rectangle from './Rectangle';

export default class SchemaValidator {
    validate(schema: any[]) {
        if (!(schema instanceof Array)) {
            throw new Error('Schema must be an array, %s given'.replace('%s', typeof schema));
        }

        if (schema.length < 3) {
            throw new Error('There should be at least 3 array elements, %d given'.replace('%d', `${schema.length}`));
        }

        for (const node of schema) {
            if (!(node instanceof Array)) {
                continue;
            }

            const [definitionType, objectType] = node;

            if (definitionType === Rectangle.QML_TYPE && objectType === Rectangle.QML_NAME) {
                return;
            }
        }

        throw new Error("Rectangle element hasn't been found");
    }
}
