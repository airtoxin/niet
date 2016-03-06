import gulp from "gulp";
import babel from "gulp-babel";
import rt from "gulp-react-templates";
import rimraf from "rimraf";
import runSequence from "run-sequence";
import jsonfile from "jsonfile";

const sources = {
    js: "src/**/*.js",
    html: "src/**/*.html",
    rt: "src/**/*.rt",
    json: "src/**/*.json"
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
gulp.task("build:rt", () => {
    return gulp.src(sources.rt)
        .pipe(rt({
            modules: "commonjs",
            targetVersion: "0.14.0"
        }))
        .pipe(gulp.dest("dist"))
});
gulp.task("build:json", () => {
    return gulp.src(sources.json)
        .pipe(gulp.dest("dist"));
})

gulp.task("build", () => {
    return runSequence(
        "clean",
        ["build:js", "build:html", "build:rt", "build:json"]
    );
});

gulp.task("watch", () => {
    gulp.watch(sources.js, ["build:js"]);
    gulp.watch(sources.html, ["build:html"]);
    gulp.watch(sources.rt, ["build:rt"]);
    gulp.watch(sources.json, ["build:json"]);
});

gulp.task("default", ["build", "watch"]);
