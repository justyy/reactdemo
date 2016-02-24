// 导入需要的模块
var gulp = require('gulp'),
    // sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    // coffee = require('gulp-coffee'),
    // concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    // jpegtran = require('imagemin-jpegtran'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber');
    // imageisux = require('gulp-imageisux'),
    // cssnano = require('gulp-cssnano');


// 编译sass，其中plumber是防止出错崩溃的插件
// gulp.task('sass', function() {
//     gulp.src('src/sass/*.scss')
//         .pipe(plumber())
//         .pipe(sass())
//         .pipe(gulp.dest('dist/css'));
// });

// 压缩图片
// gulp.task('image', function(){
//     gulp.src('src/img/*')
//         .pipe(imageisux('../../public/img/', false));
// })

// gulp.task('jpgmin',function(){
//     gulp.src('src/img/*.jpg')
//         .pipe(imagemin({
//             progressive: true,
//             use:[jpegtran()]
//             }))
//         .pipe(gulp.dest('public/img'));
// });

// gulp.task('pngmin',function(){
//     gulp.src('src/img/*.png')
//         .pipe(imagemin({
//             quality: '100', 
//             speed: 4,
//             use:[pngquant()]
//         }))
//         .pipe(gulp.dest('public/img'));
// });

// 编译jade
gulp.task('jade', function() {
    gulp.src('jade/*.jade')
        .pipe(plumber())
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('public'));
});

// 编译coffee
// gulp.task('coffee', function() {
//     gulp.src('src/coffee/*.coffee')
//         .pipe(plumber())
//         .pipe(coffee({bare: true}))
//         .pipe(gulp.dest('public/js'));
// });



// 将所有css文件连接为一个文件并压缩，存到public/css
// gulp.task('concatCss', function() {
//     gulp.src(['dist/css/*.css'])
//         .pipe(concat('main.css'))
//         .pipe(cssnano())
//         .pipe(gulp.dest('public/css'));
// });


// 将所有js文件连接为一个文件并压缩，存到public/js
// gulp.task('concatJs', function() {
//     gulp.src(['dist/js/*.js'])
//         .pipe(concat('main.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('public/js'));
// });



// 默认任务
gulp.task('default', ['watch']);


// 监听任务
gulp.task('watch', function() {

    // 建立浏览器自动刷新服务器
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });


    // 预处理
    gulp.watch('jade/**', ['jade']);
    // gulp.watch('src/coffee/**', ['coffee']);
    // gulp.watch('src/sass/**', ['sass']);
    // gulp.watch('src/img/**', ['pngmin']);


    // 合并压缩
    // gulp.watch('dist/css/*.css', ['concatCss']);
    // gulp.watch('dist/js/*.js', ['concatJs']);


    // 自动刷新
    gulp.watch('public/**', function() {
        browserSync.reload();
    });

});