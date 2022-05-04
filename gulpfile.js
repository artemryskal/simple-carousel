const srcDir = 'src'
const distDir = 'dist'

const { src, parallel, dest } = require('gulp')
const merge = require('merge-stream')
const browserSync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default
const minify = require('gulp-clean-css')

function setBrowserSync () {
  browserSync.init({
    server: {
      baseDir: srcDir
    },
    notify: false,
    open: false
  })
}

function scripts () {
  return merge([
    src(`${srcDir}/carousel.js`).pipe(dest(distDir)),
    src(`${srcDir}/carousel.js`).pipe(uglify()).pipe(dest(`${distDir}/min`))
  ])
}

function styles () {
  return merge([
    src(`${srcDir}/carousel.css`).pipe(dest(distDir)),
    src(`${srcDir}/carousel.css`).pipe(minify({compatibility: 'ie8'})).pipe(dest(`${distDir}/min`))
  ])
}

function html () {
  return src(`${srcDir}/index.html`)
    .pipe(dest(distDir))
}

exports.default = parallel(setBrowserSync, scripts, styles, html)
