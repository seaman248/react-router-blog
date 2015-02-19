var gulp = require('gulp');
var gutil = require('gulp-util');

// reload
var connect = require('gulp-connect');
var opn = require('opn');
var reloadPort = 3000;

// js
var pathJS = {
	src: {
		root: './app/js/jsx/index.jsx',
		watch: './app/js/jsx/**/**/*.jsx'
	},
	dest:{
		name: 'main.js',
		minName: 'main.min.js',
		path: './app/js'
	}
}
var react = require('gulp-react');
var browserify = require('browserify');
var clean = require('gulp-clean');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var reactify = require('reactify');

// Style
var concat = require('gulp-concat-css');
var stylus = require('gulp-stylus');
var minify = require('gulp-minify-css');
var kouto = require('kouto-swiss');

gulp.task('connect', function(){
	connect.server({
		root: 'app',
		port: reloadPort,
		livereload: true
	});
});

gulp.task('browserify', function(){
	var b = browserify();
	b.transform(reactify);
	b.add(pathJS.src.root);
	b.on('error', function(e){
		gutil.log(e);
	});
	b.bundle()
	.pipe(source(pathJS.dest.name))
	.pipe(gulp.dest(pathJS.dest.path))
	.pipe(connect.reload());
});

gulp.task('uglify', function(){
	gulp.src(pathJS.dest.path+'/'+pathJS.dest.name)
		.pipe(uglify())
		.pipe(rename(pathJS.dest.minName))
		.pipe(gulp.dest(pathJS.dest.path))
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
	opn('http://localhost:'+reloadPort, 'chromium-browser');
});

gulp.task('watch', ['browserify', 'style', 'open'], function(){
	gulp.watch(pathJS.src.watch, ['browserify']);
	gulp.watch('./app/*.html', ['html']);
	gulp.watch('./app/styles/styl/**/*.styl', ['style']);
});

gulp.task('default', ['connect', 'watch']);