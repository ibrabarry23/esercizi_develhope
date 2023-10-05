"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
var planets = [
    { id: 1, name: 'Mercury' },
    { id: 2, name: 'Venus' },
    { id: 3, name: 'Earth' },
    { id: 4, name: 'Jupiter' },
    { id: 5, name: 'Saturn' },
    { id: 6, name: 'Uranus' },
    { id: 7, name: 'Neptune' },
    { id: 8, name: 'Mars' },
];
var getAll = function (req, res) {
    res.status(200).json(planets);
};
exports.getAll = getAll;
var getOneById = function (req, res) {
    var id = req.params.id;
    var planet = planets.find(function (p) { return p.id === parseInt(id); });
    if (!planet) {
        res.status(404).json({ msg: 'Planet not found' });
        return;
    }
    res.status(200).json(planet);
};
exports.getOneById = getOneById;
var create = function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name;
    var newPlanet = { id: id, name: name };
    planets.push(newPlanet);
    res.status(201).json({ msg: 'The planet was created' });
};
exports.create = create;
var updateById = function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    planets = planets.map(function (p) { return (p.id === parseInt(id) ? __assign(__assign({}, p), { name: name }) : p); });
    res.status(200).json({ msg: 'The planet was updated' });
};
exports.updateById = updateById;
var deleteById = function (req, res) {
    var id = req.params.id;
    planets = planets.filter(function (p) { return p.id !== parseInt(id); });
    res.status(200).json({ msg: 'The planet was deleted' });
};
exports.deleteById = deleteById;
