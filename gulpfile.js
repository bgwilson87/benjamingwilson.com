var gulp = require('gulp');
var uglify = require('gulp-uglify');
var fs = fs = require('fs');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var mergeStream = require('merge-stream');
var connect = require('gulp-connect');
var replace = require('gulp-replace');
var appKeys = require('./app-keys.json');

var scriptsfiles = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/angular/angular.min.js',
  'node_modules/angular-route/angular-route.min.js',
  'node_modules/angular-sanitize/angular-sanitize.min.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',  
  'node_modules/lodash/lodash.min.js',
  'node_modules/angular-simple-logger/dist/angular-simple-logger.min.js',
  'node_modules/angular-google-maps/dist/angular-google-maps.min.js',
  'node_modules/angulartics/dist/angulartics.min.js',
  'node_modules/angulartics-google-analytics/dist/angulartics-ga.min.js',
  'app/scripts/app.js',
  'app/scripts/**/*.js'
];

var cssfiles = [
  'node_modules/bootstrap/dist/css/bootstrap.min.css'
];

var validateSources = function(sources) {
  sources.forEach(function(source) {
    if (!source.match(/\*/) && !fs.existsSync(source)) {
      throw source + " not found!";
    }
  });
};

gulp.task('html', function() {
  var timestamp = ((new Date()).valueOf().toString()) + (Math.floor((Math.random() * 1000000) + 1).toString());

  return gulp.src('app/templates/index.html')
    .pipe(replace(/@@cacheHash/g, timestamp))
    .pipe(gulp.dest('app/'));
});

gulp.task('scripts', ['html'], function() {
  validateSources(scriptsfiles);

  return gulp.src(scriptsfiles)
    .pipe(concat('main.js'))
    .pipe(replace(/@@googleMapsApiBrowserKey/, appKeys["google_maps_api_browser_key"]))
    // .pipe(uglify())
    .pipe(gulp.dest('app/assets'));
});

gulp.task('styles', function() {
  validateSources(cssfiles);

  var cssStream = gulp.src(cssfiles)
    .pipe(concatCss('css-files.css'));

  var scssStream = gulp.src('app/styles/**/*.scss')
    .pipe(sass())
    .pipe(concatCss('scss-files.scss'));

  return mergeStream(cssStream, scssStream)
        .pipe(concatCss('main.css'))
        // .pipe(cleanCss())
        .pipe(gulp.dest('app/assets/'));
});

gulp.task('fonts', function() {
    return gulp.src([
                    'node_modules/font-awesome/fonts/fontawesome-webfont.*'])
            .pipe(gulp.dest('app/assets/fonts/'));
});

gulp.task('watch', function() {
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.js', ['scripts']);
  gulp.watch(['app/templates/*.html', 'app/assets/*'], ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('default', ['watch', 'connect'], function() {
  gulp.start('styles', 'scripts', 'fonts');
});