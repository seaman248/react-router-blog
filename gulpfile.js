var gulp = require('gulp');
var gutil = require('gulp-util');

// reload
var connect = require('gulp-connect');
var opn = require('opn');

// js
var react = require('gulp-react');
var browserify = require('browserify');
var clean = require('gulp-clean');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

// Style
var concat = require('gulp-concat-css');
var stylus = require('gulp-stylus');
var minify = require('gulp-minify-css');
var kouto = require('kouto-swiss');

gulp.task('connect', function(){
	connect.server({
		root: 'app',
		port: 3000,
		livereload: true
	});
});

gulp.task('react', function(){
	gulp.src('./app/js/jsx/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('./app/js/jsx/compile_jsx'));
});

gulp.task('clean', function(){
	gulp.src('./app/js/jsx/compile_jsx')
		.pipe(clean({read: false}));
});

gulp.task('browserify', ['react'], function(){
	return browserify('./app/js/jsx/compile_jsx/index.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./app/js'))
		.pipe(connect.reload());
});

gulp.task('uglify', function(){
	gulp.src('./app/js/main.js')
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./app/js'))
});

gulp.task('html', function(){
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('style', function(){
	gulp.src('./app/styles/styl/**/*.styl')
		.pipe(stylus({
			use: [kouto()]
		}))
		.pipe(concat('main.css'))
		.pipe(minify())
		.pipe(gulp.dest('./app/styles'))
		.pipe(connect.reload());
});

gulp.task('open', function(){
	opn('http://localhost:3000', 'google-chrome');
});

gulp.task('watch', ['react', 'browserify', 'style', 'open'], function(){
	gulp.watch('./app/js/jsx/**/**/*.jsx', ['react', 'browserify']);
	gulp.watch('./app/*.html', ['html']);
	gulp.watch('./app/styles/styl/**/*.styl', ['style']);
});

gulp.task('default', ['connect', 'watch']);