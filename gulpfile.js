const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

gulp.task('sass', function() {
  return gulp.src("./src/styles/**/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("./dist/styles/"));
});

gulp.task('imagemin', function() {
  return gulp.src("./src/imgs/**/*")
  .pipe(imagemin())
  .pipe(gulp.dest("./dist/imgs/"));
});

gulp.task('uglify', function() {
  return gulp.src("./src/scripts/**/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("./dist/scripts/"));
});

gulp.task('watch', function () {
  gulp.watch("./src/imgs/**/*", gulp.parallel("imagemin"));
  gulp.watch("./src/scripts/**/*.js", gulp.parallel("uglify"));
  gulp.watch("./src/styles/**/*.scss", gulp.parallel("sass"));
});

gulp.task("build", function(callback) {
  gulp.parallel("sass", "imagemin", "uglify")(callback);
});