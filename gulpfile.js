let gulp = require("gulp");

// lint for all js-files
// check for errors and warnings
let jshint = require("gulp-jshint");
async function lint() {
    gulp.src(['./js/*.js', './js/classes/*.js', './js/core/*.js', './js/vendor/*.js', './js/views/*.js'])
        .pipe(jshint({esnext:true}))
        .pipe(jshint.reporter("default"));
}

// concat all js-files
// merge all js-files in one file called "concat.js"
let concat = require('gulp-concat');
async function GulpConcat() {
    return gulp.src(['./js/*.js', './js/classes/*.js', './js/core/*.js', './js/vendor/*.js', './js/views/*.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('./cleanedFiles/js'));
}

// gulp uglify
// minify all js files
let uglify = require('gulp-uglify-es').default;
async function esuglify() {
    return gulp.src(['./js/*.js', './js/classes/*.js', './js/core/*.js', './js/vendor/*.js', './js/views/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./cleanedFiles/js/'));
}

// clean css
let minify = require('gulp-clean-css');
async function minifyCss(){
    return gulp.src('css/*.css')
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(gulp.dest('./cleanedFiles/css/'));
}

// gulp-image
// optimize png, jpeg, gif, svg images
let image = require('gulp-image');
async function GulpImage() {
    return gulp.src('./img/*')
        .pipe(image())
        .pipe(gulp.dest('./cleanedFiles/images/'));
}

// gulp-less
// less to css
let less = require('gulp-less');
async function GulpLess() {
    return gulp.src('./css/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
}

// gulp less
exports.less = GulpLess;

// gulp-image
exports.image = GulpImage;

// minify css
exports.minify = minifyCss;

// uglify
exports.uglify = esuglify;

// concat
exports.concat = GulpConcat;

// lint
exports.lint = lint;


