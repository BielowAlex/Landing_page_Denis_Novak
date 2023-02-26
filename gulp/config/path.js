import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './public';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/res/scripts/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/res/`,
        css: `${buildFolder}/res/styles/`,
        img:`${buildFolder}/res/`,
        all:`${buildFolder}/**/*`,
    },
    src: {
        js:`${srcFolder}/js/app.js`,
        html:`${srcFolder}/**.html`,
        files: `${srcFolder}/res/**/*.*`,
        scss:`${srcFolder}/styles/style.scss`,
        img:`${srcFolder}/res/images/*.png`,
    },
    watch: {
        js:`${srcFolder}/js/**/*.js`,
        html:`${srcFolder}/**/*.html`,
        scss:`${srcFolder}/styles/**/*.scss`,
        files: `${srcFolder}/res/**/*.*`,
    },
    clean: buildFolder,
    buildFolder:buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}