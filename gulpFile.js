var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

var rutas = {
	rutaJS: 'src/assets/js/*.js',
	rutaSCSS: 'src/assets/scss/*.scss',
	rutaHTML: 'src/*.html'
}
/*seccion de tareas a ejecutar:*/
gulp.task("ejecutarJS", function(){
     gulp.src(rutas.rutaJS)
	 .pipe(uglify())
	 .pipe(gulp.dest('public/assets/js'));
});

gulp.task("ejecutarHTML", function(){
     gulp.src(rutas.rutaHTML)
	 .pipe(gulp.dest('public'));
});

gulp.task("ejecutarSCSS", function(){
     gulp.src(rutas.rutaSCSS)
	.pipe(sass({outputStyle: 'compressed'})
	.on('error', sass.logError))
	.pipe(gulp.dest('public/assets/css'));
});
