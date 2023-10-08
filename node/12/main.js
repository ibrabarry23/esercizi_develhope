"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var planets_1 = require("./controllers/planets");
var app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.setHeader('Content-Security-Policy', "script-src 'self' 'unsafe-inline';");
    next();
});
app.use(express_1.default.json());
app.get('/api/planets', planets_1.getAll);
app.get('/api/planets/:id', planets_1.getOneById);
app.post('/api/planets', planets_1.create);
app.put('/api/planets/:id', planets_1.updateById);
app.delete('/api/planets/:id', planets_1.deleteById);
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT));
});
