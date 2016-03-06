import gulp from "gulp";
import babel from "gulp-babel";
import rimraf from "rimraf";
import runSequence from "run-sequence";
import jsonfile from "jsonfile";

const sources = {
    js: "src/**/*.js",
    html: "src/**/*.html"
};

gulp.task("clean", (cb) => {
    rimraf("dist", cb);
});

gulp.task("build:js", () => {
    const babelrc = jsonfile.readFileSync(".babelrc");
    return gulp.src(sources.js)
        .pipe(babel(babelrc))
        .pipe(gulp.dest("dist"));
});
gulp.task("build:html", () => {
    return gulp.src(sources.html)
        .pipe(gulp.dest("dist"));
});

gulp.task("build", () => {
    return runSequence(
        "clean",
        ["build:js", "build:html"]
    );
});

gulp.task("watch", () => {
    gulp.watch(sources.js, ["build:js"]);
    gulp.watch(sources.html, ["build:html"]);
});

gulp.task("default", ["build", "watch"]);
