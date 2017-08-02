var gulp = require('gulp');
var rename = require('gulp-rename');
var merge = require('merge-stream');

var sass = require('gulp-sass');

var folder = {
  src: 'src/',
  dest: 'dist/',
  docsSrc: 'docs/src/',
  docsDest: 'docs/',
};

gulp.task('css', function() {
  var src = folder.src + 'sass/email-style.sass';
  var dest = folder.dest + 'css/';
  var sassOpts = {
    outputStyle: 'expanded',
    includePaths: ['bower_components/project-leap/_sass'],
    precision: 3
  };

  return gulp.src(src)
    .pipe(sass(sassOpts)
    .on('error', sass.logError))
    .pipe(gulp.dest(dest));
});


gulp.task('docs:css', function() {
  var src = folder.docsSrc + 'sass/styleguide.sass';
  var dest = folder.docsDest + 'css/';
  var sassOpts = {
    outputStyle: 'expanded',
    includePaths: ['bower_components/project-leap/_sass', 'src/sass', 'docs/src/sass'],
    precision: 3
  };

  return gulp.src(src)
    .pipe(sass(sassOpts)
    .on('error', sass.logError))
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['src', 'docs']);
gulp.task('src', ['css']);
gulp.task('docs', ['docs:css']);
