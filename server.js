/**Obtener una variable para acceder a las funcionalidades de express*/
var express = require("express");



/*configurar servidor*/
var app = express();


/*elementos dinamicos de la pagina*/
var consolidate = require("consolidate"); //libreria que nos permite configurar 
var dust = require("dustjs-linkedin"); //motor para crear vistas dinamicas

app.listen(8081);
//imprime en la consola
console.log("Servidor levantado..");

/*Despachar archivos estaticos*/
//app.use("/", express.static(__dirname + "/vistas"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));


/*configurar nuestro motor de vistas*/
app.set("view engine", "dust");  //nuestras vistas tendran extension .dust
app.engine("dust", consolidate.dust);   //indica el engine que se va a utilizar
app.set("views", __dirname + "/vistas"); //indicamos la carpeta que contiene las vistas


/*hacemos quie el servidor pueda leer los datos que recibe del cliente*/
app.use(express.urlencoded());

/*para peticiones GET*/
app.get("/index", function(request, response){
	/*lógica de como responder a la petición /index */
	response.render("index");
});


app.get("/contacto", function(request, response){
	response.render("contacto");
});


/*
app.post("/suscribirse", function(request, response) {
	console.log("Email: " + request.body.email);
	response.render("respuesta_suscribirse", {
		asunto: "Yo soy el Servidor",
		email: request.body.email
		
	});
	
});

*/

app.post("/suscribirse", function(request, response) {
	console.log("Email: " + request.body.email);
	console.log("Email: " + request.body.email);
	console.log("Email: " + request.body.email);
	console.log("Email: " + request.body.email);
	console.log("Email: " + request.body.email);
	response.render("respuesta_suscribirse", {
		asunto: "Yo soy el Servidor",
		email: request.body.email
		
	});
	
});


