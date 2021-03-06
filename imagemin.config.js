module.exports = {
    "gifsicle": { "optimizationLevel": 2, "interlaced": false, "colors": 256 },
    "mozjpeg": { "progressive": true, "quality": 70 },
    "pngquant": { "quality": [0.25, 0.5] },
    "svgo": {
        "plugins": [
            { "removeViewBox": false },
            { "cleanupIDs": true },
        ]
    },
    "webp": { "quality": 70 }
}
