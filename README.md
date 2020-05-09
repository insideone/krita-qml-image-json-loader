# qml-images-rectangle-json-loader

Allows webpack to emit `Rectangle` object from `qml-webpack-loader` output. Optionally makes `require()` for each of `Image.source` property.

## Installation & Usage

```bash
npm i --save-dev qml-images-rectangle-json-loader qml-webpack-loader
```

**webpack.config.js**
```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.qml$/,
                use: [
                    {
                        loader: 'qml-images-rectangle-json-loader',
                        options: { requireSources: true },
                    },
                    'qml-webpack-loader',
                ],
            },
        ],
    },

};
```

## Input

[qml-webpack-loader](https://github.com/insideone/qml-webpack-loader)\-structured output (see json files from [qmlweb-parser](https://github.com/qmlweb/qmlweb-parser/tree/master/tests/qml) for examples) with a single Rectangle composed of Image(s)

## Options

* `requireSource: boolean` - emit `require()` for each `Image.source` parsed

### Example

```qml
import QtQuick 1.1

Rectangle {
    width: 4000
    height: 5330

    Image {
        id: background
        x: 0
        y: 0
        width: 4000
        height: 5330
        source: "Level-1_images/background.png"
        opacity: 1
    }
    Image {
        id: cat_black
        x: 2161
        y: 4252
        width: 118
        height: 136
        source: "Level-1_images/cat_black.png"
        opacity: 1
    }
}
```

## Output

Rectangle object (see [definitions](./src/RectangleStructure.ts)).

See also `__tests__/cases/successful/%d` for input/output examples.
