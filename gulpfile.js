const gulp = require('gulp');
const gutil = require('gulp-util');

const sass = require('gulp-sass');
const minify = require('gulp-minify');
const concat = require('gulp-concat');

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('prod/css'))
});
gulp.task('allScripts', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('prod/js'))
});
gulp.task('minit', function() {
    return gulp.src('prod/js/scripts.js')
        .pipe(minify({
        ext:{
            min:'-min.js'
        },
        ignoreFiles: ['-min.js']
    	}).on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('prod/js'));
});



gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('js/**/*.js', ['allScripts']); 
});
 
gulp.task('default', []);

