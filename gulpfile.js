const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
<<<<<<< HEAD
const imagemin = require('gulp-imagemin');


function styles() {
=======


function styles () {
>>>>>>> 136a54e4d832e52681eee0f3b630e1996cf19940
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest('./dist/css'));
}

<<<<<<< HEAD
function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

    exports.default = gulp.parallel(styles, images);

    exports.watch = function() {
        gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
 }
=======
    exports.default = styles;
    exports.watch = function() {
        gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    }
>>>>>>> 136a54e4d832e52681eee0f3b630e1996cf19940
