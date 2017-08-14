const gulp = require('gulp');

const sass = require('gulp-sass');

const child = require('child_process');
const gulpUtil = require('gulp-util');

const inlineCss = require('gulp-inline-css');

const dir = {
  src: 'src/',
  dest: 'dist/',
  docs: 'docs/',
  docsSrc: 'docs/src/',
  siteRoot: 'docs/_site/'
};

gulp.task('css', () => {
  const src = dir.src + 'sass/email-style.sass';
  const dest = dir.dest + 'css/';
  const sassOpts = {
    outputStyle: 'expanded',
    includePaths: ['bower_components/project-leap/_sass'],
    precision: 3
  };

  gulp.src(src)
    .pipe(sass(sassOpts)
    .on('error', sass.logError))
    .pipe(gulp.dest(dest));
});

gulp.task('templates', () => {
  const src = dir.src + 'templates/**/*.html';
  const dest = dir.dest + 'templates/';

  return gulp.src(src)
    .pipe(inlineCss())
    .pipe(gulp.dest(dest));
});

gulp.task('docs:css', () => {
  const src = dir.docsSrc + 'sass/styleguide.sass';
  const dest = dir.docs + 'css/';
  const sassOpts = {
    outputStyle: 'expanded',
    includePaths: ['bower_components/project-leap/_sass', 'src/sass', 'docs/src/sass'],
    precision: 3
  };

  gulp.src(src)
    .pipe(sass(sassOpts)
    .on('error', sass.logError))
    .pipe(gulp.dest(dest));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('./bin/jekyll', ['serve',
    '--source', dir.docs,
    '--destination', dir.siteRoot
  ]);

  const logger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => {
        if(message.length > 0) {
          gulpUtil.log('Jekyll: ' + message)
        }
      });
  };

  jekyll.stdout.on('data', logger);
  jekyll.stderr.on('data', logger);
});

gulp.task('watch', () => {
  gulp.watch(dir.src + '**/*.sass', ['css'])
  gulp.watch(dir.docsSrc + '**/*.sass', ['docs:css'])
});

gulp.task('default', ['src', 'docs', 'jekyll']);
gulp.task('src', ['css', 'templates']);
gulp.task('docs', ['docs:css']);
gulp.task('serve', ['jekyll', 'watch']);
