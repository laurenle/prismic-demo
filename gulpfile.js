// Loads the main gulp library
var gulp = require('gulp');
    baked = require('baked/gulp');
    moment = require('moment');
    watch = require('gulp-watch');

// Load and get the baked configuration
// in order to use srcDir and dstDir
var config = baked.init();

// This example uses its specific package.json file so its gulp instance seems
// to be distinct than the baked's one. This helper allows to load every tasks
// in the right gulp environment.
baked.defineTasks(gulp);

// Defaults tasks
gulp.task('serve', ['baked:serve']);
gulp.task('default', ['baked:default']);
