// http://www.gulpjs.com.cn/
var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var minifyCss = require('gulp-minify-css');
var reload = browserSync.reload;

// 监视文件改动并重新载入
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: '.',
            index: "index.html"
        },
        port: 3000
    });

    //gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], { cwd: '' }, reload);
});
//css压缩
gulp.task('minifyCss', function() {
    gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./www/release/css'));
})

//css压缩
gulp.task('minifyFloderCss', function() {
    gulp.src('./css/plugins/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./www/release/css/plugins'));
})

//JS压缩
gulp.task('reJs', function() {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./www/release/js'));
});

gulp.task('reFloderJs', function() {
    gulp.src('./js/plugins/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./www/release/plugins'));
});

gulp.task('useref', function() {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
})