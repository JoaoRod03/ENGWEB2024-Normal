var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
	axios.get("http://localhost:16000/contratos")
		.then(response => {
			res.render('listaContratos', { lista : response.data, data : d, titulo : 'Lista de Contratos'})
		})
		.catch(error => {
			res.render('error', { error : error, message : 'Erro ao recuperar os contratos',  data : d})
		})
});

router.get('/:idContrato', function (req, res) {
	var d = new Date().toISOString().substring(0, 16);
	axios.get('http://localhost:16000/contratos/' + req.params.idContrato)
		.then(resposta => {
			res.render('contrato', { titulo: 'Detalhes do Contrato', contrato: resposta.data, data: d });
		})
		.catch(erro => {
			res.render('error', { message: 'Erro ao recuperar o contrato.', data: d})
		})
});

router.get('/entidades/:nipc', function(req, res) {
  var d = new Date().toISOString().substring(0, 16);
  console.log(req.params.nipc);
  axios.get('http://localhost:16000/contratos')
    .then(response => {
      const entidadeFiltrada = response.data.filter(contrato => contrato.NIPC_entidade_comunicante == req.params.nipc);
      const somaPrecoContratual = entidadeFiltrada.reduce((total, contrato) => total + Number(contrato.precoContratual), 0);
      if (entidadeFiltrada.length > 0) {
        res.render('entidade', {
          titulo: 'Detalhes da Entidade',
          nomeEntidade: entidadeFiltrada[0].entidade_comunicante,
          NIPC: req.params.nipc,
          contratos: entidadeFiltrada,
          somaPrecoContratual: somaPrecoContratual,
          data: d
        });
      } else {
        res.render('error', {
          message: 'Nenhum contrato encontrado para a entidade especificada.',
          data: d
        });
      }
    })
    .catch(error => {
      res.render('error', {
        error: error,
        message: 'Erro ao recuperar os contratos.',
        data: d
      });
    });
});


module.exports = router;
