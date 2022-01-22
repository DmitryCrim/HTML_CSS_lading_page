var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp.src("scss/style.scss").pipe(sass()).pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
  gulp.watch("scss/**/*.scss", gulp.parallel("sass"));
});

gulp.task("default", gulp.parallel("sass", "watch"));
