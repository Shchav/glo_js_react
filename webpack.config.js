// const path = require('path')
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

// module.exports = {
export default {
    // context: path.resolve(__dirname, 'src'),
    entry: './src/index.js',
    output: {
        filename: 'js/main.js',
        // path: path.resolve(__dirname, 'dist')
        path: path.resolve(dirname(fileURLToPath(import.meta.url)), 'dist')
    },
    devServer: {
        hot: true,
        static: {
            // directory: path.resolve(__dirname, 'dist'),
            directory: path.resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
            watch: true
        }
    }
}