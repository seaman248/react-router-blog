var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('browserify');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('connect', function(){
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('react', function(){
	gulp.src('./app/js/jsx/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('./app/js/jsx/compile_jsx'))
		.pipe(connect.reload());
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


gulp.task('watch', ['react', 'browserify'], function(){
	gulp.watch('./app/js/jsx/**/**/*.jsx', ['react', 'browserify']);
	gulp.watch('./app/*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);