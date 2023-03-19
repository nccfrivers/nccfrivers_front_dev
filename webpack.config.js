const path = require('path')
const dist = path.resolve(__dirname, 'dist')
let config = {
    mode: 'development',
    watch: true
}

module.exports = [{
    ...config,
    entry: './src/fire.js',
    output: {
        path: dist,
        filename: 'fire.js'
    }
}, {
    ...config,
    entry: './src/blog.js',
    output: {
        path: dist,
        filename: 'blog.js'
    },
}, {
    ...config,
    entry: './src/blogitem.js',
    output: {
        path: dist,
        filename: 'blogitem.js'
    },
}]