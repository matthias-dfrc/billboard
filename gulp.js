<!-- gulp.js-->
var gulp = require('gulp');
var run = require('gulp-run');
var livereload = require('gulp-livereload');

gulp.task('mainhtml', function() {
    gulp.src('src/**/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

gulp.task('run', function() {
  return run('../dep/electron dist/ ').exec();
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/**/*.html',['copy-html']);
});

gulp.task('default', ['watch', 'run']);
