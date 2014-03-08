/**Obtener una variable para acceder a las funcionalidades de express*/
var express = require("express");



/*configurar servidor*/
var app = express();
app.listen(8081);
//imprime en la consola
console.log("Servidor levantado..");

/*Despachar archivos estaticos*/
//app.use("/", express.static(__dirname + "/vistas"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));


/*elementos dinamicos de la pagina*/
var consolidate = require("consolidate"); //libreria que nos permite configurar 
var dust = require("dustjs-linkedin"); //motor para crear vistas dinamicas


/*configurar nuestro motor de vistas*/
app.set("view engine", "dust");  //nuestras vistas tendran extension .dust
app.engine("dust", consolidate.dust);   //indica el engine que se va a utilizar
app.set("views", __dirname + "/vistas"); //indicamos la carpeta que contiene las vistas






