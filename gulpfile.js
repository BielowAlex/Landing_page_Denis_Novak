import gulp from 'gulp';

import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js';
import {copy, reset, html, js, server, scss,git} from './gulp/tasks/index.js';

global.app = {
    isBuild:process.argv.includes('--build'),
    isDev:!process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins:plugins
}

const watcher = () => {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.scss,scss);
    gulp.watch(path.watch.files, copy);
}


const mainTasks = gulp.parallel(copy,html,scss,js);
const serve = gulp.parallel(watcher,server);

const dev = gulp.series(reset,mainTasks,serve);
const build = gulp.series(reset,mainTasks,git);

export {
    dev,
    build
}

gulp.task('default', dev)