import gulp from "gulp";
import babel from "gulp-babel";
import rt from "gulp-react-templates";
import rimraf from "rimraf";
import runSequence from "run-sequence";
import jsonfile from "jsonfile";
import path from "path";
import {exec} from "child_process";

const babelrc = jsonfile.readFileSync(".babelrc");
const sources = {
    js: [
        () => babel(babelrc)
    ],
    html: [],
    rt: [
        () => rt({modules: "commonjs", targetVersion: "0.14.0"})
    ],
    json: []
};

for (const ext of Object.keys(sources)) {
    gulp.task(`build:${ext}`, () => {
        let src = gulp.src(`src/**/*.${ext}`);
        for (const transform of sources[ext]) {
            src = src.pipe(transform());
        }
        return src.pipe(gulp.dest("dist"));
    });
}

gulp.task("clean", (cb) => {
    rimraf("dist", cb);
});

gulp.task("build", () => {
    const buildTasks = Object.keys(sources).map((ext) => `build:${ext}`);
    return runSequence(
        "clean",
        buildTasks,
        "link-local"
    );
});

gulp.task("link-local", (cb) => {
    exec("npm install -S dist/renderer/base_component/", cb);
});

gulp.task("watch", () => {
    for (const ext of Object.keys(sources)) {
        gulp.watch(`src/**/*.${ext}`, [`build:${ext}`]);
    }

    // local link modules
    gulp.watch("dist/renderer/base_component/*", ["link-local"]);
});

gulp.task("default", ["build", "watch"]);
