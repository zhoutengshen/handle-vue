/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                "targets": {
                    "chrome": "58",
                    "ie": "11"
                }
            },
        ],
    ]
}