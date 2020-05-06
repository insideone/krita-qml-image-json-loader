export default [
    'require("/some/project/directory/Level-1_images/background.png")',
    `module.exports = ${JSON.stringify({
        'default': {
            'width': 4000,
            'height': 5330,
            'images': [
                {
                    'id': 'background',
                    'x': 0,
                    'y': 0,
                    'width': 4000,
                    'height': 5330,
                    'source': 'Level-1_images/background.png',
                    'opacity': 1,
                },
            ],
        },
    })}`,
];
