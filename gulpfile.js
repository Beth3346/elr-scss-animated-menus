const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
// const scsslint = require('gulp-scss-lint');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browsersync = require('browser-sync').create();
const del = require('del');

var paths = {
  app: 'dist/',
  css: 'dist/css/'
};

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './dist/'
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(['./dist/css/']);
}

// Copy HTML
function copyIndex() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest(paths.app))
}

// Watch files
function watchFiles(done) {
  gulp.watch(['./**/*.scss', 'dist/index.html'], () => {
    return gulp
      .src('./*.scss')
      // .pipe(scsslint())
      .pipe(plumber())
      .pipe(
        sass({
          includePaths: ['node_modules']
        }).on('error', sass.logError)
      )
      .pipe(gulp.dest(paths.css))
      .pipe(
        autoprefixer({
          cascade: false
        })
      )
      .pipe(gulp.dest(paths.css))
      .pipe(cleanCSS({ debug: true }))
      .pipe(gulp.dest(paths.css))
      .pipe(copyIndex())
      .pipe(browserSyncReload(done));
  });
}

gulp.task('default', () => {
  return gulp
    .src('./*.scss')
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest(paths.css))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.css))
    .pipe(cleanCSS({ debug: true }))
    .pipe(gulp.dest(paths.css))
    .pipe(copyIndex());
});

const watch = gulp.parallel(copyIndex, watchFiles, browserSync);

exports.clean = clean;
exports.watch = watch;
exports.copyIndex = copyIndex;
