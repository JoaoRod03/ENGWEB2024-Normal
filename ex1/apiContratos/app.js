var express = require('express');
var path = require('path');
var logger = require('morgan');
var createError = require('http-errors');
var mongoose = require("mongoose");

var app = express();

var mongoDB = "mongodb://127.0.0.1/contratos";
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB"));
db.once("open", () => {
	console.log("Conexão ao MongoDB realizada com sucesso");
});

var indexRouter = require('./routes/index');
var contratoRouter = require('./routes/contrato');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contratos', contratoRouter);

app.use(function (req, res, next) {
	next(createError(404));
})

app.use(function (err, req, res, next) {
	// Define o status da resposta
	res.status(err.status || 500);

	// Envie a mensagem de erro e qualquer stack trace em modo de desenvolvimento
	res.json({
		message: err.message,
		error: req.app.get('env') === 'development' ? err : {}
	});
});



module.exports = app;
