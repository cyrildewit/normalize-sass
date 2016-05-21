"use strict";
// =============================================================================
// gulpfile.js
//    This javascript file contains all the Gulp tasks.
//
// Author(s): Cyril de Wit
// To do:
// -
//
// Table of contents:
// - 0. / Core
// - 1. / Paths
// - 2. / Style Tasks
// - 3. / Watch Tasks
// - 4. / Default task
// =============================================================================

// =============================================================================
// 0. / Core
// =============================================================================

// Gulp
var gulp          = require('gulp');


// Styles
var sass          = require('gulp-sass');
var rename        = require('gulp-rename');


// =============================================================================
// 1. / Paths
// =============================================================================

var paths = {
    'src': './source',
    'dist': './dist'
}


// =============================================================================
// 2. / Style Tasks
// =============================================================================

// Unminified
gulp.task('unminified', function() {
    return gulp.src(paths.src + '/normalize.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest(paths.dist + '/'));
});

// Minified
gulp.task('minified', function() {

    return gulp.src(paths.src + '/normalize.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.dist + '/'));
});


// =============================================================================
// 3. / Watch Tasks
// =============================================================================

gulp.task('watch', function() {
    gulp.watch(paths.src + '/*.scss', ['unminified', 'minified']);
});


// =============================================================================
// 4. / Default task
// =============================================================================

gulp.task('default',[
    'unminified',
    'minified',
    'watch'
]);
