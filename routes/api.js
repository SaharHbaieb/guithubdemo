var express = require('express');
var router = express.Router();
var Model = require('../models/boutique.js');

router.get('/boutiques/:id', function (request, response) {
    console.log('getting a boutique');
    var id = request.params.id;
    Model.findById(id, function (err, res) {
        if (err) {
            return response.send(err);
        } else {
            var boutique = res;
            console.log('made it to else');
            response.json(boutique);
        }
    });
});


router.get('/boutique', function (request, response) {
    Model.find({}, function (err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

router.delete('/boutiques/:id', function (request, response) {
    var id = request.params.id;
    Model.remove({ _id: id }, function (err, resource) {
        if (err) {
            return response.send(err);
        } else {
            response.send(resource);
        }
    })
});

router.post('/boutique', function (request, response) {
    var boutique = new Model(request.body);
    boutique.save(function (err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    });
});


module.exports = router;