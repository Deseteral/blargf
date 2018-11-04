const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const extname = require('gulp-extname');
const { spawn } = require('child_process');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

gulp.task('clean', () => del(['build']));

gulp.task('js', () => (
  gulp.src(['src/**/*.+(js|jsx)', '!src/static/**/*'])
    .pipe(babel())
    .pipe(extname('.js'))
    .pipe(gulp.dest('build'))
));

gulp.task('static-js', () => (
  gulp.src('src/static/code.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./build/static'))
));

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('js', 'static-js'),
));

let node = null;
function runApplication(cb) {
  if (node) node.kill();

  node = spawn('node', ['build/main.js'], { stdio: 'inherit' });
  node.on('close', (exitCode) => {
    if (exitCode === 8) gulp.log('Error detected, waiting for changes...');
  });

  if (cb) cb();
}

gulp.task('dev', () => {
  runApplication();
  gulp.watch('src/**/*', gulp.series('default', runApplication));
});

process.on('exit', () => {
  if (node) node.kill();
});
