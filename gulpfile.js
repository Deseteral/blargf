const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('clean', () => del(['build']));

gulp.task('js', () => (
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'))
));

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('js'),
));
