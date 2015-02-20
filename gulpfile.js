var gulp = require('gulp');
var gutil = require('gulp-util');

// reload
var connect = require('gulp-connect');
var opn = require('opn');
var reloadPort = 3000;

// HTML
var pathHtml = './public';
var pathJade = './views/index.jade';
var jade = require('gulp-jade');

// js
var pathJS = {
	src: {
		root: './client/jsx/index.jsx',
		watch: './client/jsx/**/**/*.jsx'
	},
	dest:{
		name: 'main.js',
		minName: 'main.min.js',
		path: './public'
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
var pathStyles = {
	src: {
		path: './client/styl/**/*.styl',
		watch: './client/styl/**/*.styl'
	},
	dest: {
		name: 'main.css',
		path: './public'

	}
}
var concat = require('gulp-concat-css');
var stylus = require('gulp-stylus');
var minify = require('gulp-minify-css');
var kouto = require('kouto-swiss');

gulp.task('connect', function(){
	connect.server({
		root: 'public',
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
	gulp.src(pathJade)
		.pipe(jade())
		.pipe(gulp.dest(pathHtml))
		.pipe(connect.reload());
});

gulp.task('style', function(){
	gulp.src(pathStyles.src.path)
		.pipe(stylus({
			use: [kouto()]
		}))
		.pipe(concat(pathStyles.dest.name))
		.pipe(minify())
		.pipe(gulp.dest(pathStyles.dest.path))
		.pipe(connect.reload());
});

gulp.task('open', function(){
	opn('http://localhost:'+reloadPort, 'chromium-browser');
});

gulp.task('watch', ['browserify', 'style', 'open'], function(){
	gulp.watch(pathJS.src.watch, ['browserify']);
	gulp.watch(pathJade, ['html']);
	gulp.watch(pathStyles.src.watch, ['style']);
});

gulp.task('default', ['connect', 'watch']);