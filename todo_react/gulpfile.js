var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');

//React, ES6, JSX
gulp.task('build:react', () => {
	browserify({
		entries: ['./app.js'],
		extensions: ['.js'],
		debug: true
	})
		.transform('babelify', {presets: ['es2015', 'react']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(notify({
			message: "React compiled."
		}))
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('watch:react', () => {
	gulp.watch('app.js', ['build:react']);
});