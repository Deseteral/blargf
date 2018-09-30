const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const extname = require('gulp-extname');

gulp.task('clean', () => del(['build']));

gulp.task('js', () => (
  gulp.src('src/**/*.+(js|jsx)')
    .pipe(babel())
    .pipe(extname('.js'))
    .pipe(gulp.dest('build'))
));

gulp.task('css', () => (
  gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
));

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('js', 'css'),
));

gulp.task('dev', () => (
  gulp.watch('src/**/*', gulp.series('default'))
));
