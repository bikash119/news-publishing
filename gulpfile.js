"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); 			// run a local dev server
var open = require('gulp-open'); 				// open url in a browser
var browserify = require('browserify'); 		//Bundle JS for browser
var reactify = require('reactify'); 			// Compile JSX
var source = require('vinyl-source-stream');	// Use conventional text stream with gulp
var concat = require('gulp-concat'); 			//Conactenation
var lint = require('gulp-eslint'); 				//Lint our JS file as well as JSX 

var config ={
	port: 9006,
	devUrl: "http://localhost",
	paths : {
		html : './src/*.html',
		js : 	'./src/**/*.js',
		mainJS : './src/main.js',
		css : [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'node_modules/toastr/toastr.scss'
			],
		images: './src/images',
		dist : './dist'
	}
};

//Start a local dev server

gulp.task("connect",function(){
	connect.server({
		root: ["dist"],
		port: config.port,
		base: config.devUrl,
		livereload: true
	});
});

gulp.task("admin",['connect'],function(){
	gulp.src('dist/index.html')
		.pipe(open({uri:config.devUrl + ":"+config.port+"/"}))
});

gulp.task("html",function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task("js",function(){
	browserify(config.paths.mainJS)
		.transform(reactify)
		.bundle()
		.on('error',console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + "/scripts"))
		.pipe(connect.reload());
});

gulp.task("css",function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + "/css"));
});
gulp.task("images",function(){
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + "/images"))
		.pipe(connect.reload());

	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task("lint",function(){
	return gulp.src(config.paths.js)
			.pipe(lint({config:'eslint.config.json'}))
			.pipe(lint.format());
});

gulp.task("watch",function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js','lint']);
	gulp.watch(config.paths.css, ['css']);
});


gulp.task("default",['admin','html','js','css','images','lint','watch']);