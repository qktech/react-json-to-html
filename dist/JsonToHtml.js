"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Css = _interopRequireDefault(require("./Css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var JsonToHtml = function () {
  var html = '';
  var level = 0;
  var rootClass = '';
  var suffix = '&nbsp;&nbsp;';
  var jsonObjOrig;
  var subLevel = 0;
  var componentLevel = 0;

  var getTable = function getTable(jsonObj, replacer) {
    html = '<table cellspacing="1" style="border-spacing:2px">';
    jsonObjOrig = jsonObj;
    level = 0;
    walkTheDog(jsonObj, replacer);
    html += '</table>';
    return html;
  };

  var getIndent = function getIndent(level) {
    var indent = '&nbsp;&nbsp;';

    for (var i = 0; i < level; i++) {
      indent += '&nbsp;&nbsp;&nbsp;';
    }

    return indent;
  }; // TODO: This is such a hack, but css border-spacing is simply not working


  var getSpacer = function getSpacer() {
    return '<tr style="height:2px"></tr>';
  }; // Get the Css obj from Css.js, and return a semicolon separated list of styles


  var getStyleAttributes = function getStyleAttributes(className) {
    var cssObj = _Css.default[className];
    var keys = Object.keys(cssObj);
    var attributes = '';

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var cssAttr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      attributes += cssAttr + ':' + cssObj[key] + ';';
    }

    return attributes;
  };

  var processArray = function processArray(arr) {
    var distKeys = [];
    var html = '';

    if (Array.isArray(arr) && arr.length === 0) {
      return html;
    } // Get distinct keys from first obj
    // TODO: Handle unstructured objects in array. Assumption, for now, is that
    // all objects in array will have same structure.


    if (_typeof(arr[0]) === 'object') {
      // Render the props if only a single object in the array 
      if (arr.length === 1) {
        for (var k in arr[0]) {
          var value = '';

          if (arr[0][k]) {
            value = arr[0][k].toString();
          }

          html += '<tr style="height:25px">';
          html += '  <td style="' + getStyleAttributes('subElement') + '">' + getIndent(level) + k + suffix + '</td>';
          html += '  <td style="' + getStyleAttributes('dataCell') + '">' + getIndent(level) + value + suffix + '</td>';
          html += '</tr>';
          html += getSpacer();
        }
      } else {
        html = '<tr style="height:25px">';

        for (var j in arr[0]) {
          distKeys.push(j);
          html += '<td style="' + getStyleAttributes('subElement') + '">' + getIndent(level) + j + suffix + '</td>';
        }

        html += '</tr>';
        html += getSpacer(); // Render a row for each obj, displaying the value for each distinct key

        for (var l in arr) {
          html += '<tr style="height:25px">';

          for (var i = 0; i < distKeys.length; i++) {
            html += '<td style="' + getStyleAttributes('dataCell') + '">' + getIndent(level) + arr[l][distKeys[i]] + suffix + '</td>';
          }

          html += '</tr>';
          html += getSpacer();
        }
      }
    } // Render a <tr> and <td> for each string in an array


    if (typeof arr[0] === 'string') {
      for (var m in arr) {
        html += '<tr style="height:25px">';
        html += '  <td style="' + getStyleAttributes('dataCell') + '" colspan="2">' + getIndent(level) + arr[m] + suffix + '</td>';
        html += '</tr>';
      }
    }

    return html;
  };

  var walkTheDog = function walkTheDog(jsonObj, replacer) {
    var hasArray = false;

    if (typeof jsonObj === 'string') {
      jsonObj = JSON.parse(jsonObj);
    }

    subLevel = level;

    for (var k in jsonObj) {
      // Reset the indent if next element is root
      if (typeof jsonObjOrig[k] !== 'undefined') {
        level = 0;
        rootClass = getStyleAttributes('rootElement');
      } else {
        rootClass = getStyleAttributes('subElement');
      }

      componentLevel = subLevel;

      if (jsonObj.hasOwnProperty(k)) {
        var v = jsonObj[k];

        if (hasArray) {
          level = componentLevel;
        }

        if (_typeof(v) === 'object') {
          // colspan += level;  //unused colspan??
          html += '<tr style="height:25px"><td style="' + rootClass + '" colspan="3">' + getIndent(level) + k + suffix + '</td></tr>';
          html += getSpacer();
          level += 1;
        } else {
          var style = getStyleAttributes('jsonTd') + getStyleAttributes('dataCell');
          var renderVal = v;

          if (typeof replacer === 'function') {
            renderVal = replacer(k, v);
          }

          html += '<tr style="height:25px"><td style="' + rootClass + '">' + getIndent(level) + k + suffix + '</td><td style="' + style + '" colspan="2">' + renderVal + '</td></tr>';
          html += getSpacer();
        }

        if (v instanceof Array) {
          html += processArray(v);
          hasArray = true;
        }

        if (_typeof(v) === 'object' && !(v instanceof Array)) {
          walkTheDog(v, replacer);
          level = subLevel - 1; // Outdent back 
        }
      }
    }
  };

  return {
    getTable: getTable
  };
}();

var _default = JsonToHtml;
exports.default = _default;