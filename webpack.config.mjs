import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('webpack').Configuration} */
export default {
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, './bin/'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        extensionAlias: {
            '.js': ['.js', '.ts'],
            '.mjs': ['.mjs', '.mts'],
            '.cjs': ['.cjs', '.cts']
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader"
            }
        ]
    }
};