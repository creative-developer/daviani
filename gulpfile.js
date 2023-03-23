const { watch, src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync');

const cleancss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');

// Pug
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const pugbem = require('gulp-pugbem');
const prettyHtml = require('gulp-pretty-html');

// SVG sprite
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const webpackFiles = require('./config/webpackFilesInput.js');

function minJs() {
  return (
    src(webpackFiles)
      .pipe(webpackStream(webpackConfig, webpack))
      .on('error', function (error) {
        this.emit('end');
      })
      // .pipe(uglify())
      .pipe(dest('./app/js/'))
      .pipe(browsersync.stream())
  );
}

// main sass
function css() {
  return (
    src('app/sass/main.sass')
      .pipe(sourcemaps.init())
      .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', notify.onError()))
      .pipe(autoprefixer(['last 10 versions']))
      .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
      // .pipe(rename({ extname: '.min.css' }))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('app/css'))
      .pipe(browsersync.stream())
  );
}

// Pug + bem
pugbem.b = true;

function html() {
  return src('app/pug/pages/*.pug')
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(pug({ plugins: [pugbem] }))
    .pipe(
      prettyHtml({
        indent_size: 2,
        indent_with_tabs: true,
        unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
        extra_liners: [],
      }),
    )
    .pipe(dest('app/'))
    .pipe(browsersync.stream());
}

// Browser sync
function browserSync(cb) {
  browsersync.init({
    server: {
      baseDir: 'app',
    },
    notify: false,
    open: false,
  });
  cb();
}

// SVG sprite
function svgSprite() {
  return src('app/img/svg-sprite/*.svg')
    .pipe(
      svgmin(function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
          plugins: [
            {
              cleanupIDs: {
                prefix: prefix + '-',
                minify: true,
              },
            },
          ],
        };
      }),
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[fill-opacity]').removeAttr('fill-opacity');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
          $('[data-name]').removeAttr('data-name');
        },
        parserOptions: { xmlMode: true },
      }),
    )
    .pipe(svgstore())
    .pipe(dest('app/img/'));
}

// watch files
watch(['app/sass/**/*.sass', '!app/sass/libs/libs.sass'], css);
watch('app/pug/**/*.pug', html);
watch(['app/js/main.js', 'app/js/modules/*.js'], minJs);
watch('app/img/svg-sprite/*.svg', svgSprite);

exports.minJs = minJs;

// Export tasks
exports.default = parallel(minJs, css, html, svgSprite, browserSync);
