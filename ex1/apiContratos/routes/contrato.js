var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

router.get('/', function(req, res) {
    if (req.query.entidade_comunicante) {
        Contrato.listByEntidade(req.query.entidade_comunicante)
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
        return;
    }

    if (req.query.tipoprocedimento) {
        Contrato.listByTipo(req.query.tipoprocedimento)
            .then(data => res.jsonp(data))
            .catch(erro => res.jsonp(erro))
        return;
    }


    Contrato.list()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

router.get('/entidades', function(req, res) {
    Contrato.listEntidades()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
})

router.get('/tipos', function(req, res) {
    Contrato.listTipos()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
})

router.get('/:id', function(req, res) {
    Contrato.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
})


router.post('/', function(req, res) {
    Contrato.insert(req.body)
        .then(data => res.status(201).jsonp(data))
        .catch(erro => res.jsonp(erro))
})

router.put('/:id', function(req, res) {
    Contrato.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
})

router.delete('/:id', function(req, res) {
    return Contrato.remove(req.params.id)
        .then(console.log("Deleted " + req.params.id))
        .catch(erro => res.jsonp(erro))
})

module.exports = router;