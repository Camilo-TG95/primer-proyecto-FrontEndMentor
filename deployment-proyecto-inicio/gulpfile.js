
const { src, dest, watch, parallel } = require("gulp"); 
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function css( done ) {
    
    src('src/scss/**/*.scss') // Identifica el archivo sass
        .pipe( plumber())
        .pipe( sass())  // Compila el archivo
        .pipe( dest("build/css"))   // Almacena el archivo

    done();
}

function dev( done ) {
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript); // Creamos un wacth que este pendiente a los cambios en app.js 
    
    done()
}

function javascript( done ) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'));  // Este codigo lo guarda dentro de la carpeta build


    done();
}

exports.css = css;
exports.js = javascript;
exports.dev = parallel(javascript, dev);