var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('connect', function(){
	connect.server({
		root: 'app',
		livereload: true
	});
});

gulp.task('react', function(){
	gulp.src('./app/js/jsx/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('./app/js/jsx/compile_jsx'));
});

gulp.task('browserify', ['react'], function(){
	gulp.src('./app/js/js/jsx/compile_jsx/**/*.js')
		.pipe(clean({force: true}))
		.pipe(browserify())
		.pipe(rename('main.js'))
		.pipe(gulp.dest('.app/js'))
		.pipe(connect.reload());
});

// gulp.task('react-browserify', function(){
// 	gulp.src('./app/js/jsx/**/*.jsx')
// 		.pipe(react())
// 		.pipe(browserify({
// 			insertGlobals: true
// 		}))
// 		.pipe(rename('main.js'))
// 		.pipe(gulp.dest('./app/js'))
// 		.pipe(connect.reload());
// });

gulp.task('html', function(){
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});


gulp.task('watch', ['react', 'browserify'], function(){
	gulp.watch('./app/js/jsx/**/*.jsx', ['react', 'browserify']);
	gulp.watch('./app/*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);