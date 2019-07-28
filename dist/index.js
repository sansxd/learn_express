"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//importando express
var app = (0, _express["default"])();
var port = 3000;
app.get('/sad', function (req, res) {
  return res.send('Hellosss World!');
});
app.listen(port, function () {
  return console.log("servidor arriba en el puerto: ".concat(port, "!"));
});