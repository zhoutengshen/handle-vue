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
        ]
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
        ["@babel/plugin-proposal-class-properties", {}]
    ]
}