const path = require('path');

const gulp = require('gulp');
const del = require('del');
const filter = require('gulp-filter');
const eslint = require('gulp-eslint');
const eslintIfFixed = require('gulp-eslint-if-fixed');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);

function clean() {
  return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
  const fileFilter = filter(file => file.stat.isFile());

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join(`!${conf.paths.src}`, '/**/*.{scss,js,html}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(conf.paths.dist));
}

gulp.task('lint-fix', function() {
  return gulp.src('src/**/**.js')
  .pipe(eslint({fix:true}))
  .pipe(eslint.format())
  .pipe(eslintIfFixed('src'));
});
