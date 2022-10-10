const gulp = require('gulp');
const argv = require('yargs').argv;
const browserSync = require('browser-sync').create();
const projectConfig = require('../my-site/projectConfig.json')
const path = projectConfig.path;
const htmlmin = require('gulp-htmlmin');


const isDev = function() {
   return !argv.prod;
}

const isProd = function() {
   return !!argv.prod;
}

const html = function() {
   return gulp.src('source/*.html')
   .pipe(htmlmin({collapseWhitespace: true}))
   .pipe(gulp.dest('build'));
}

function browsersync() {
   browserSync.init({
            open: true,
            server: path.src.srcPath
   });
}


exports.default = browsersync;
