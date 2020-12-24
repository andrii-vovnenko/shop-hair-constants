"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hairTypeIds = require("./hairTypeIds");

var _hairTypeNames;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hairTypeNames = (_hairTypeNames = {}, _defineProperty(_hairTypeNames, _hairTypeIds.HAIR_EXTENSION, 'Нарощування'), _defineProperty(_hairTypeNames, _hairTypeIds.KANEKALON, 'Канікалон'), _defineProperty(_hairTypeNames, _hairTypeIds.TAIL, 'Хвіст'), _defineProperty(_hairTypeNames, _hairTypeIds.WIG, 'Перука'), _defineProperty(_hairTypeNames, _hairTypeIds.WEAVE, 'Шиньон'), _defineProperty(_hairTypeNames, _hairTypeIds.BANGS, 'Чубчик'), _defineProperty(_hairTypeNames, _hairTypeIds.NAKLADKA, 'Накладка'), _defineProperty(_hairTypeNames, _hairTypeIds.SCRUNCHY, 'Резинка'), _defineProperty(_hairTypeNames, _hairTypeIds.STRIP, 'Полоска'), _hairTypeNames);
var _default = hairTypeNames;
exports["default"] = _default;