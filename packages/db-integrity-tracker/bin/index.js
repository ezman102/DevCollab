#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports2, module2) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map3, key) {
          var data = map3.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference2 = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join2(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map2(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map2(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map2(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference2;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map2;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join2;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports2);
  }
});

// node_modules/y18n/build/index.cjs
var require_build = __commonJS({
  "node_modules/y18n/build/index.cjs"(exports2, module2) {
    "use strict";
    var fs2 = require("fs");
    var util = require("util");
    var path = require("path");
    var shim;
    var Y18N = class {
      constructor(opts) {
        opts = opts || {};
        this.directory = opts.directory || "./locales";
        this.updateFiles = typeof opts.updateFiles === "boolean" ? opts.updateFiles : true;
        this.locale = opts.locale || "en";
        this.fallbackToLanguage = typeof opts.fallbackToLanguage === "boolean" ? opts.fallbackToLanguage : true;
        this.cache = /* @__PURE__ */ Object.create(null);
        this.writeQueue = [];
      }
      __(...args) {
        if (typeof arguments[0] !== "string") {
          return this._taggedLiteral(arguments[0], ...arguments);
        }
        const str = args.shift();
        let cb = function() {
        };
        if (typeof args[args.length - 1] === "function")
          cb = args.pop();
        cb = cb || function() {
        };
        if (!this.cache[this.locale])
          this._readLocaleFile();
        if (!this.cache[this.locale][str] && this.updateFiles) {
          this.cache[this.locale][str] = str;
          this._enqueueWrite({
            directory: this.directory,
            locale: this.locale,
            cb
          });
        } else {
          cb();
        }
        return shim.format.apply(shim.format, [this.cache[this.locale][str] || str].concat(args));
      }
      __n() {
        const args = Array.prototype.slice.call(arguments);
        const singular = args.shift();
        const plural = args.shift();
        const quantity = args.shift();
        let cb = function() {
        };
        if (typeof args[args.length - 1] === "function")
          cb = args.pop();
        if (!this.cache[this.locale])
          this._readLocaleFile();
        let str = quantity === 1 ? singular : plural;
        if (this.cache[this.locale][singular]) {
          const entry = this.cache[this.locale][singular];
          str = entry[quantity === 1 ? "one" : "other"];
        }
        if (!this.cache[this.locale][singular] && this.updateFiles) {
          this.cache[this.locale][singular] = {
            one: singular,
            other: plural
          };
          this._enqueueWrite({
            directory: this.directory,
            locale: this.locale,
            cb
          });
        } else {
          cb();
        }
        const values = [str];
        if (~str.indexOf("%d"))
          values.push(quantity);
        return shim.format.apply(shim.format, values.concat(args));
      }
      setLocale(locale) {
        this.locale = locale;
      }
      getLocale() {
        return this.locale;
      }
      updateLocale(obj) {
        if (!this.cache[this.locale])
          this._readLocaleFile();
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            this.cache[this.locale][key] = obj[key];
          }
        }
      }
      _taggedLiteral(parts, ...args) {
        let str = "";
        parts.forEach(function(part, i) {
          const arg = args[i + 1];
          str += part;
          if (typeof arg !== "undefined") {
            str += "%s";
          }
        });
        return this.__.apply(this, [str].concat([].slice.call(args, 1)));
      }
      _enqueueWrite(work) {
        this.writeQueue.push(work);
        if (this.writeQueue.length === 1)
          this._processWriteQueue();
      }
      _processWriteQueue() {
        const _this = this;
        const work = this.writeQueue[0];
        const directory = work.directory;
        const locale = work.locale;
        const cb = work.cb;
        const languageFile = this._resolveLocaleFile(directory, locale);
        const serializedLocale = JSON.stringify(this.cache[locale], null, 2);
        shim.fs.writeFile(languageFile, serializedLocale, "utf-8", function(err) {
          _this.writeQueue.shift();
          if (_this.writeQueue.length > 0)
            _this._processWriteQueue();
          cb(err);
        });
      }
      _readLocaleFile() {
        let localeLookup = {};
        const languageFile = this._resolveLocaleFile(this.directory, this.locale);
        try {
          if (shim.fs.readFileSync) {
            localeLookup = JSON.parse(shim.fs.readFileSync(languageFile, "utf-8"));
          }
        } catch (err) {
          if (err instanceof SyntaxError) {
            err.message = "syntax error in " + languageFile;
          }
          if (err.code === "ENOENT")
            localeLookup = {};
          else
            throw err;
        }
        this.cache[this.locale] = localeLookup;
      }
      _resolveLocaleFile(directory, locale) {
        let file = shim.resolve(directory, "./", locale + ".json");
        if (this.fallbackToLanguage && !this._fileExistsSync(file) && ~locale.lastIndexOf("_")) {
          const languageFile = shim.resolve(directory, "./", locale.split("_")[0] + ".json");
          if (this._fileExistsSync(languageFile))
            file = languageFile;
        }
        return file;
      }
      _fileExistsSync(file) {
        return shim.exists(file);
      }
    };
    function y18n$1(opts, _shim) {
      shim = _shim;
      const y18n2 = new Y18N(opts);
      return {
        __: y18n2.__.bind(y18n2),
        __n: y18n2.__n.bind(y18n2),
        setLocale: y18n2.setLocale.bind(y18n2),
        getLocale: y18n2.getLocale.bind(y18n2),
        updateLocale: y18n2.updateLocale.bind(y18n2),
        locale: y18n2.locale
      };
    }
    var nodePlatformShim = {
      fs: {
        readFileSync: fs2.readFileSync,
        writeFile: fs2.writeFile
      },
      format: util.format,
      resolve: path.resolve,
      exists: (file) => {
        try {
          return fs2.statSync(file).isFile();
        } catch (err) {
          return false;
        }
      }
    };
    var y18n = (opts) => {
      return y18n$1(opts, nodePlatformShim);
    };
    module2.exports = y18n;
  }
});

// node_modules/yargs-parser/build/index.cjs
var require_build2 = __commonJS({
  "node_modules/yargs-parser/build/index.cjs"(exports2, module2) {
    "use strict";
    var util = require("util");
    var path = require("path");
    var fs2 = require("fs");
    function camelCase(str) {
      const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase();
      if (!isCamelCase) {
        str = str.toLowerCase();
      }
      if (str.indexOf("-") === -1 && str.indexOf("_") === -1) {
        return str;
      } else {
        let camelcase = "";
        let nextChrUpper = false;
        const leadingHyphens = str.match(/^-+/);
        for (let i = leadingHyphens ? leadingHyphens[0].length : 0; i < str.length; i++) {
          let chr = str.charAt(i);
          if (nextChrUpper) {
            nextChrUpper = false;
            chr = chr.toUpperCase();
          }
          if (i !== 0 && (chr === "-" || chr === "_")) {
            nextChrUpper = true;
          } else if (chr !== "-" && chr !== "_") {
            camelcase += chr;
          }
        }
        return camelcase;
      }
    }
    function decamelize(str, joinString) {
      const lowercase = str.toLowerCase();
      joinString = joinString || "-";
      let notCamelcase = "";
      for (let i = 0; i < str.length; i++) {
        const chrLower = lowercase.charAt(i);
        const chrString = str.charAt(i);
        if (chrLower !== chrString && i > 0) {
          notCamelcase += `${joinString}${lowercase.charAt(i)}`;
        } else {
          notCamelcase += chrString;
        }
      }
      return notCamelcase;
    }
    function looksLikeNumber(x) {
      if (x === null || x === void 0)
        return false;
      if (typeof x === "number")
        return true;
      if (/^0x[0-9a-f]+$/i.test(x))
        return true;
      if (/^0[^.]/.test(x))
        return false;
      return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    }
    function tokenizeArgString(argString) {
      if (Array.isArray(argString)) {
        return argString.map((e) => typeof e !== "string" ? e + "" : e);
      }
      argString = argString.trim();
      let i = 0;
      let prevC = null;
      let c = null;
      let opening = null;
      const args = [];
      for (let ii = 0; ii < argString.length; ii++) {
        prevC = c;
        c = argString.charAt(ii);
        if (c === " " && !opening) {
          if (!(prevC === " ")) {
            i++;
          }
          continue;
        }
        if (c === opening) {
          opening = null;
        } else if ((c === "'" || c === '"') && !opening) {
          opening = c;
        }
        if (!args[i])
          args[i] = "";
        args[i] += c;
      }
      return args;
    }
    var DefaultValuesForTypeKey;
    (function(DefaultValuesForTypeKey2) {
      DefaultValuesForTypeKey2["BOOLEAN"] = "boolean";
      DefaultValuesForTypeKey2["STRING"] = "string";
      DefaultValuesForTypeKey2["NUMBER"] = "number";
      DefaultValuesForTypeKey2["ARRAY"] = "array";
    })(DefaultValuesForTypeKey || (DefaultValuesForTypeKey = {}));
    var mixin;
    var YargsParser = class {
      constructor(_mixin) {
        mixin = _mixin;
      }
      parse(argsInput, options) {
        const opts = Object.assign({
          alias: void 0,
          array: void 0,
          boolean: void 0,
          config: void 0,
          configObjects: void 0,
          configuration: void 0,
          coerce: void 0,
          count: void 0,
          default: void 0,
          envPrefix: void 0,
          narg: void 0,
          normalize: void 0,
          string: void 0,
          number: void 0,
          __: void 0,
          key: void 0
        }, options);
        const args = tokenizeArgString(argsInput);
        const inputIsString = typeof argsInput === "string";
        const aliases = combineAliases(Object.assign(/* @__PURE__ */ Object.create(null), opts.alias));
        const configuration = Object.assign({
          "boolean-negation": true,
          "camel-case-expansion": true,
          "combine-arrays": false,
          "dot-notation": true,
          "duplicate-arguments-array": true,
          "flatten-duplicate-arrays": true,
          "greedy-arrays": true,
          "halt-at-non-option": false,
          "nargs-eats-options": false,
          "negation-prefix": "no-",
          "parse-numbers": true,
          "parse-positional-numbers": true,
          "populate--": false,
          "set-placeholder-key": false,
          "short-option-groups": true,
          "strip-aliased": false,
          "strip-dashed": false,
          "unknown-options-as-args": false
        }, opts.configuration);
        const defaults = Object.assign(/* @__PURE__ */ Object.create(null), opts.default);
        const configObjects = opts.configObjects || [];
        const envPrefix = opts.envPrefix;
        const notFlagsOption = configuration["populate--"];
        const notFlagsArgv = notFlagsOption ? "--" : "_";
        const newAliases = /* @__PURE__ */ Object.create(null);
        const defaulted = /* @__PURE__ */ Object.create(null);
        const __ = opts.__ || mixin.format;
        const flags = {
          aliases: /* @__PURE__ */ Object.create(null),
          arrays: /* @__PURE__ */ Object.create(null),
          bools: /* @__PURE__ */ Object.create(null),
          strings: /* @__PURE__ */ Object.create(null),
          numbers: /* @__PURE__ */ Object.create(null),
          counts: /* @__PURE__ */ Object.create(null),
          normalize: /* @__PURE__ */ Object.create(null),
          configs: /* @__PURE__ */ Object.create(null),
          nargs: /* @__PURE__ */ Object.create(null),
          coercions: /* @__PURE__ */ Object.create(null),
          keys: []
        };
        const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/;
        const negatedBoolean = new RegExp("^--" + configuration["negation-prefix"] + "(.+)");
        [].concat(opts.array || []).filter(Boolean).forEach(function(opt) {
          const key = typeof opt === "object" ? opt.key : opt;
          const assignment = Object.keys(opt).map(function(key2) {
            const arrayFlagKeys = {
              boolean: "bools",
              string: "strings",
              number: "numbers"
            };
            return arrayFlagKeys[key2];
          }).filter(Boolean).pop();
          if (assignment) {
            flags[assignment][key] = true;
          }
          flags.arrays[key] = true;
          flags.keys.push(key);
        });
        [].concat(opts.boolean || []).filter(Boolean).forEach(function(key) {
          flags.bools[key] = true;
          flags.keys.push(key);
        });
        [].concat(opts.string || []).filter(Boolean).forEach(function(key) {
          flags.strings[key] = true;
          flags.keys.push(key);
        });
        [].concat(opts.number || []).filter(Boolean).forEach(function(key) {
          flags.numbers[key] = true;
          flags.keys.push(key);
        });
        [].concat(opts.count || []).filter(Boolean).forEach(function(key) {
          flags.counts[key] = true;
          flags.keys.push(key);
        });
        [].concat(opts.normalize || []).filter(Boolean).forEach(function(key) {
          flags.normalize[key] = true;
          flags.keys.push(key);
        });
        if (typeof opts.narg === "object") {
          Object.entries(opts.narg).forEach(([key, value]) => {
            if (typeof value === "number") {
              flags.nargs[key] = value;
              flags.keys.push(key);
            }
          });
        }
        if (typeof opts.coerce === "object") {
          Object.entries(opts.coerce).forEach(([key, value]) => {
            if (typeof value === "function") {
              flags.coercions[key] = value;
              flags.keys.push(key);
            }
          });
        }
        if (typeof opts.config !== "undefined") {
          if (Array.isArray(opts.config) || typeof opts.config === "string") {
            [].concat(opts.config).filter(Boolean).forEach(function(key) {
              flags.configs[key] = true;
            });
          } else if (typeof opts.config === "object") {
            Object.entries(opts.config).forEach(([key, value]) => {
              if (typeof value === "boolean" || typeof value === "function") {
                flags.configs[key] = value;
              }
            });
          }
        }
        extendAliases(opts.key, aliases, opts.default, flags.arrays);
        Object.keys(defaults).forEach(function(key) {
          (flags.aliases[key] || []).forEach(function(alias) {
            defaults[alias] = defaults[key];
          });
        });
        let error = null;
        checkConfiguration();
        let notFlags = [];
        const argv2 = Object.assign(/* @__PURE__ */ Object.create(null), { _: [] });
        const argvReturn = {};
        for (let i = 0; i < args.length; i++) {
          const arg = args[i];
          const truncatedArg = arg.replace(/^-{3,}/, "---");
          let broken;
          let key;
          let letters;
          let m;
          let next;
          let value;
          if (arg !== "--" && /^-/.test(arg) && isUnknownOptionAsArg(arg)) {
            pushPositional(arg);
          } else if (truncatedArg.match(/^---+(=|$)/)) {
            pushPositional(arg);
            continue;
          } else if (arg.match(/^--.+=/) || !configuration["short-option-groups"] && arg.match(/^-.+=/)) {
            m = arg.match(/^--?([^=]+)=([\s\S]*)$/);
            if (m !== null && Array.isArray(m) && m.length >= 3) {
              if (checkAllAliases(m[1], flags.arrays)) {
                i = eatArray(i, m[1], args, m[2]);
              } else if (checkAllAliases(m[1], flags.nargs) !== false) {
                i = eatNargs(i, m[1], args, m[2]);
              } else {
                setArg(m[1], m[2], true);
              }
            }
          } else if (arg.match(negatedBoolean) && configuration["boolean-negation"]) {
            m = arg.match(negatedBoolean);
            if (m !== null && Array.isArray(m) && m.length >= 2) {
              key = m[1];
              setArg(key, checkAllAliases(key, flags.arrays) ? [false] : false);
            }
          } else if (arg.match(/^--.+/) || !configuration["short-option-groups"] && arg.match(/^-[^-]+/)) {
            m = arg.match(/^--?(.+)/);
            if (m !== null && Array.isArray(m) && m.length >= 2) {
              key = m[1];
              if (checkAllAliases(key, flags.arrays)) {
                i = eatArray(i, key, args);
              } else if (checkAllAliases(key, flags.nargs) !== false) {
                i = eatNargs(i, key, args);
              } else {
                next = args[i + 1];
                if (next !== void 0 && (!next.match(/^-/) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                  setArg(key, next);
                  i++;
                } else if (/^(true|false)$/.test(next)) {
                  setArg(key, next);
                  i++;
                } else {
                  setArg(key, defaultValue(key));
                }
              }
            }
          } else if (arg.match(/^-.\..+=/)) {
            m = arg.match(/^-([^=]+)=([\s\S]*)$/);
            if (m !== null && Array.isArray(m) && m.length >= 3) {
              setArg(m[1], m[2]);
            }
          } else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
            next = args[i + 1];
            m = arg.match(/^-(.\..+)/);
            if (m !== null && Array.isArray(m) && m.length >= 2) {
              key = m[1];
              if (next !== void 0 && !next.match(/^-/) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                setArg(key, next);
                i++;
              } else {
                setArg(key, defaultValue(key));
              }
            }
          } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
            letters = arg.slice(1, -1).split("");
            broken = false;
            for (let j = 0; j < letters.length; j++) {
              next = arg.slice(j + 2);
              if (letters[j + 1] && letters[j + 1] === "=") {
                value = arg.slice(j + 3);
                key = letters[j];
                if (checkAllAliases(key, flags.arrays)) {
                  i = eatArray(i, key, args, value);
                } else if (checkAllAliases(key, flags.nargs) !== false) {
                  i = eatNargs(i, key, args, value);
                } else {
                  setArg(key, value);
                }
                broken = true;
                break;
              }
              if (next === "-") {
                setArg(letters[j], next);
                continue;
              }
              if (/[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) && checkAllAliases(next, flags.bools) === false) {
                setArg(letters[j], next);
                broken = true;
                break;
              }
              if (letters[j + 1] && letters[j + 1].match(/\W/)) {
                setArg(letters[j], next);
                broken = true;
                break;
              } else {
                setArg(letters[j], defaultValue(letters[j]));
              }
            }
            key = arg.slice(-1)[0];
            if (!broken && key !== "-") {
              if (checkAllAliases(key, flags.arrays)) {
                i = eatArray(i, key, args);
              } else if (checkAllAliases(key, flags.nargs) !== false) {
                i = eatNargs(i, key, args);
              } else {
                next = args[i + 1];
                if (next !== void 0 && (!/^(-|--)[^-]/.test(next) || next.match(negative)) && !checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts)) {
                  setArg(key, next);
                  i++;
                } else if (/^(true|false)$/.test(next)) {
                  setArg(key, next);
                  i++;
                } else {
                  setArg(key, defaultValue(key));
                }
              }
            }
          } else if (arg.match(/^-[0-9]$/) && arg.match(negative) && checkAllAliases(arg.slice(1), flags.bools)) {
            key = arg.slice(1);
            setArg(key, defaultValue(key));
          } else if (arg === "--") {
            notFlags = args.slice(i + 1);
            break;
          } else if (configuration["halt-at-non-option"]) {
            notFlags = args.slice(i);
            break;
          } else {
            pushPositional(arg);
          }
        }
        applyEnvVars(argv2, true);
        applyEnvVars(argv2, false);
        setConfig(argv2);
        setConfigObjects();
        applyDefaultsAndAliases(argv2, flags.aliases, defaults, true);
        applyCoercions(argv2);
        if (configuration["set-placeholder-key"])
          setPlaceholderKeys(argv2);
        Object.keys(flags.counts).forEach(function(key) {
          if (!hasKey(argv2, key.split(".")))
            setArg(key, 0);
        });
        if (notFlagsOption && notFlags.length)
          argv2[notFlagsArgv] = [];
        notFlags.forEach(function(key) {
          argv2[notFlagsArgv].push(key);
        });
        if (configuration["camel-case-expansion"] && configuration["strip-dashed"]) {
          Object.keys(argv2).filter((key) => key !== "--" && key.includes("-")).forEach((key) => {
            delete argv2[key];
          });
        }
        if (configuration["strip-aliased"]) {
          [].concat(...Object.keys(aliases).map((k) => aliases[k])).forEach((alias) => {
            if (configuration["camel-case-expansion"] && alias.includes("-")) {
              delete argv2[alias.split(".").map((prop) => camelCase(prop)).join(".")];
            }
            delete argv2[alias];
          });
        }
        function pushPositional(arg) {
          const maybeCoercedNumber = maybeCoerceNumber("_", arg);
          if (typeof maybeCoercedNumber === "string" || typeof maybeCoercedNumber === "number") {
            argv2._.push(maybeCoercedNumber);
          }
        }
        function eatNargs(i, key, args2, argAfterEqualSign) {
          let ii;
          let toEat = checkAllAliases(key, flags.nargs);
          toEat = typeof toEat !== "number" || isNaN(toEat) ? 1 : toEat;
          if (toEat === 0) {
            if (!isUndefined(argAfterEqualSign)) {
              error = Error(__("Argument unexpected for: %s", key));
            }
            setArg(key, defaultValue(key));
            return i;
          }
          let available = isUndefined(argAfterEqualSign) ? 0 : 1;
          if (configuration["nargs-eats-options"]) {
            if (args2.length - (i + 1) + available < toEat) {
              error = Error(__("Not enough arguments following: %s", key));
            }
            available = toEat;
          } else {
            for (ii = i + 1; ii < args2.length; ii++) {
              if (!args2[ii].match(/^-[^0-9]/) || args2[ii].match(negative) || isUnknownOptionAsArg(args2[ii]))
                available++;
              else
                break;
            }
            if (available < toEat)
              error = Error(__("Not enough arguments following: %s", key));
          }
          let consumed = Math.min(available, toEat);
          if (!isUndefined(argAfterEqualSign) && consumed > 0) {
            setArg(key, argAfterEqualSign);
            consumed--;
          }
          for (ii = i + 1; ii < consumed + i + 1; ii++) {
            setArg(key, args2[ii]);
          }
          return i + consumed;
        }
        function eatArray(i, key, args2, argAfterEqualSign) {
          let argsToSet = [];
          let next = argAfterEqualSign || args2[i + 1];
          const nargsCount = checkAllAliases(key, flags.nargs);
          if (checkAllAliases(key, flags.bools) && !/^(true|false)$/.test(next)) {
            argsToSet.push(true);
          } else if (isUndefined(next) || isUndefined(argAfterEqualSign) && /^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next)) {
            if (defaults[key] !== void 0) {
              const defVal = defaults[key];
              argsToSet = Array.isArray(defVal) ? defVal : [defVal];
            }
          } else {
            if (!isUndefined(argAfterEqualSign)) {
              argsToSet.push(processValue(key, argAfterEqualSign, true));
            }
            for (let ii = i + 1; ii < args2.length; ii++) {
              if (!configuration["greedy-arrays"] && argsToSet.length > 0 || nargsCount && typeof nargsCount === "number" && argsToSet.length >= nargsCount)
                break;
              next = args2[ii];
              if (/^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next))
                break;
              i = ii;
              argsToSet.push(processValue(key, next, inputIsString));
            }
          }
          if (typeof nargsCount === "number" && (nargsCount && argsToSet.length < nargsCount || isNaN(nargsCount) && argsToSet.length === 0)) {
            error = Error(__("Not enough arguments following: %s", key));
          }
          setArg(key, argsToSet);
          return i;
        }
        function setArg(key, val, shouldStripQuotes = inputIsString) {
          if (/-/.test(key) && configuration["camel-case-expansion"]) {
            const alias = key.split(".").map(function(prop) {
              return camelCase(prop);
            }).join(".");
            addNewAlias(key, alias);
          }
          const value = processValue(key, val, shouldStripQuotes);
          const splitKey = key.split(".");
          setKey(argv2, splitKey, value);
          if (flags.aliases[key]) {
            flags.aliases[key].forEach(function(x) {
              const keyProperties = x.split(".");
              setKey(argv2, keyProperties, value);
            });
          }
          if (splitKey.length > 1 && configuration["dot-notation"]) {
            (flags.aliases[splitKey[0]] || []).forEach(function(x) {
              let keyProperties = x.split(".");
              const a = [].concat(splitKey);
              a.shift();
              keyProperties = keyProperties.concat(a);
              if (!(flags.aliases[key] || []).includes(keyProperties.join("."))) {
                setKey(argv2, keyProperties, value);
              }
            });
          }
          if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
            const keys = [key].concat(flags.aliases[key] || []);
            keys.forEach(function(key2) {
              Object.defineProperty(argvReturn, key2, {
                enumerable: true,
                get() {
                  return val;
                },
                set(value2) {
                  val = typeof value2 === "string" ? mixin.normalize(value2) : value2;
                }
              });
            });
          }
        }
        function addNewAlias(key, alias) {
          if (!(flags.aliases[key] && flags.aliases[key].length)) {
            flags.aliases[key] = [alias];
            newAliases[alias] = true;
          }
          if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
            addNewAlias(alias, key);
          }
        }
        function processValue(key, val, shouldStripQuotes) {
          if (shouldStripQuotes) {
            val = stripQuotes(val);
          }
          if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
            if (typeof val === "string")
              val = val === "true";
          }
          let value = Array.isArray(val) ? val.map(function(v) {
            return maybeCoerceNumber(key, v);
          }) : maybeCoerceNumber(key, val);
          if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === "boolean")) {
            value = increment();
          }
          if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
            if (Array.isArray(val))
              value = val.map((val2) => {
                return mixin.normalize(val2);
              });
            else
              value = mixin.normalize(val);
          }
          return value;
        }
        function maybeCoerceNumber(key, value) {
          if (!configuration["parse-positional-numbers"] && key === "_")
            return value;
          if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.bools) && !Array.isArray(value)) {
            const shouldCoerceNumber = looksLikeNumber(value) && configuration["parse-numbers"] && Number.isSafeInteger(Math.floor(parseFloat(`${value}`)));
            if (shouldCoerceNumber || !isUndefined(value) && checkAllAliases(key, flags.numbers)) {
              value = Number(value);
            }
          }
          return value;
        }
        function setConfig(argv3) {
          const configLookup = /* @__PURE__ */ Object.create(null);
          applyDefaultsAndAliases(configLookup, flags.aliases, defaults);
          Object.keys(flags.configs).forEach(function(configKey) {
            const configPath = argv3[configKey] || configLookup[configKey];
            if (configPath) {
              try {
                let config = null;
                const resolvedConfigPath = mixin.resolve(mixin.cwd(), configPath);
                const resolveConfig = flags.configs[configKey];
                if (typeof resolveConfig === "function") {
                  try {
                    config = resolveConfig(resolvedConfigPath);
                  } catch (e) {
                    config = e;
                  }
                  if (config instanceof Error) {
                    error = config;
                    return;
                  }
                } else {
                  config = mixin.require(resolvedConfigPath);
                }
                setConfigObject(config);
              } catch (ex) {
                if (ex.name === "PermissionDenied")
                  error = ex;
                else if (argv3[configKey])
                  error = Error(__("Invalid JSON config file: %s", configPath));
              }
            }
          });
        }
        function setConfigObject(config, prev) {
          Object.keys(config).forEach(function(key) {
            const value = config[key];
            const fullKey = prev ? prev + "." + key : key;
            if (typeof value === "object" && value !== null && !Array.isArray(value) && configuration["dot-notation"]) {
              setConfigObject(value, fullKey);
            } else {
              if (!hasKey(argv2, fullKey.split(".")) || checkAllAliases(fullKey, flags.arrays) && configuration["combine-arrays"]) {
                setArg(fullKey, value);
              }
            }
          });
        }
        function setConfigObjects() {
          if (typeof configObjects !== "undefined") {
            configObjects.forEach(function(configObject) {
              setConfigObject(configObject);
            });
          }
        }
        function applyEnvVars(argv3, configOnly) {
          if (typeof envPrefix === "undefined")
            return;
          const prefix = typeof envPrefix === "string" ? envPrefix : "";
          const env2 = mixin.env();
          Object.keys(env2).forEach(function(envVar) {
            if (prefix === "" || envVar.lastIndexOf(prefix, 0) === 0) {
              const keys = envVar.split("__").map(function(key, i) {
                if (i === 0) {
                  key = key.substring(prefix.length);
                }
                return camelCase(key);
              });
              if ((configOnly && flags.configs[keys.join(".")] || !configOnly) && !hasKey(argv3, keys)) {
                setArg(keys.join("."), env2[envVar]);
              }
            }
          });
        }
        function applyCoercions(argv3) {
          let coerce;
          const applied = /* @__PURE__ */ new Set();
          Object.keys(argv3).forEach(function(key) {
            if (!applied.has(key)) {
              coerce = checkAllAliases(key, flags.coercions);
              if (typeof coerce === "function") {
                try {
                  const value = maybeCoerceNumber(key, coerce(argv3[key]));
                  [].concat(flags.aliases[key] || [], key).forEach((ali) => {
                    applied.add(ali);
                    argv3[ali] = value;
                  });
                } catch (err) {
                  error = err;
                }
              }
            }
          });
        }
        function setPlaceholderKeys(argv3) {
          flags.keys.forEach((key) => {
            if (~key.indexOf("."))
              return;
            if (typeof argv3[key] === "undefined")
              argv3[key] = void 0;
          });
          return argv3;
        }
        function applyDefaultsAndAliases(obj, aliases2, defaults2, canLog = false) {
          Object.keys(defaults2).forEach(function(key) {
            if (!hasKey(obj, key.split("."))) {
              setKey(obj, key.split("."), defaults2[key]);
              if (canLog)
                defaulted[key] = true;
              (aliases2[key] || []).forEach(function(x) {
                if (hasKey(obj, x.split(".")))
                  return;
                setKey(obj, x.split("."), defaults2[key]);
              });
            }
          });
        }
        function hasKey(obj, keys) {
          let o = obj;
          if (!configuration["dot-notation"])
            keys = [keys.join(".")];
          keys.slice(0, -1).forEach(function(key2) {
            o = o[key2] || {};
          });
          const key = keys[keys.length - 1];
          if (typeof o !== "object")
            return false;
          else
            return key in o;
        }
        function setKey(obj, keys, value) {
          let o = obj;
          if (!configuration["dot-notation"])
            keys = [keys.join(".")];
          keys.slice(0, -1).forEach(function(key2) {
            key2 = sanitizeKey(key2);
            if (typeof o === "object" && o[key2] === void 0) {
              o[key2] = {};
            }
            if (typeof o[key2] !== "object" || Array.isArray(o[key2])) {
              if (Array.isArray(o[key2])) {
                o[key2].push({});
              } else {
                o[key2] = [o[key2], {}];
              }
              o = o[key2][o[key2].length - 1];
            } else {
              o = o[key2];
            }
          });
          const key = sanitizeKey(keys[keys.length - 1]);
          const isTypeArray = checkAllAliases(keys.join("."), flags.arrays);
          const isValueArray = Array.isArray(value);
          let duplicate = configuration["duplicate-arguments-array"];
          if (!duplicate && checkAllAliases(key, flags.nargs)) {
            duplicate = true;
            if (!isUndefined(o[key]) && flags.nargs[key] === 1 || Array.isArray(o[key]) && o[key].length === flags.nargs[key]) {
              o[key] = void 0;
            }
          }
          if (value === increment()) {
            o[key] = increment(o[key]);
          } else if (Array.isArray(o[key])) {
            if (duplicate && isTypeArray && isValueArray) {
              o[key] = configuration["flatten-duplicate-arrays"] ? o[key].concat(value) : (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value]);
            } else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
              o[key] = value;
            } else {
              o[key] = o[key].concat([value]);
            }
          } else if (o[key] === void 0 && isTypeArray) {
            o[key] = isValueArray ? value : [value];
          } else if (duplicate && !(o[key] === void 0 || checkAllAliases(key, flags.counts) || checkAllAliases(key, flags.bools))) {
            o[key] = [o[key], value];
          } else {
            o[key] = value;
          }
        }
        function extendAliases(...args2) {
          args2.forEach(function(obj) {
            Object.keys(obj || {}).forEach(function(key) {
              if (flags.aliases[key])
                return;
              flags.aliases[key] = [].concat(aliases[key] || []);
              flags.aliases[key].concat(key).forEach(function(x) {
                if (/-/.test(x) && configuration["camel-case-expansion"]) {
                  const c = camelCase(x);
                  if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                    flags.aliases[key].push(c);
                    newAliases[c] = true;
                  }
                }
              });
              flags.aliases[key].concat(key).forEach(function(x) {
                if (x.length > 1 && /[A-Z]/.test(x) && configuration["camel-case-expansion"]) {
                  const c = decamelize(x, "-");
                  if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                    flags.aliases[key].push(c);
                    newAliases[c] = true;
                  }
                }
              });
              flags.aliases[key].forEach(function(x) {
                flags.aliases[x] = [key].concat(flags.aliases[key].filter(function(y) {
                  return x !== y;
                }));
              });
            });
          });
        }
        function checkAllAliases(key, flag) {
          const toCheck = [].concat(flags.aliases[key] || [], key);
          const keys = Object.keys(flag);
          const setAlias = toCheck.find((key2) => keys.includes(key2));
          return setAlias ? flag[setAlias] : false;
        }
        function hasAnyFlag(key) {
          const flagsKeys = Object.keys(flags);
          const toCheck = [].concat(flagsKeys.map((k) => flags[k]));
          return toCheck.some(function(flag) {
            return Array.isArray(flag) ? flag.includes(key) : flag[key];
          });
        }
        function hasFlagsMatching(arg, ...patterns) {
          const toCheck = [].concat(...patterns);
          return toCheck.some(function(pattern) {
            const match = arg.match(pattern);
            return match && hasAnyFlag(match[1]);
          });
        }
        function hasAllShortFlags(arg) {
          if (arg.match(negative) || !arg.match(/^-[^-]+/)) {
            return false;
          }
          let hasAllFlags = true;
          let next;
          const letters = arg.slice(1).split("");
          for (let j = 0; j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (!hasAnyFlag(letters[j])) {
              hasAllFlags = false;
              break;
            }
            if (letters[j + 1] && letters[j + 1] === "=" || next === "-" || /[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) || letters[j + 1] && letters[j + 1].match(/\W/)) {
              break;
            }
          }
          return hasAllFlags;
        }
        function isUnknownOptionAsArg(arg) {
          return configuration["unknown-options-as-args"] && isUnknownOption(arg);
        }
        function isUnknownOption(arg) {
          arg = arg.replace(/^-{3,}/, "--");
          if (arg.match(negative)) {
            return false;
          }
          if (hasAllShortFlags(arg)) {
            return false;
          }
          const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/;
          const normalFlag = /^-+([^=]+?)$/;
          const flagEndingInHyphen = /^-+([^=]+?)-$/;
          const flagEndingInDigits = /^-+([^=]+?\d+)$/;
          const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/;
          return !hasFlagsMatching(arg, flagWithEquals, negatedBoolean, normalFlag, flagEndingInHyphen, flagEndingInDigits, flagEndingInNonWordCharacters);
        }
        function defaultValue(key) {
          if (!checkAllAliases(key, flags.bools) && !checkAllAliases(key, flags.counts) && `${key}` in defaults) {
            return defaults[key];
          } else {
            return defaultForType(guessType(key));
          }
        }
        function defaultForType(type) {
          const def = {
            [DefaultValuesForTypeKey.BOOLEAN]: true,
            [DefaultValuesForTypeKey.STRING]: "",
            [DefaultValuesForTypeKey.NUMBER]: void 0,
            [DefaultValuesForTypeKey.ARRAY]: []
          };
          return def[type];
        }
        function guessType(key) {
          let type = DefaultValuesForTypeKey.BOOLEAN;
          if (checkAllAliases(key, flags.strings))
            type = DefaultValuesForTypeKey.STRING;
          else if (checkAllAliases(key, flags.numbers))
            type = DefaultValuesForTypeKey.NUMBER;
          else if (checkAllAliases(key, flags.bools))
            type = DefaultValuesForTypeKey.BOOLEAN;
          else if (checkAllAliases(key, flags.arrays))
            type = DefaultValuesForTypeKey.ARRAY;
          return type;
        }
        function isUndefined(num) {
          return num === void 0;
        }
        function checkConfiguration() {
          Object.keys(flags.counts).find((key) => {
            if (checkAllAliases(key, flags.arrays)) {
              error = Error(__("Invalid configuration: %s, opts.count excludes opts.array.", key));
              return true;
            } else if (checkAllAliases(key, flags.nargs)) {
              error = Error(__("Invalid configuration: %s, opts.count excludes opts.narg.", key));
              return true;
            }
            return false;
          });
        }
        return {
          aliases: Object.assign({}, flags.aliases),
          argv: Object.assign(argvReturn, argv2),
          configuration,
          defaulted: Object.assign({}, defaulted),
          error,
          newAliases: Object.assign({}, newAliases)
        };
      }
    };
    function combineAliases(aliases) {
      const aliasArrays = [];
      const combined = /* @__PURE__ */ Object.create(null);
      let change = true;
      Object.keys(aliases).forEach(function(key) {
        aliasArrays.push([].concat(aliases[key], key));
      });
      while (change) {
        change = false;
        for (let i = 0; i < aliasArrays.length; i++) {
          for (let ii = i + 1; ii < aliasArrays.length; ii++) {
            const intersect = aliasArrays[i].filter(function(v) {
              return aliasArrays[ii].indexOf(v) !== -1;
            });
            if (intersect.length) {
              aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii]);
              aliasArrays.splice(ii, 1);
              change = true;
              break;
            }
          }
        }
      }
      aliasArrays.forEach(function(aliasArray) {
        aliasArray = aliasArray.filter(function(v, i, self2) {
          return self2.indexOf(v) === i;
        });
        const lastAlias = aliasArray.pop();
        if (lastAlias !== void 0 && typeof lastAlias === "string") {
          combined[lastAlias] = aliasArray;
        }
      });
      return combined;
    }
    function increment(orig) {
      return orig !== void 0 ? orig + 1 : 1;
    }
    function sanitizeKey(key) {
      if (key === "__proto__")
        return "___proto___";
      return key;
    }
    function stripQuotes(val) {
      return typeof val === "string" && (val[0] === "'" || val[0] === '"') && val[val.length - 1] === val[0] ? val.substring(1, val.length - 1) : val;
    }
    var _a;
    var _b;
    var _c;
    var minNodeVersion = process && process.env && process.env.YARGS_MIN_NODE_VERSION ? Number(process.env.YARGS_MIN_NODE_VERSION) : 12;
    var nodeVersion = (_b = (_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) !== null && _b !== void 0 ? _b : (_c = process === null || process === void 0 ? void 0 : process.version) === null || _c === void 0 ? void 0 : _c.slice(1);
    if (nodeVersion) {
      const major = Number(nodeVersion.match(/^([^.]+)/)[1]);
      if (major < minNodeVersion) {
        throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
      }
    }
    var env = process ? process.env : {};
    var parser = new YargsParser({
      cwd: process.cwd,
      env: () => {
        return env;
      },
      format: util.format,
      normalize: path.normalize,
      resolve: path.resolve,
      require: (path2) => {
        if (typeof require !== "undefined") {
          return require(path2);
        } else if (path2.match(/\.json$/)) {
          return JSON.parse(fs2.readFileSync(path2, "utf8"));
        } else {
          throw Error("only .json config files are supported in ESM");
        }
      }
    });
    var yargsParser = function Parser2(args, opts) {
      const result = parser.parse(args.slice(), opts);
      return result.argv;
    };
    yargsParser.detailed = function(args, opts) {
      return parser.parse(args.slice(), opts);
    };
    yargsParser.camelCase = camelCase;
    yargsParser.decamelize = decamelize;
    yargsParser.looksLikeNumber = looksLikeNumber;
    module2.exports = yargsParser;
  }
});

// node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "node_modules/ansi-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = ({ onlyFirst = false } = {}) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(pattern, onlyFirst ? void 0 : "g");
    };
  }
});

// node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "node_modules/strip-ansi/index.js"(exports2, module2) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    module2.exports = (string) => typeof string === "string" ? string.replace(ansiRegex(), "") : string;
  }
});

// node_modules/is-fullwidth-code-point/index.js
var require_is_fullwidth_code_point = __commonJS({
  "node_modules/is-fullwidth-code-point/index.js"(exports2, module2) {
    "use strict";
    var isFullwidthCodePoint = (codePoint) => {
      if (Number.isNaN(codePoint)) {
        return false;
      }
      if (codePoint >= 4352 && (codePoint <= 4447 || // Hangul Jamo
      codePoint === 9001 || // LEFT-POINTING ANGLE BRACKET
      codePoint === 9002 || // RIGHT-POINTING ANGLE BRACKET
      // CJK Radicals Supplement .. Enclosed CJK Letters and Months
      11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
      12880 <= codePoint && codePoint <= 19903 || // CJK Unified Ideographs .. Yi Radicals
      19968 <= codePoint && codePoint <= 42182 || // Hangul Jamo Extended-A
      43360 <= codePoint && codePoint <= 43388 || // Hangul Syllables
      44032 <= codePoint && codePoint <= 55203 || // CJK Compatibility Ideographs
      63744 <= codePoint && codePoint <= 64255 || // Vertical Forms
      65040 <= codePoint && codePoint <= 65049 || // CJK Compatibility Forms .. Small Form Variants
      65072 <= codePoint && codePoint <= 65131 || // Halfwidth and Fullwidth Forms
      65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || // Kana Supplement
      110592 <= codePoint && codePoint <= 110593 || // Enclosed Ideographic Supplement
      127488 <= codePoint && codePoint <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
      131072 <= codePoint && codePoint <= 262141)) {
        return true;
      }
      return false;
    };
    module2.exports = isFullwidthCodePoint;
    module2.exports.default = isFullwidthCodePoint;
  }
});

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/emoji-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
});

// node_modules/string-width/index.js
var require_string_width = __commonJS({
  "node_modules/string-width/index.js"(exports2, module2) {
    "use strict";
    var stripAnsi = require_strip_ansi();
    var isFullwidthCodePoint = require_is_fullwidth_code_point();
    var emojiRegex = require_emoji_regex();
    var stringWidth = (string) => {
      if (typeof string !== "string" || string.length === 0) {
        return 0;
      }
      string = stripAnsi(string);
      if (string.length === 0) {
        return 0;
      }
      string = string.replace(emojiRegex(), "  ");
      let width = 0;
      for (let i = 0; i < string.length; i++) {
        const code = string.codePointAt(i);
        if (code <= 31 || code >= 127 && code <= 159) {
          continue;
        }
        if (code >= 768 && code <= 879) {
          continue;
        }
        if (code > 65535) {
          i++;
        }
        width += isFullwidthCodePoint(code) ? 2 : 1;
      }
      return width;
    };
    module2.exports = stringWidth;
    module2.exports.default = stringWidth;
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff2 = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff2 + 1 / 2;
      };
      if (diff2 === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff2 / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
      });
      styles.color.close = "\x1B[39m";
      styles.bgColor.close = "\x1B[49m";
      setLazyProperty(styles.color, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, false));
      setLazyProperty(styles.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, false));
      setLazyProperty(styles.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, true));
      setLazyProperty(styles.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/wrap-ansi/index.js
var require_wrap_ansi = __commonJS({
  "node_modules/wrap-ansi/index.js"(exports2, module2) {
    "use strict";
    var stringWidth = require_string_width();
    var stripAnsi = require_strip_ansi();
    var ansiStyles = require_ansi_styles();
    var ESCAPES = /* @__PURE__ */ new Set([
      "\x1B",
      "\x9B"
    ]);
    var END_CODE = 39;
    var ANSI_ESCAPE_BELL = "\x07";
    var ANSI_CSI = "[";
    var ANSI_OSC = "]";
    var ANSI_SGR_TERMINATOR = "m";
    var ANSI_ESCAPE_LINK = `${ANSI_OSC}8;;`;
    var wrapAnsi = (code) => `${ESCAPES.values().next().value}${ANSI_CSI}${code}${ANSI_SGR_TERMINATOR}`;
    var wrapAnsiHyperlink = (uri) => `${ESCAPES.values().next().value}${ANSI_ESCAPE_LINK}${uri}${ANSI_ESCAPE_BELL}`;
    var wordLengths = (string) => string.split(" ").map((character) => stringWidth(character));
    var wrapWord = (rows, word, columns) => {
      const characters = [...word];
      let isInsideEscape = false;
      let isInsideLinkEscape = false;
      let visible = stringWidth(stripAnsi(rows[rows.length - 1]));
      for (const [index, character] of characters.entries()) {
        const characterLength = stringWidth(character);
        if (visible + characterLength <= columns) {
          rows[rows.length - 1] += character;
        } else {
          rows.push(character);
          visible = 0;
        }
        if (ESCAPES.has(character)) {
          isInsideEscape = true;
          isInsideLinkEscape = characters.slice(index + 1).join("").startsWith(ANSI_ESCAPE_LINK);
        }
        if (isInsideEscape) {
          if (isInsideLinkEscape) {
            if (character === ANSI_ESCAPE_BELL) {
              isInsideEscape = false;
              isInsideLinkEscape = false;
            }
          } else if (character === ANSI_SGR_TERMINATOR) {
            isInsideEscape = false;
          }
          continue;
        }
        visible += characterLength;
        if (visible === columns && index < characters.length - 1) {
          rows.push("");
          visible = 0;
        }
      }
      if (!visible && rows[rows.length - 1].length > 0 && rows.length > 1) {
        rows[rows.length - 2] += rows.pop();
      }
    };
    var stringVisibleTrimSpacesRight = (string) => {
      const words = string.split(" ");
      let last = words.length;
      while (last > 0) {
        if (stringWidth(words[last - 1]) > 0) {
          break;
        }
        last--;
      }
      if (last === words.length) {
        return string;
      }
      return words.slice(0, last).join(" ") + words.slice(last).join("");
    };
    var exec = (string, columns, options = {}) => {
      if (options.trim !== false && string.trim() === "") {
        return "";
      }
      let returnValue = "";
      let escapeCode;
      let escapeUrl;
      const lengths = wordLengths(string);
      let rows = [""];
      for (const [index, word] of string.split(" ").entries()) {
        if (options.trim !== false) {
          rows[rows.length - 1] = rows[rows.length - 1].trimStart();
        }
        let rowLength = stringWidth(rows[rows.length - 1]);
        if (index !== 0) {
          if (rowLength >= columns && (options.wordWrap === false || options.trim === false)) {
            rows.push("");
            rowLength = 0;
          }
          if (rowLength > 0 || options.trim === false) {
            rows[rows.length - 1] += " ";
            rowLength++;
          }
        }
        if (options.hard && lengths[index] > columns) {
          const remainingColumns = columns - rowLength;
          const breaksStartingThisLine = 1 + Math.floor((lengths[index] - remainingColumns - 1) / columns);
          const breaksStartingNextLine = Math.floor((lengths[index] - 1) / columns);
          if (breaksStartingNextLine < breaksStartingThisLine) {
            rows.push("");
          }
          wrapWord(rows, word, columns);
          continue;
        }
        if (rowLength + lengths[index] > columns && rowLength > 0 && lengths[index] > 0) {
          if (options.wordWrap === false && rowLength < columns) {
            wrapWord(rows, word, columns);
            continue;
          }
          rows.push("");
        }
        if (rowLength + lengths[index] > columns && options.wordWrap === false) {
          wrapWord(rows, word, columns);
          continue;
        }
        rows[rows.length - 1] += word;
      }
      if (options.trim !== false) {
        rows = rows.map(stringVisibleTrimSpacesRight);
      }
      const pre = [...rows.join("\n")];
      for (const [index, character] of pre.entries()) {
        returnValue += character;
        if (ESCAPES.has(character)) {
          const { groups } = new RegExp(`(?:\\${ANSI_CSI}(?<code>\\d+)m|\\${ANSI_ESCAPE_LINK}(?<uri>.*)${ANSI_ESCAPE_BELL})`).exec(pre.slice(index).join("")) || { groups: {} };
          if (groups.code !== void 0) {
            const code2 = Number.parseFloat(groups.code);
            escapeCode = code2 === END_CODE ? void 0 : code2;
          } else if (groups.uri !== void 0) {
            escapeUrl = groups.uri.length === 0 ? void 0 : groups.uri;
          }
        }
        const code = ansiStyles.codes.get(Number(escapeCode));
        if (pre[index + 1] === "\n") {
          if (escapeUrl) {
            returnValue += wrapAnsiHyperlink("");
          }
          if (escapeCode && code) {
            returnValue += wrapAnsi(code);
          }
        } else if (character === "\n") {
          if (escapeCode && code) {
            returnValue += wrapAnsi(escapeCode);
          }
          if (escapeUrl) {
            returnValue += wrapAnsiHyperlink(escapeUrl);
          }
        }
      }
      return returnValue;
    };
    module2.exports = (string, columns, options) => {
      return String(string).normalize().replace(/\r\n/g, "\n").split("\n").map((line) => exec(line, columns, options)).join("\n");
    };
  }
});

// node_modules/cliui/build/index.cjs
var require_build3 = __commonJS({
  "node_modules/cliui/build/index.cjs"(exports2, module2) {
    "use strict";
    var align = {
      right: alignRight,
      center: alignCenter
    };
    var top = 0;
    var right = 1;
    var bottom = 2;
    var left = 3;
    var UI = class {
      constructor(opts) {
        var _a;
        this.width = opts.width;
        this.wrap = (_a = opts.wrap) !== null && _a !== void 0 ? _a : true;
        this.rows = [];
      }
      span(...args) {
        const cols = this.div(...args);
        cols.span = true;
      }
      resetOutput() {
        this.rows = [];
      }
      div(...args) {
        if (args.length === 0) {
          this.div("");
        }
        if (this.wrap && this.shouldApplyLayoutDSL(...args) && typeof args[0] === "string") {
          return this.applyLayoutDSL(args[0]);
        }
        const cols = args.map((arg) => {
          if (typeof arg === "string") {
            return this.colFromString(arg);
          }
          return arg;
        });
        this.rows.push(cols);
        return cols;
      }
      shouldApplyLayoutDSL(...args) {
        return args.length === 1 && typeof args[0] === "string" && /[\t\n]/.test(args[0]);
      }
      applyLayoutDSL(str) {
        const rows = str.split("\n").map((row) => row.split("	"));
        let leftColumnWidth = 0;
        rows.forEach((columns) => {
          if (columns.length > 1 && mixin.stringWidth(columns[0]) > leftColumnWidth) {
            leftColumnWidth = Math.min(Math.floor(this.width * 0.5), mixin.stringWidth(columns[0]));
          }
        });
        rows.forEach((columns) => {
          this.div(...columns.map((r, i) => {
            return {
              text: r.trim(),
              padding: this.measurePadding(r),
              width: i === 0 && columns.length > 1 ? leftColumnWidth : void 0
            };
          }));
        });
        return this.rows[this.rows.length - 1];
      }
      colFromString(text) {
        return {
          text,
          padding: this.measurePadding(text)
        };
      }
      measurePadding(str) {
        const noAnsi = mixin.stripAnsi(str);
        return [0, noAnsi.match(/\s*$/)[0].length, 0, noAnsi.match(/^\s*/)[0].length];
      }
      toString() {
        const lines = [];
        this.rows.forEach((row) => {
          this.rowToString(row, lines);
        });
        return lines.filter((line) => !line.hidden).map((line) => line.text).join("\n");
      }
      rowToString(row, lines) {
        this.rasterize(row).forEach((rrow, r) => {
          let str = "";
          rrow.forEach((col, c) => {
            const { width } = row[c];
            const wrapWidth = this.negatePadding(row[c]);
            let ts = col;
            if (wrapWidth > mixin.stringWidth(col)) {
              ts += " ".repeat(wrapWidth - mixin.stringWidth(col));
            }
            if (row[c].align && row[c].align !== "left" && this.wrap) {
              const fn = align[row[c].align];
              ts = fn(ts, wrapWidth);
              if (mixin.stringWidth(ts) < wrapWidth) {
                ts += " ".repeat((width || 0) - mixin.stringWidth(ts) - 1);
              }
            }
            const padding = row[c].padding || [0, 0, 0, 0];
            if (padding[left]) {
              str += " ".repeat(padding[left]);
            }
            str += addBorder(row[c], ts, "| ");
            str += ts;
            str += addBorder(row[c], ts, " |");
            if (padding[right]) {
              str += " ".repeat(padding[right]);
            }
            if (r === 0 && lines.length > 0) {
              str = this.renderInline(str, lines[lines.length - 1]);
            }
          });
          lines.push({
            text: str.replace(/ +$/, ""),
            span: row.span
          });
        });
        return lines;
      }
      // if the full 'source' can render in
      // the target line, do so.
      renderInline(source, previousLine) {
        const match = source.match(/^ */);
        const leadingWhitespace = match ? match[0].length : 0;
        const target = previousLine.text;
        const targetTextWidth = mixin.stringWidth(target.trimRight());
        if (!previousLine.span) {
          return source;
        }
        if (!this.wrap) {
          previousLine.hidden = true;
          return target + source;
        }
        if (leadingWhitespace < targetTextWidth) {
          return source;
        }
        previousLine.hidden = true;
        return target.trimRight() + " ".repeat(leadingWhitespace - targetTextWidth) + source.trimLeft();
      }
      rasterize(row) {
        const rrows = [];
        const widths = this.columnWidths(row);
        let wrapped;
        row.forEach((col, c) => {
          col.width = widths[c];
          if (this.wrap) {
            wrapped = mixin.wrap(col.text, this.negatePadding(col), { hard: true }).split("\n");
          } else {
            wrapped = col.text.split("\n");
          }
          if (col.border) {
            wrapped.unshift("." + "-".repeat(this.negatePadding(col) + 2) + ".");
            wrapped.push("'" + "-".repeat(this.negatePadding(col) + 2) + "'");
          }
          if (col.padding) {
            wrapped.unshift(...new Array(col.padding[top] || 0).fill(""));
            wrapped.push(...new Array(col.padding[bottom] || 0).fill(""));
          }
          wrapped.forEach((str, r) => {
            if (!rrows[r]) {
              rrows.push([]);
            }
            const rrow = rrows[r];
            for (let i = 0; i < c; i++) {
              if (rrow[i] === void 0) {
                rrow.push("");
              }
            }
            rrow.push(str);
          });
        });
        return rrows;
      }
      negatePadding(col) {
        let wrapWidth = col.width || 0;
        if (col.padding) {
          wrapWidth -= (col.padding[left] || 0) + (col.padding[right] || 0);
        }
        if (col.border) {
          wrapWidth -= 4;
        }
        return wrapWidth;
      }
      columnWidths(row) {
        if (!this.wrap) {
          return row.map((col) => {
            return col.width || mixin.stringWidth(col.text);
          });
        }
        let unset = row.length;
        let remainingWidth = this.width;
        const widths = row.map((col) => {
          if (col.width) {
            unset--;
            remainingWidth -= col.width;
            return col.width;
          }
          return void 0;
        });
        const unsetWidth = unset ? Math.floor(remainingWidth / unset) : 0;
        return widths.map((w, i) => {
          if (w === void 0) {
            return Math.max(unsetWidth, _minWidth(row[i]));
          }
          return w;
        });
      }
    };
    function addBorder(col, ts, style) {
      if (col.border) {
        if (/[.']-+[.']/.test(ts)) {
          return "";
        }
        if (ts.trim().length !== 0) {
          return style;
        }
        return "  ";
      }
      return "";
    }
    function _minWidth(col) {
      const padding = col.padding || [];
      const minWidth = 1 + (padding[left] || 0) + (padding[right] || 0);
      if (col.border) {
        return minWidth + 4;
      }
      return minWidth;
    }
    function getWindowWidth() {
      if (typeof process === "object" && process.stdout && process.stdout.columns) {
        return process.stdout.columns;
      }
      return 80;
    }
    function alignRight(str, width) {
      str = str.trim();
      const strWidth = mixin.stringWidth(str);
      if (strWidth < width) {
        return " ".repeat(width - strWidth) + str;
      }
      return str;
    }
    function alignCenter(str, width) {
      str = str.trim();
      const strWidth = mixin.stringWidth(str);
      if (strWidth >= width) {
        return str;
      }
      return " ".repeat(width - strWidth >> 1) + str;
    }
    var mixin;
    function cliui(opts, _mixin) {
      mixin = _mixin;
      return new UI({
        width: (opts === null || opts === void 0 ? void 0 : opts.width) || getWindowWidth(),
        wrap: opts === null || opts === void 0 ? void 0 : opts.wrap
      });
    }
    var stringWidth = require_string_width();
    var stripAnsi = require_strip_ansi();
    var wrap = require_wrap_ansi();
    function ui(opts) {
      return cliui(opts, {
        stringWidth,
        stripAnsi,
        wrap
      });
    }
    module2.exports = ui;
  }
});

// node_modules/escalade/sync/index.js
var require_sync = __commonJS({
  "node_modules/escalade/sync/index.js"(exports2, module2) {
    var { dirname, resolve } = require("path");
    var { readdirSync, statSync } = require("fs");
    module2.exports = function(start, callback) {
      let dir = resolve(".", start);
      let tmp, stats = statSync(dir);
      if (!stats.isDirectory()) {
        dir = dirname(dir);
      }
      while (true) {
        tmp = callback(dir, readdirSync(dir));
        if (tmp) return resolve(dir, tmp);
        dir = dirname(tmp = dir);
        if (tmp === dir) break;
      }
    };
  }
});

// node_modules/get-caller-file/index.js
var require_get_caller_file = __commonJS({
  "node_modules/get-caller-file/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function getCallerFile(position) {
      if (position === void 0) {
        position = 2;
      }
      if (position >= Error.stackTraceLimit) {
        throw new TypeError("getCallerFile(position) requires position be less then Error.stackTraceLimit but position was: `" + position + "` and Error.stackTraceLimit was: `" + Error.stackTraceLimit + "`");
      }
      var oldPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = function(_, stack2) {
        return stack2;
      };
      var stack = new Error().stack;
      Error.prepareStackTrace = oldPrepareStackTrace;
      if (stack !== null && typeof stack === "object") {
        return stack[position] ? stack[position].getFileName() : void 0;
      }
    };
  }
});

// node_modules/require-directory/index.js
var require_require_directory = __commonJS({
  "node_modules/require-directory/index.js"(exports2, module2) {
    "use strict";
    var fs2 = require("fs");
    var join2 = require("path").join;
    var resolve = require("path").resolve;
    var dirname = require("path").dirname;
    var defaultOptions = {
      extensions: ["js", "json", "coffee"],
      recurse: true,
      rename: function(name) {
        return name;
      },
      visit: function(obj) {
        return obj;
      }
    };
    function checkFileInclusion(path, filename, options) {
      return (
        // verify file has valid extension
        new RegExp("\\.(" + options.extensions.join("|") + ")$", "i").test(filename) && // if options.include is a RegExp, evaluate it and make sure the path passes
        !(options.include && options.include instanceof RegExp && !options.include.test(path)) && // if options.include is a function, evaluate it and make sure the path passes
        !(options.include && typeof options.include === "function" && !options.include(path, filename)) && // if options.exclude is a RegExp, evaluate it and make sure the path doesn't pass
        !(options.exclude && options.exclude instanceof RegExp && options.exclude.test(path)) && // if options.exclude is a function, evaluate it and make sure the path doesn't pass
        !(options.exclude && typeof options.exclude === "function" && options.exclude(path, filename))
      );
    }
    function requireDirectory(m, path, options) {
      var retval = {};
      if (path && !options && typeof path !== "string") {
        options = path;
        path = null;
      }
      options = options || {};
      for (var prop in defaultOptions) {
        if (typeof options[prop] === "undefined") {
          options[prop] = defaultOptions[prop];
        }
      }
      path = !path ? dirname(m.filename) : resolve(dirname(m.filename), path);
      fs2.readdirSync(path).forEach(function(filename) {
        var joined = join2(path, filename), files, key, obj;
        if (fs2.statSync(joined).isDirectory() && options.recurse) {
          files = requireDirectory(m, joined, options);
          if (Object.keys(files).length) {
            retval[options.rename(filename, joined, filename)] = files;
          }
        } else {
          if (joined !== m.filename && checkFileInclusion(joined, filename, options)) {
            key = filename.substring(0, filename.lastIndexOf("."));
            obj = m.require(joined);
            retval[options.rename(key, joined, filename)] = options.visit(obj, joined, filename) || obj;
          }
        }
      });
      return retval;
    }
    module2.exports = requireDirectory;
    module2.exports.defaults = defaultOptions;
  }
});

// node_modules/yargs/build/index.cjs
var require_build4 = __commonJS({
  "node_modules/yargs/build/index.cjs"(exports2, module2) {
    "use strict";
    var t = require("assert");
    var e = class _e extends Error {
      constructor(t2) {
        super(t2 || "yargs error"), this.name = "YError", Error.captureStackTrace && Error.captureStackTrace(this, _e);
      }
    };
    var s;
    var i = [];
    function n(t2, o2, a2, h2) {
      s = h2;
      let l2 = {};
      if (Object.prototype.hasOwnProperty.call(t2, "extends")) {
        if ("string" != typeof t2.extends) return l2;
        const r2 = /\.json|\..*rc$/.test(t2.extends);
        let h3 = null;
        if (r2) h3 = function(t3, e2) {
          return s.path.resolve(t3, e2);
        }(o2, t2.extends);
        else try {
          h3 = require.resolve(t2.extends);
        } catch (e2) {
          return t2;
        }
        !function(t3) {
          if (i.indexOf(t3) > -1) throw new e(`Circular extended configurations: '${t3}'.`);
        }(h3), i.push(h3), l2 = r2 ? JSON.parse(s.readFileSync(h3, "utf8")) : require(t2.extends), delete t2.extends, l2 = n(l2, s.path.dirname(h3), a2, s);
      }
      return i = [], a2 ? r(l2, t2) : Object.assign({}, l2, t2);
    }
    function r(t2, e2) {
      const s2 = {};
      function i2(t3) {
        return t3 && "object" == typeof t3 && !Array.isArray(t3);
      }
      Object.assign(s2, t2);
      for (const n2 of Object.keys(e2)) i2(e2[n2]) && i2(s2[n2]) ? s2[n2] = r(t2[n2], e2[n2]) : s2[n2] = e2[n2];
      return s2;
    }
    function o(t2) {
      const e2 = t2.replace(/\s{2,}/g, " ").split(/\s+(?![^[]*]|[^<]*>)/), s2 = /\.*[\][<>]/g, i2 = e2.shift();
      if (!i2) throw new Error(`No command found in: ${t2}`);
      const n2 = { cmd: i2.replace(s2, ""), demanded: [], optional: [] };
      return e2.forEach((t3, i3) => {
        let r2 = false;
        t3 = t3.replace(/\s/g, ""), /\.+[\]>]/.test(t3) && i3 === e2.length - 1 && (r2 = true), /^\[/.test(t3) ? n2.optional.push({ cmd: t3.replace(s2, "").split("|"), variadic: r2 }) : n2.demanded.push({ cmd: t3.replace(s2, "").split("|"), variadic: r2 });
      }), n2;
    }
    var a = ["first", "second", "third", "fourth", "fifth", "sixth"];
    function h(t2, s2, i2) {
      try {
        let n2 = 0;
        const [r2, a2, h2] = "object" == typeof t2 ? [{ demanded: [], optional: [] }, t2, s2] : [o(`cmd ${t2}`), s2, i2], f2 = [].slice.call(a2);
        for (; f2.length && void 0 === f2[f2.length - 1]; ) f2.pop();
        const d2 = h2 || f2.length;
        if (d2 < r2.demanded.length) throw new e(`Not enough arguments provided. Expected ${r2.demanded.length} but received ${f2.length}.`);
        const u2 = r2.demanded.length + r2.optional.length;
        if (d2 > u2) throw new e(`Too many arguments provided. Expected max ${u2} but received ${d2}.`);
        r2.demanded.forEach((t3) => {
          const e2 = l(f2.shift());
          0 === t3.cmd.filter((t4) => t4 === e2 || "*" === t4).length && c(e2, t3.cmd, n2), n2 += 1;
        }), r2.optional.forEach((t3) => {
          if (0 === f2.length) return;
          const e2 = l(f2.shift());
          0 === t3.cmd.filter((t4) => t4 === e2 || "*" === t4).length && c(e2, t3.cmd, n2), n2 += 1;
        });
      } catch (t3) {
        console.warn(t3.stack);
      }
    }
    function l(t2) {
      return Array.isArray(t2) ? "array" : null === t2 ? "null" : typeof t2;
    }
    function c(t2, s2, i2) {
      throw new e(`Invalid ${a[i2] || "manyith"} argument. Expected ${s2.join(" or ")} but received ${t2}.`);
    }
    function f(t2) {
      return !!t2 && !!t2.then && "function" == typeof t2.then;
    }
    function d(t2, e2, s2, i2) {
      s2.assert.notStrictEqual(t2, e2, i2);
    }
    function u(t2, e2) {
      e2.assert.strictEqual(typeof t2, "string");
    }
    function p(t2) {
      return Object.keys(t2);
    }
    function g(t2 = {}, e2 = () => true) {
      const s2 = {};
      return p(t2).forEach((i2) => {
        e2(i2, t2[i2]) && (s2[i2] = t2[i2]);
      }), s2;
    }
    function m() {
      return process.versions.electron && !process.defaultApp ? 0 : 1;
    }
    function y() {
      return process.argv[m()];
    }
    var b = Object.freeze({ __proto__: null, hideBin: function(t2) {
      return t2.slice(m() + 1);
    }, getProcessArgvBin: y });
    function v(t2, e2, s2, i2) {
      if ("a" === s2 && !i2) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e2 ? t2 !== e2 || !i2 : !e2.has(t2)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === s2 ? i2 : "a" === s2 ? i2.call(t2) : i2 ? i2.value : e2.get(t2);
    }
    function O(t2, e2, s2, i2, n2) {
      if ("m" === i2) throw new TypeError("Private method is not writable");
      if ("a" === i2 && !n2) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e2 ? t2 !== e2 || !n2 : !e2.has(t2)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === i2 ? n2.call(t2, s2) : n2 ? n2.value = s2 : e2.set(t2, s2), s2;
    }
    var w = class {
      constructor(t2) {
        this.globalMiddleware = [], this.frozens = [], this.yargs = t2;
      }
      addMiddleware(t2, e2, s2 = true, i2 = false) {
        if (h("<array|function> [boolean] [boolean] [boolean]", [t2, e2, s2], arguments.length), Array.isArray(t2)) {
          for (let i3 = 0; i3 < t2.length; i3++) {
            if ("function" != typeof t2[i3]) throw Error("middleware must be a function");
            const n2 = t2[i3];
            n2.applyBeforeValidation = e2, n2.global = s2;
          }
          Array.prototype.push.apply(this.globalMiddleware, t2);
        } else if ("function" == typeof t2) {
          const n2 = t2;
          n2.applyBeforeValidation = e2, n2.global = s2, n2.mutates = i2, this.globalMiddleware.push(t2);
        }
        return this.yargs;
      }
      addCoerceMiddleware(t2, e2) {
        const s2 = this.yargs.getAliases();
        return this.globalMiddleware = this.globalMiddleware.filter((t3) => {
          const i2 = [...s2[e2] || [], e2];
          return !t3.option || !i2.includes(t3.option);
        }), t2.option = e2, this.addMiddleware(t2, true, true, true);
      }
      getMiddleware() {
        return this.globalMiddleware;
      }
      freeze() {
        this.frozens.push([...this.globalMiddleware]);
      }
      unfreeze() {
        const t2 = this.frozens.pop();
        void 0 !== t2 && (this.globalMiddleware = t2);
      }
      reset() {
        this.globalMiddleware = this.globalMiddleware.filter((t2) => t2.global);
      }
    };
    function C(t2, e2, s2, i2) {
      return s2.reduce((t3, s3) => {
        if (s3.applyBeforeValidation !== i2) return t3;
        if (s3.mutates) {
          if (s3.applied) return t3;
          s3.applied = true;
        }
        if (f(t3)) return t3.then((t4) => Promise.all([t4, s3(t4, e2)])).then(([t4, e3]) => Object.assign(t4, e3));
        {
          const i3 = s3(t3, e2);
          return f(i3) ? i3.then((e3) => Object.assign(t3, e3)) : Object.assign(t3, i3);
        }
      }, t2);
    }
    function j(t2, e2, s2 = (t3) => {
      throw t3;
    }) {
      try {
        const s3 = "function" == typeof t2 ? t2() : t2;
        return f(s3) ? s3.then((t3) => e2(t3)) : e2(s3);
      } catch (t3) {
        return s2(t3);
      }
    }
    var M = /(^\*)|(^\$0)/;
    var _ = class {
      constructor(t2, e2, s2, i2) {
        this.requireCache = /* @__PURE__ */ new Set(), this.handlers = {}, this.aliasMap = {}, this.frozens = [], this.shim = i2, this.usage = t2, this.globalMiddleware = s2, this.validation = e2;
      }
      addDirectory(t2, e2, s2, i2) {
        "boolean" != typeof (i2 = i2 || {}).recurse && (i2.recurse = false), Array.isArray(i2.extensions) || (i2.extensions = ["js"]);
        const n2 = "function" == typeof i2.visit ? i2.visit : (t3) => t3;
        i2.visit = (t3, e3, s3) => {
          const i3 = n2(t3, e3, s3);
          if (i3) {
            if (this.requireCache.has(e3)) return i3;
            this.requireCache.add(e3), this.addHandler(i3);
          }
          return i3;
        }, this.shim.requireDirectory({ require: e2, filename: s2 }, t2, i2);
      }
      addHandler(t2, e2, s2, i2, n2, r2) {
        let a2 = [];
        const h2 = function(t3) {
          return t3 ? t3.map((t4) => (t4.applyBeforeValidation = false, t4)) : [];
        }(n2);
        if (i2 = i2 || (() => {
        }), Array.isArray(t2)) if (function(t3) {
          return t3.every((t4) => "string" == typeof t4);
        }(t2)) [t2, ...a2] = t2;
        else for (const e3 of t2) this.addHandler(e3);
        else {
          if (function(t3) {
            return "object" == typeof t3 && !Array.isArray(t3);
          }(t2)) {
            let e3 = Array.isArray(t2.command) || "string" == typeof t2.command ? t2.command : this.moduleName(t2);
            return t2.aliases && (e3 = [].concat(e3).concat(t2.aliases)), void this.addHandler(e3, this.extractDesc(t2), t2.builder, t2.handler, t2.middlewares, t2.deprecated);
          }
          if (k(s2)) return void this.addHandler([t2].concat(a2), e2, s2.builder, s2.handler, s2.middlewares, s2.deprecated);
        }
        if ("string" == typeof t2) {
          const n3 = o(t2);
          a2 = a2.map((t3) => o(t3).cmd);
          let l2 = false;
          const c2 = [n3.cmd].concat(a2).filter((t3) => !M.test(t3) || (l2 = true, false));
          0 === c2.length && l2 && c2.push("$0"), l2 && (n3.cmd = c2[0], a2 = c2.slice(1), t2 = t2.replace(M, n3.cmd)), a2.forEach((t3) => {
            this.aliasMap[t3] = n3.cmd;
          }), false !== e2 && this.usage.command(t2, e2, l2, a2, r2), this.handlers[n3.cmd] = { original: t2, description: e2, handler: i2, builder: s2 || {}, middlewares: h2, deprecated: r2, demanded: n3.demanded, optional: n3.optional }, l2 && (this.defaultCommand = this.handlers[n3.cmd]);
        }
      }
      getCommandHandlers() {
        return this.handlers;
      }
      getCommands() {
        return Object.keys(this.handlers).concat(Object.keys(this.aliasMap));
      }
      hasDefaultCommand() {
        return !!this.defaultCommand;
      }
      runCommand(t2, e2, s2, i2, n2, r2) {
        const o2 = this.handlers[t2] || this.handlers[this.aliasMap[t2]] || this.defaultCommand, a2 = e2.getInternalMethods().getContext(), h2 = a2.commands.slice(), l2 = !t2;
        t2 && (a2.commands.push(t2), a2.fullCommands.push(o2.original));
        const c2 = this.applyBuilderUpdateUsageAndParse(l2, o2, e2, s2.aliases, h2, i2, n2, r2);
        return f(c2) ? c2.then((t3) => this.applyMiddlewareAndGetResult(l2, o2, t3.innerArgv, a2, n2, t3.aliases, e2)) : this.applyMiddlewareAndGetResult(l2, o2, c2.innerArgv, a2, n2, c2.aliases, e2);
      }
      applyBuilderUpdateUsageAndParse(t2, e2, s2, i2, n2, r2, o2, a2) {
        const h2 = e2.builder;
        let l2 = s2;
        if (x(h2)) {
          s2.getInternalMethods().getUsageInstance().freeze();
          const c2 = h2(s2.getInternalMethods().reset(i2), a2);
          if (f(c2)) return c2.then((i3) => {
            var a3;
            return l2 = (a3 = i3) && "function" == typeof a3.getInternalMethods ? i3 : s2, this.parseAndUpdateUsage(t2, e2, l2, n2, r2, o2);
          });
        } else /* @__PURE__ */ (function(t3) {
          return "object" == typeof t3;
        })(h2) && (s2.getInternalMethods().getUsageInstance().freeze(), l2 = s2.getInternalMethods().reset(i2), Object.keys(e2.builder).forEach((t3) => {
          l2.option(t3, h2[t3]);
        }));
        return this.parseAndUpdateUsage(t2, e2, l2, n2, r2, o2);
      }
      parseAndUpdateUsage(t2, e2, s2, i2, n2, r2) {
        t2 && s2.getInternalMethods().getUsageInstance().unfreeze(true), this.shouldUpdateUsage(s2) && s2.getInternalMethods().getUsageInstance().usage(this.usageFromParentCommandsCommandHandler(i2, e2), e2.description);
        const o2 = s2.getInternalMethods().runYargsParserAndExecuteCommands(null, void 0, true, n2, r2);
        return f(o2) ? o2.then((t3) => ({ aliases: s2.parsed.aliases, innerArgv: t3 })) : { aliases: s2.parsed.aliases, innerArgv: o2 };
      }
      shouldUpdateUsage(t2) {
        return !t2.getInternalMethods().getUsageInstance().getUsageDisabled() && 0 === t2.getInternalMethods().getUsageInstance().getUsage().length;
      }
      usageFromParentCommandsCommandHandler(t2, e2) {
        const s2 = M.test(e2.original) ? e2.original.replace(M, "").trim() : e2.original, i2 = t2.filter((t3) => !M.test(t3));
        return i2.push(s2), `$0 ${i2.join(" ")}`;
      }
      handleValidationAndGetResult(t2, e2, s2, i2, n2, r2, o2, a2) {
        if (!r2.getInternalMethods().getHasOutput()) {
          const e3 = r2.getInternalMethods().runValidation(n2, a2, r2.parsed.error, t2);
          s2 = j(s2, (t3) => (e3(t3), t3));
        }
        if (e2.handler && !r2.getInternalMethods().getHasOutput()) {
          r2.getInternalMethods().setHasOutput();
          const i3 = !!r2.getOptions().configuration["populate--"];
          r2.getInternalMethods().postProcess(s2, i3, false, false), s2 = j(s2 = C(s2, r2, o2, false), (t3) => {
            const s3 = e2.handler(t3);
            return f(s3) ? s3.then(() => t3) : t3;
          }), t2 || r2.getInternalMethods().getUsageInstance().cacheHelpMessage(), f(s2) && !r2.getInternalMethods().hasParseCallback() && s2.catch((t3) => {
            try {
              r2.getInternalMethods().getUsageInstance().fail(null, t3);
            } catch (t4) {
            }
          });
        }
        return t2 || (i2.commands.pop(), i2.fullCommands.pop()), s2;
      }
      applyMiddlewareAndGetResult(t2, e2, s2, i2, n2, r2, o2) {
        let a2 = {};
        if (n2) return s2;
        o2.getInternalMethods().getHasOutput() || (a2 = this.populatePositionals(e2, s2, i2, o2));
        const h2 = this.globalMiddleware.getMiddleware().slice(0).concat(e2.middlewares), l2 = C(s2, o2, h2, true);
        return f(l2) ? l2.then((s3) => this.handleValidationAndGetResult(t2, e2, s3, i2, r2, o2, h2, a2)) : this.handleValidationAndGetResult(t2, e2, l2, i2, r2, o2, h2, a2);
      }
      populatePositionals(t2, e2, s2, i2) {
        e2._ = e2._.slice(s2.commands.length);
        const n2 = t2.demanded.slice(0), r2 = t2.optional.slice(0), o2 = {};
        for (this.validation.positionalCount(n2.length, e2._.length); n2.length; ) {
          const t3 = n2.shift();
          this.populatePositional(t3, e2, o2);
        }
        for (; r2.length; ) {
          const t3 = r2.shift();
          this.populatePositional(t3, e2, o2);
        }
        return e2._ = s2.commands.concat(e2._.map((t3) => "" + t3)), this.postProcessPositionals(e2, o2, this.cmdToParseOptions(t2.original), i2), o2;
      }
      populatePositional(t2, e2, s2) {
        const i2 = t2.cmd[0];
        t2.variadic ? s2[i2] = e2._.splice(0).map(String) : e2._.length && (s2[i2] = [String(e2._.shift())]);
      }
      cmdToParseOptions(t2) {
        const e2 = { array: [], default: {}, alias: {}, demand: {} }, s2 = o(t2);
        return s2.demanded.forEach((t3) => {
          const [s3, ...i2] = t3.cmd;
          t3.variadic && (e2.array.push(s3), e2.default[s3] = []), e2.alias[s3] = i2, e2.demand[s3] = true;
        }), s2.optional.forEach((t3) => {
          const [s3, ...i2] = t3.cmd;
          t3.variadic && (e2.array.push(s3), e2.default[s3] = []), e2.alias[s3] = i2;
        }), e2;
      }
      postProcessPositionals(t2, e2, s2, i2) {
        const n2 = Object.assign({}, i2.getOptions());
        n2.default = Object.assign(s2.default, n2.default);
        for (const t3 of Object.keys(s2.alias)) n2.alias[t3] = (n2.alias[t3] || []).concat(s2.alias[t3]);
        n2.array = n2.array.concat(s2.array), n2.config = {};
        const r2 = [];
        if (Object.keys(e2).forEach((t3) => {
          e2[t3].map((e3) => {
            n2.configuration["unknown-options-as-args"] && (n2.key[t3] = true), r2.push(`--${t3}`), r2.push(e3);
          });
        }), !r2.length) return;
        const o2 = Object.assign({}, n2.configuration, { "populate--": false }), a2 = this.shim.Parser.detailed(r2, Object.assign({}, n2, { configuration: o2 }));
        if (a2.error) i2.getInternalMethods().getUsageInstance().fail(a2.error.message, a2.error);
        else {
          const s3 = Object.keys(e2);
          Object.keys(e2).forEach((t3) => {
            s3.push(...a2.aliases[t3]);
          }), Object.keys(a2.argv).forEach((n3) => {
            s3.includes(n3) && (e2[n3] || (e2[n3] = a2.argv[n3]), !this.isInConfigs(i2, n3) && !this.isDefaulted(i2, n3) && Object.prototype.hasOwnProperty.call(t2, n3) && Object.prototype.hasOwnProperty.call(a2.argv, n3) && (Array.isArray(t2[n3]) || Array.isArray(a2.argv[n3])) ? t2[n3] = [].concat(t2[n3], a2.argv[n3]) : t2[n3] = a2.argv[n3]);
          });
        }
      }
      isDefaulted(t2, e2) {
        const { default: s2 } = t2.getOptions();
        return Object.prototype.hasOwnProperty.call(s2, e2) || Object.prototype.hasOwnProperty.call(s2, this.shim.Parser.camelCase(e2));
      }
      isInConfigs(t2, e2) {
        const { configObjects: s2 } = t2.getOptions();
        return s2.some((t3) => Object.prototype.hasOwnProperty.call(t3, e2)) || s2.some((t3) => Object.prototype.hasOwnProperty.call(t3, this.shim.Parser.camelCase(e2)));
      }
      runDefaultBuilderOn(t2) {
        if (!this.defaultCommand) return;
        if (this.shouldUpdateUsage(t2)) {
          const e3 = M.test(this.defaultCommand.original) ? this.defaultCommand.original : this.defaultCommand.original.replace(/^[^[\]<>]*/, "$0 ");
          t2.getInternalMethods().getUsageInstance().usage(e3, this.defaultCommand.description);
        }
        const e2 = this.defaultCommand.builder;
        if (x(e2)) return e2(t2, true);
        k(e2) || Object.keys(e2).forEach((s2) => {
          t2.option(s2, e2[s2]);
        });
      }
      moduleName(t2) {
        const e2 = function(t3) {
          if ("undefined" == typeof require) return null;
          for (let e3, s2 = 0, i2 = Object.keys(require.cache); s2 < i2.length; s2++) if (e3 = require.cache[i2[s2]], e3.exports === t3) return e3;
          return null;
        }(t2);
        if (!e2) throw new Error(`No command name given for module: ${this.shim.inspect(t2)}`);
        return this.commandFromFilename(e2.filename);
      }
      commandFromFilename(t2) {
        return this.shim.path.basename(t2, this.shim.path.extname(t2));
      }
      extractDesc({ describe: t2, description: e2, desc: s2 }) {
        for (const i2 of [t2, e2, s2]) {
          if ("string" == typeof i2 || false === i2) return i2;
          d(i2, true, this.shim);
        }
        return false;
      }
      freeze() {
        this.frozens.push({ handlers: this.handlers, aliasMap: this.aliasMap, defaultCommand: this.defaultCommand });
      }
      unfreeze() {
        const t2 = this.frozens.pop();
        d(t2, void 0, this.shim), { handlers: this.handlers, aliasMap: this.aliasMap, defaultCommand: this.defaultCommand } = t2;
      }
      reset() {
        return this.handlers = {}, this.aliasMap = {}, this.defaultCommand = void 0, this.requireCache = /* @__PURE__ */ new Set(), this;
      }
    };
    function k(t2) {
      return "object" == typeof t2 && !!t2.builder && "function" == typeof t2.handler;
    }
    function x(t2) {
      return "function" == typeof t2;
    }
    function E(t2) {
      "undefined" != typeof process && [process.stdout, process.stderr].forEach((e2) => {
        const s2 = e2;
        s2._handle && s2.isTTY && "function" == typeof s2._handle.setBlocking && s2._handle.setBlocking(t2);
      });
    }
    function A(t2) {
      return "boolean" == typeof t2;
    }
    function P(t2, s2) {
      const i2 = s2.y18n.__, n2 = {}, r2 = [];
      n2.failFn = function(t3) {
        r2.push(t3);
      };
      let o2 = null, a2 = null, h2 = true;
      n2.showHelpOnFail = function(e2 = true, s3) {
        const [i3, r3] = "string" == typeof e2 ? [true, e2] : [e2, s3];
        return t2.getInternalMethods().isGlobalContext() && (a2 = r3), o2 = r3, h2 = i3, n2;
      };
      let l2 = false;
      n2.fail = function(s3, i3) {
        const c3 = t2.getInternalMethods().getLoggerInstance();
        if (!r2.length) {
          if (t2.getExitProcess() && E(true), !l2) {
            l2 = true, h2 && (t2.showHelp("error"), c3.error()), (s3 || i3) && c3.error(s3 || i3);
            const e2 = o2 || a2;
            e2 && ((s3 || i3) && c3.error(""), c3.error(e2));
          }
          if (i3 = i3 || new e(s3), t2.getExitProcess()) return t2.exit(1);
          if (t2.getInternalMethods().hasParseCallback()) return t2.exit(1, i3);
          throw i3;
        }
        for (let t3 = r2.length - 1; t3 >= 0; --t3) {
          const e2 = r2[t3];
          if (A(e2)) {
            if (i3) throw i3;
            if (s3) throw Error(s3);
          } else e2(s3, i3, n2);
        }
      };
      let c2 = [], f2 = false;
      n2.usage = (t3, e2) => null === t3 ? (f2 = true, c2 = [], n2) : (f2 = false, c2.push([t3, e2 || ""]), n2), n2.getUsage = () => c2, n2.getUsageDisabled = () => f2, n2.getPositionalGroupName = () => i2("Positionals:");
      let d2 = [];
      n2.example = (t3, e2) => {
        d2.push([t3, e2 || ""]);
      };
      let u2 = [];
      n2.command = function(t3, e2, s3, i3, n3 = false) {
        s3 && (u2 = u2.map((t4) => (t4[2] = false, t4))), u2.push([t3, e2 || "", s3, i3, n3]);
      }, n2.getCommands = () => u2;
      let p2 = {};
      n2.describe = function(t3, e2) {
        Array.isArray(t3) ? t3.forEach((t4) => {
          n2.describe(t4, e2);
        }) : "object" == typeof t3 ? Object.keys(t3).forEach((e3) => {
          n2.describe(e3, t3[e3]);
        }) : p2[t3] = e2;
      }, n2.getDescriptions = () => p2;
      let m2 = [];
      n2.epilog = (t3) => {
        m2.push(t3);
      };
      let y2, b2 = false;
      n2.wrap = (t3) => {
        b2 = true, y2 = t3;
      }, n2.getWrap = () => s2.getEnv("YARGS_DISABLE_WRAP") ? null : (b2 || (y2 = function() {
        const t3 = 80;
        return s2.process.stdColumns ? Math.min(t3, s2.process.stdColumns) : t3;
      }(), b2 = true), y2);
      const v2 = "__yargsString__:";
      function O2(t3, e2, i3) {
        let n3 = 0;
        return Array.isArray(t3) || (t3 = Object.values(t3).map((t4) => [t4])), t3.forEach((t4) => {
          n3 = Math.max(s2.stringWidth(i3 ? `${i3} ${I(t4[0])}` : I(t4[0])) + $(t4[0]), n3);
        }), e2 && (n3 = Math.min(n3, parseInt((0.5 * e2).toString(), 10))), n3;
      }
      let w2;
      function C2(e2) {
        return t2.getOptions().hiddenOptions.indexOf(e2) < 0 || t2.parsed.argv[t2.getOptions().showHiddenOpt];
      }
      function j2(t3, e2) {
        let s3 = `[${i2("default:")} `;
        if (void 0 === t3 && !e2) return null;
        if (e2) s3 += e2;
        else switch (typeof t3) {
          case "string":
            s3 += `"${t3}"`;
            break;
          case "object":
            s3 += JSON.stringify(t3);
            break;
          default:
            s3 += t3;
        }
        return `${s3}]`;
      }
      n2.deferY18nLookup = (t3) => v2 + t3, n2.help = function() {
        if (w2) return w2;
        !function() {
          const e3 = t2.getDemandedOptions(), s3 = t2.getOptions();
          (Object.keys(s3.alias) || []).forEach((i3) => {
            s3.alias[i3].forEach((r4) => {
              p2[r4] && n2.describe(i3, p2[r4]), r4 in e3 && t2.demandOption(i3, e3[r4]), s3.boolean.includes(r4) && t2.boolean(i3), s3.count.includes(r4) && t2.count(i3), s3.string.includes(r4) && t2.string(i3), s3.normalize.includes(r4) && t2.normalize(i3), s3.array.includes(r4) && t2.array(i3), s3.number.includes(r4) && t2.number(i3);
            });
          });
        }();
        const e2 = t2.customScriptName ? t2.$0 : s2.path.basename(t2.$0), r3 = t2.getDemandedOptions(), o3 = t2.getDemandedCommands(), a3 = t2.getDeprecatedOptions(), h3 = t2.getGroups(), l3 = t2.getOptions();
        let g2 = [];
        g2 = g2.concat(Object.keys(p2)), g2 = g2.concat(Object.keys(r3)), g2 = g2.concat(Object.keys(o3)), g2 = g2.concat(Object.keys(l3.default)), g2 = g2.filter(C2), g2 = Object.keys(g2.reduce((t3, e3) => ("_" !== e3 && (t3[e3] = true), t3), {}));
        const y3 = n2.getWrap(), b3 = s2.cliui({ width: y3, wrap: !!y3 });
        if (!f2) {
          if (c2.length) c2.forEach((t3) => {
            b3.div({ text: `${t3[0].replace(/\$0/g, e2)}` }), t3[1] && b3.div({ text: `${t3[1]}`, padding: [1, 0, 0, 0] });
          }), b3.div();
          else if (u2.length) {
            let t3 = null;
            t3 = o3._ ? `${e2} <${i2("command")}>
` : `${e2} [${i2("command")}]
`, b3.div(`${t3}`);
          }
        }
        if (u2.length > 1 || 1 === u2.length && !u2[0][2]) {
          b3.div(i2("Commands:"));
          const s3 = t2.getInternalMethods().getContext(), n3 = s3.commands.length ? `${s3.commands.join(" ")} ` : "";
          true === t2.getInternalMethods().getParserConfiguration()["sort-commands"] && (u2 = u2.sort((t3, e3) => t3[0].localeCompare(e3[0])));
          const r4 = e2 ? `${e2} ` : "";
          u2.forEach((t3) => {
            const s4 = `${r4}${n3}${t3[0].replace(/^\$0 ?/, "")}`;
            b3.span({ text: s4, padding: [0, 2, 0, 2], width: O2(u2, y3, `${e2}${n3}`) + 4 }, { text: t3[1] });
            const o4 = [];
            t3[2] && o4.push(`[${i2("default")}]`), t3[3] && t3[3].length && o4.push(`[${i2("aliases:")} ${t3[3].join(", ")}]`), t3[4] && ("string" == typeof t3[4] ? o4.push(`[${i2("deprecated: %s", t3[4])}]`) : o4.push(`[${i2("deprecated")}]`)), o4.length ? b3.div({ text: o4.join(" "), padding: [0, 0, 0, 2], align: "right" }) : b3.div();
          }), b3.div();
        }
        const M3 = (Object.keys(l3.alias) || []).concat(Object.keys(t2.parsed.newAliases) || []);
        g2 = g2.filter((e3) => !t2.parsed.newAliases[e3] && M3.every((t3) => -1 === (l3.alias[t3] || []).indexOf(e3)));
        const _3 = i2("Options:");
        h3[_3] || (h3[_3] = []), function(t3, e3, s3, i3) {
          let n3 = [], r4 = null;
          Object.keys(s3).forEach((t4) => {
            n3 = n3.concat(s3[t4]);
          }), t3.forEach((t4) => {
            r4 = [t4].concat(e3[t4]), r4.some((t5) => -1 !== n3.indexOf(t5)) || s3[i3].push(t4);
          });
        }(g2, l3.alias, h3, _3);
        const k2 = (t3) => /^--/.test(I(t3)), x2 = Object.keys(h3).filter((t3) => h3[t3].length > 0).map((t3) => ({ groupName: t3, normalizedKeys: h3[t3].filter(C2).map((t4) => {
          if (M3.includes(t4)) return t4;
          for (let e3, s3 = 0; void 0 !== (e3 = M3[s3]); s3++) if ((l3.alias[e3] || []).includes(t4)) return e3;
          return t4;
        }) })).filter(({ normalizedKeys: t3 }) => t3.length > 0).map(({ groupName: t3, normalizedKeys: e3 }) => {
          const s3 = e3.reduce((e4, s4) => (e4[s4] = [s4].concat(l3.alias[s4] || []).map((e5) => t3 === n2.getPositionalGroupName() ? e5 : (/^[0-9]$/.test(e5) ? l3.boolean.includes(s4) ? "-" : "--" : e5.length > 1 ? "--" : "-") + e5).sort((t4, e5) => k2(t4) === k2(e5) ? 0 : k2(t4) ? 1 : -1).join(", "), e4), {});
          return { groupName: t3, normalizedKeys: e3, switches: s3 };
        });
        if (x2.filter(({ groupName: t3 }) => t3 !== n2.getPositionalGroupName()).some(({ normalizedKeys: t3, switches: e3 }) => !t3.every((t4) => k2(e3[t4]))) && x2.filter(({ groupName: t3 }) => t3 !== n2.getPositionalGroupName()).forEach(({ normalizedKeys: t3, switches: e3 }) => {
          t3.forEach((t4) => {
            var s3, i3;
            k2(e3[t4]) && (e3[t4] = (s3 = e3[t4], i3 = 4, S(s3) ? { text: s3.text, indentation: s3.indentation + i3 } : { text: s3, indentation: i3 }));
          });
        }), x2.forEach(({ groupName: e3, normalizedKeys: s3, switches: o4 }) => {
          b3.div(e3), s3.forEach((e4) => {
            const s4 = o4[e4];
            let h4 = p2[e4] || "", c3 = null;
            h4.includes(v2) && (h4 = i2(h4.substring(16))), l3.boolean.includes(e4) && (c3 = `[${i2("boolean")}]`), l3.count.includes(e4) && (c3 = `[${i2("count")}]`), l3.string.includes(e4) && (c3 = `[${i2("string")}]`), l3.normalize.includes(e4) && (c3 = `[${i2("string")}]`), l3.array.includes(e4) && (c3 = `[${i2("array")}]`), l3.number.includes(e4) && (c3 = `[${i2("number")}]`);
            const f3 = [e4 in a3 ? (d3 = a3[e4], "string" == typeof d3 ? `[${i2("deprecated: %s", d3)}]` : `[${i2("deprecated")}]`) : null, c3, e4 in r3 ? `[${i2("required")}]` : null, l3.choices && l3.choices[e4] ? `[${i2("choices:")} ${n2.stringifiedValues(l3.choices[e4])}]` : null, j2(l3.default[e4], l3.defaultDescription[e4])].filter(Boolean).join(" ");
            var d3;
            b3.span({ text: I(s4), padding: [0, 2, 0, 2 + $(s4)], width: O2(o4, y3) + 4 }, h4);
            const u3 = true === t2.getInternalMethods().getUsageConfiguration()["hide-types"];
            f3 && !u3 ? b3.div({ text: f3, padding: [0, 0, 0, 2], align: "right" }) : b3.div();
          }), b3.div();
        }), d2.length && (b3.div(i2("Examples:")), d2.forEach((t3) => {
          t3[0] = t3[0].replace(/\$0/g, e2);
        }), d2.forEach((t3) => {
          "" === t3[1] ? b3.div({ text: t3[0], padding: [0, 2, 0, 2] }) : b3.div({ text: t3[0], padding: [0, 2, 0, 2], width: O2(d2, y3) + 4 }, { text: t3[1] });
        }), b3.div()), m2.length > 0) {
          const t3 = m2.map((t4) => t4.replace(/\$0/g, e2)).join("\n");
          b3.div(`${t3}
`);
        }
        return b3.toString().replace(/\s*$/, "");
      }, n2.cacheHelpMessage = function() {
        w2 = this.help();
      }, n2.clearCachedHelpMessage = function() {
        w2 = void 0;
      }, n2.hasCachedHelpMessage = function() {
        return !!w2;
      }, n2.showHelp = (e2) => {
        const s3 = t2.getInternalMethods().getLoggerInstance();
        e2 || (e2 = "error");
        ("function" == typeof e2 ? e2 : s3[e2])(n2.help());
      }, n2.functionDescription = (t3) => ["(", t3.name ? s2.Parser.decamelize(t3.name, "-") : i2("generated-value"), ")"].join(""), n2.stringifiedValues = function(t3, e2) {
        let s3 = "";
        const i3 = e2 || ", ", n3 = [].concat(t3);
        return t3 && n3.length ? (n3.forEach((t4) => {
          s3.length && (s3 += i3), s3 += JSON.stringify(t4);
        }), s3) : s3;
      };
      let M2 = null;
      n2.version = (t3) => {
        M2 = t3;
      }, n2.showVersion = (e2) => {
        const s3 = t2.getInternalMethods().getLoggerInstance();
        e2 || (e2 = "error");
        ("function" == typeof e2 ? e2 : s3[e2])(M2);
      }, n2.reset = function(t3) {
        return o2 = null, l2 = false, c2 = [], f2 = false, m2 = [], d2 = [], u2 = [], p2 = g(p2, (e2) => !t3[e2]), n2;
      };
      const _2 = [];
      return n2.freeze = function() {
        _2.push({ failMessage: o2, failureOutput: l2, usages: c2, usageDisabled: f2, epilogs: m2, examples: d2, commands: u2, descriptions: p2 });
      }, n2.unfreeze = function(t3 = false) {
        const e2 = _2.pop();
        e2 && (t3 ? (p2 = { ...e2.descriptions, ...p2 }, u2 = [...e2.commands, ...u2], c2 = [...e2.usages, ...c2], d2 = [...e2.examples, ...d2], m2 = [...e2.epilogs, ...m2]) : { failMessage: o2, failureOutput: l2, usages: c2, usageDisabled: f2, epilogs: m2, examples: d2, commands: u2, descriptions: p2 } = e2);
      }, n2;
    }
    function S(t2) {
      return "object" == typeof t2;
    }
    function $(t2) {
      return S(t2) ? t2.indentation : 0;
    }
    function I(t2) {
      return S(t2) ? t2.text : t2;
    }
    var D = class {
      constructor(t2, e2, s2, i2) {
        var n2, r2, o2;
        this.yargs = t2, this.usage = e2, this.command = s2, this.shim = i2, this.completionKey = "get-yargs-completions", this.aliases = null, this.customCompletionFunction = null, this.indexAfterLastReset = 0, this.zshShell = null !== (o2 = (null === (n2 = this.shim.getEnv("SHELL")) || void 0 === n2 ? void 0 : n2.includes("zsh")) || (null === (r2 = this.shim.getEnv("ZSH_NAME")) || void 0 === r2 ? void 0 : r2.includes("zsh"))) && void 0 !== o2 && o2;
      }
      defaultCompletion(t2, e2, s2, i2) {
        const n2 = this.command.getCommandHandlers();
        for (let e3 = 0, s3 = t2.length; e3 < s3; ++e3) if (n2[t2[e3]] && n2[t2[e3]].builder) {
          const s4 = n2[t2[e3]].builder;
          if (x(s4)) {
            this.indexAfterLastReset = e3 + 1;
            const t3 = this.yargs.getInternalMethods().reset();
            return s4(t3, true), t3.argv;
          }
        }
        const r2 = [];
        this.commandCompletions(r2, t2, s2), this.optionCompletions(r2, t2, e2, s2), this.choicesFromOptionsCompletions(r2, t2, e2, s2), this.choicesFromPositionalsCompletions(r2, t2, e2, s2), i2(null, r2);
      }
      commandCompletions(t2, e2, s2) {
        const i2 = this.yargs.getInternalMethods().getContext().commands;
        s2.match(/^-/) || i2[i2.length - 1] === s2 || this.previousArgHasChoices(e2) || this.usage.getCommands().forEach((s3) => {
          const i3 = o(s3[0]).cmd;
          if (-1 === e2.indexOf(i3)) if (this.zshShell) {
            const e3 = s3[1] || "";
            t2.push(i3.replace(/:/g, "\\:") + ":" + e3);
          } else t2.push(i3);
        });
      }
      optionCompletions(t2, e2, s2, i2) {
        if ((i2.match(/^-/) || "" === i2 && 0 === t2.length) && !this.previousArgHasChoices(e2)) {
          const s3 = this.yargs.getOptions(), n2 = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [];
          Object.keys(s3.key).forEach((r2) => {
            const o2 = !!s3.configuration["boolean-negation"] && s3.boolean.includes(r2);
            n2.includes(r2) || s3.hiddenOptions.includes(r2) || this.argsContainKey(e2, r2, o2) || this.completeOptionKey(r2, t2, i2, o2 && !!s3.default[r2]);
          });
        }
      }
      choicesFromOptionsCompletions(t2, e2, s2, i2) {
        if (this.previousArgHasChoices(e2)) {
          const s3 = this.getPreviousArgChoices(e2);
          s3 && s3.length > 0 && t2.push(...s3.map((t3) => t3.replace(/:/g, "\\:")));
        }
      }
      choicesFromPositionalsCompletions(t2, e2, s2, i2) {
        if ("" === i2 && t2.length > 0 && this.previousArgHasChoices(e2)) return;
        const n2 = this.yargs.getGroups()[this.usage.getPositionalGroupName()] || [], r2 = Math.max(this.indexAfterLastReset, this.yargs.getInternalMethods().getContext().commands.length + 1), o2 = n2[s2._.length - r2 - 1];
        if (!o2) return;
        const a2 = this.yargs.getOptions().choices[o2] || [];
        for (const e3 of a2) e3.startsWith(i2) && t2.push(e3.replace(/:/g, "\\:"));
      }
      getPreviousArgChoices(t2) {
        if (t2.length < 1) return;
        let e2 = t2[t2.length - 1], s2 = "";
        if (!e2.startsWith("-") && t2.length > 1 && (s2 = e2, e2 = t2[t2.length - 2]), !e2.startsWith("-")) return;
        const i2 = e2.replace(/^-+/, ""), n2 = this.yargs.getOptions(), r2 = [i2, ...this.yargs.getAliases()[i2] || []];
        let o2;
        for (const t3 of r2) if (Object.prototype.hasOwnProperty.call(n2.key, t3) && Array.isArray(n2.choices[t3])) {
          o2 = n2.choices[t3];
          break;
        }
        return o2 ? o2.filter((t3) => !s2 || t3.startsWith(s2)) : void 0;
      }
      previousArgHasChoices(t2) {
        const e2 = this.getPreviousArgChoices(t2);
        return void 0 !== e2 && e2.length > 0;
      }
      argsContainKey(t2, e2, s2) {
        const i2 = (e3) => -1 !== t2.indexOf((/^[^0-9]$/.test(e3) ? "-" : "--") + e3);
        if (i2(e2)) return true;
        if (s2 && i2(`no-${e2}`)) return true;
        if (this.aliases) {
          for (const t3 of this.aliases[e2]) if (i2(t3)) return true;
        }
        return false;
      }
      completeOptionKey(t2, e2, s2, i2) {
        var n2, r2, o2, a2;
        let h2 = t2;
        if (this.zshShell) {
          const e3 = this.usage.getDescriptions(), s3 = null === (r2 = null === (n2 = null == this ? void 0 : this.aliases) || void 0 === n2 ? void 0 : n2[t2]) || void 0 === r2 ? void 0 : r2.find((t3) => {
            const s4 = e3[t3];
            return "string" == typeof s4 && s4.length > 0;
          }), i3 = s3 ? e3[s3] : void 0, l3 = null !== (a2 = null !== (o2 = e3[t2]) && void 0 !== o2 ? o2 : i3) && void 0 !== a2 ? a2 : "";
          h2 = `${t2.replace(/:/g, "\\:")}:${l3.replace("__yargsString__:", "").replace(/(\r\n|\n|\r)/gm, " ")}`;
        }
        const l2 = !/^--/.test(s2) && ((t3) => /^[^0-9]$/.test(t3))(t2) ? "-" : "--";
        e2.push(l2 + h2), i2 && e2.push(l2 + "no-" + h2);
      }
      customCompletion(t2, e2, s2, i2) {
        if (d(this.customCompletionFunction, null, this.shim), this.customCompletionFunction.length < 3) {
          const t3 = this.customCompletionFunction(s2, e2);
          return f(t3) ? t3.then((t4) => {
            this.shim.process.nextTick(() => {
              i2(null, t4);
            });
          }).catch((t4) => {
            this.shim.process.nextTick(() => {
              i2(t4, void 0);
            });
          }) : i2(null, t3);
        }
        return function(t3) {
          return t3.length > 3;
        }(this.customCompletionFunction) ? this.customCompletionFunction(s2, e2, (n2 = i2) => this.defaultCompletion(t2, e2, s2, n2), (t3) => {
          i2(null, t3);
        }) : this.customCompletionFunction(s2, e2, (t3) => {
          i2(null, t3);
        });
      }
      getCompletion(t2, e2) {
        const s2 = t2.length ? t2[t2.length - 1] : "", i2 = this.yargs.parse(t2, true), n2 = this.customCompletionFunction ? (i3) => this.customCompletion(t2, i3, s2, e2) : (i3) => this.defaultCompletion(t2, i3, s2, e2);
        return f(i2) ? i2.then(n2) : n2(i2);
      }
      generateCompletionScript(t2, e2) {
        let s2 = this.zshShell ? `#compdef {{app_name}}
###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.zshrc
#    or {{app_path}} {{completion_command}} >> ~/.zprofile on OSX.
#
_{{app_name}}_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" {{app_path}} --get-yargs-completions "\${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
` : '###-begin-{{app_name}}-completions-###\n#\n# yargs command completion script\n#\n# Installation: {{app_path}} {{completion_command}} >> ~/.bashrc\n#    or {{app_path}} {{completion_command}} >> ~/.bash_profile on OSX.\n#\n_{{app_name}}_yargs_completions()\n{\n    local cur_word args type_list\n\n    cur_word="${COMP_WORDS[COMP_CWORD]}"\n    args=("${COMP_WORDS[@]}")\n\n    # ask yargs to generate completions.\n    type_list=$({{app_path}} --get-yargs-completions "${args[@]}")\n\n    COMPREPLY=( $(compgen -W "${type_list}" -- ${cur_word}) )\n\n    # if no match was found, fall back to filename completion\n    if [ ${#COMPREPLY[@]} -eq 0 ]; then\n      COMPREPLY=()\n    fi\n\n    return 0\n}\ncomplete -o bashdefault -o default -F _{{app_name}}_yargs_completions {{app_name}}\n###-end-{{app_name}}-completions-###\n';
        const i2 = this.shim.path.basename(t2);
        return t2.match(/\.js$/) && (t2 = `./${t2}`), s2 = s2.replace(/{{app_name}}/g, i2), s2 = s2.replace(/{{completion_command}}/g, e2), s2.replace(/{{app_path}}/g, t2);
      }
      registerFunction(t2) {
        this.customCompletionFunction = t2;
      }
      setParsed(t2) {
        this.aliases = t2.aliases;
      }
    };
    function N(t2, e2) {
      if (0 === t2.length) return e2.length;
      if (0 === e2.length) return t2.length;
      const s2 = [];
      let i2, n2;
      for (i2 = 0; i2 <= e2.length; i2++) s2[i2] = [i2];
      for (n2 = 0; n2 <= t2.length; n2++) s2[0][n2] = n2;
      for (i2 = 1; i2 <= e2.length; i2++) for (n2 = 1; n2 <= t2.length; n2++) e2.charAt(i2 - 1) === t2.charAt(n2 - 1) ? s2[i2][n2] = s2[i2 - 1][n2 - 1] : i2 > 1 && n2 > 1 && e2.charAt(i2 - 2) === t2.charAt(n2 - 1) && e2.charAt(i2 - 1) === t2.charAt(n2 - 2) ? s2[i2][n2] = s2[i2 - 2][n2 - 2] + 1 : s2[i2][n2] = Math.min(s2[i2 - 1][n2 - 1] + 1, Math.min(s2[i2][n2 - 1] + 1, s2[i2 - 1][n2] + 1));
      return s2[e2.length][t2.length];
    }
    var H = ["$0", "--", "_"];
    var z;
    var W;
    var q;
    var U;
    var F;
    var L;
    var V;
    var G;
    var R;
    var T;
    var B;
    var Y;
    var K;
    var J;
    var Z;
    var X;
    var Q;
    var tt;
    var et;
    var st;
    var it;
    var nt;
    var rt;
    var ot;
    var at;
    var ht;
    var lt;
    var ct;
    var ft;
    var dt;
    var ut;
    var pt;
    var gt;
    var mt;
    var yt;
    var bt = Symbol("copyDoubleDash");
    var vt = Symbol("copyDoubleDash");
    var Ot = Symbol("deleteFromParserHintObject");
    var wt = Symbol("emitWarning");
    var Ct = Symbol("freeze");
    var jt = Symbol("getDollarZero");
    var Mt = Symbol("getParserConfiguration");
    var _t = Symbol("getUsageConfiguration");
    var kt = Symbol("guessLocale");
    var xt = Symbol("guessVersion");
    var Et = Symbol("parsePositionalNumbers");
    var At = Symbol("pkgUp");
    var Pt = Symbol("populateParserHintArray");
    var St = Symbol("populateParserHintSingleValueDictionary");
    var $t = Symbol("populateParserHintArrayDictionary");
    var It = Symbol("populateParserHintDictionary");
    var Dt = Symbol("sanitizeKey");
    var Nt = Symbol("setKey");
    var Ht = Symbol("unfreeze");
    var zt = Symbol("validateAsync");
    var Wt = Symbol("getCommandInstance");
    var qt = Symbol("getContext");
    var Ut = Symbol("getHasOutput");
    var Ft = Symbol("getLoggerInstance");
    var Lt = Symbol("getParseContext");
    var Vt = Symbol("getUsageInstance");
    var Gt = Symbol("getValidationInstance");
    var Rt = Symbol("hasParseCallback");
    var Tt = Symbol("isGlobalContext");
    var Bt = Symbol("postProcess");
    var Yt = Symbol("rebase");
    var Kt = Symbol("reset");
    var Jt = Symbol("runYargsParserAndExecuteCommands");
    var Zt = Symbol("runValidation");
    var Xt = Symbol("setHasOutput");
    var Qt = Symbol("kTrackManuallySetKeys");
    var te = class {
      constructor(t2 = [], e2, s2, i2) {
        this.customScriptName = false, this.parsed = false, z.set(this, void 0), W.set(this, void 0), q.set(this, { commands: [], fullCommands: [] }), U.set(this, null), F.set(this, null), L.set(this, "show-hidden"), V.set(this, null), G.set(this, true), R.set(this, {}), T.set(this, true), B.set(this, []), Y.set(this, void 0), K.set(this, {}), J.set(this, false), Z.set(this, null), X.set(this, true), Q.set(this, void 0), tt.set(this, ""), et.set(this, void 0), st.set(this, void 0), it.set(this, {}), nt.set(this, null), rt.set(this, null), ot.set(this, {}), at.set(this, {}), ht.set(this, void 0), lt.set(this, false), ct.set(this, void 0), ft.set(this, false), dt.set(this, false), ut.set(this, false), pt.set(this, void 0), gt.set(this, {}), mt.set(this, null), yt.set(this, void 0), O(this, ct, i2, "f"), O(this, ht, t2, "f"), O(this, W, e2, "f"), O(this, st, s2, "f"), O(this, Y, new w(this), "f"), this.$0 = this[jt](), this[Kt](), O(this, z, v(this, z, "f"), "f"), O(this, pt, v(this, pt, "f"), "f"), O(this, yt, v(this, yt, "f"), "f"), O(this, et, v(this, et, "f"), "f"), v(this, et, "f").showHiddenOpt = v(this, L, "f"), O(this, Q, this[vt](), "f");
      }
      addHelpOpt(t2, e2) {
        return h("[string|boolean] [string]", [t2, e2], arguments.length), v(this, Z, "f") && (this[Ot](v(this, Z, "f")), O(this, Z, null, "f")), false === t2 && void 0 === e2 || (O(this, Z, "string" == typeof t2 ? t2 : "help", "f"), this.boolean(v(this, Z, "f")), this.describe(v(this, Z, "f"), e2 || v(this, pt, "f").deferY18nLookup("Show help"))), this;
      }
      help(t2, e2) {
        return this.addHelpOpt(t2, e2);
      }
      addShowHiddenOpt(t2, e2) {
        if (h("[string|boolean] [string]", [t2, e2], arguments.length), false === t2 && void 0 === e2) return this;
        const s2 = "string" == typeof t2 ? t2 : v(this, L, "f");
        return this.boolean(s2), this.describe(s2, e2 || v(this, pt, "f").deferY18nLookup("Show hidden options")), v(this, et, "f").showHiddenOpt = s2, this;
      }
      showHidden(t2, e2) {
        return this.addShowHiddenOpt(t2, e2);
      }
      alias(t2, e2) {
        return h("<object|string|array> [string|array]", [t2, e2], arguments.length), this[$t](this.alias.bind(this), "alias", t2, e2), this;
      }
      array(t2) {
        return h("<array|string>", [t2], arguments.length), this[Pt]("array", t2), this[Qt](t2), this;
      }
      boolean(t2) {
        return h("<array|string>", [t2], arguments.length), this[Pt]("boolean", t2), this[Qt](t2), this;
      }
      check(t2, e2) {
        return h("<function> [boolean]", [t2, e2], arguments.length), this.middleware((e3, s2) => j(() => t2(e3, s2.getOptions()), (s3) => (s3 ? ("string" == typeof s3 || s3 instanceof Error) && v(this, pt, "f").fail(s3.toString(), s3) : v(this, pt, "f").fail(v(this, ct, "f").y18n.__("Argument check failed: %s", t2.toString())), e3), (t3) => (v(this, pt, "f").fail(t3.message ? t3.message : t3.toString(), t3), e3)), false, e2), this;
      }
      choices(t2, e2) {
        return h("<object|string|array> [string|array]", [t2, e2], arguments.length), this[$t](this.choices.bind(this), "choices", t2, e2), this;
      }
      coerce(t2, s2) {
        if (h("<object|string|array> [function]", [t2, s2], arguments.length), Array.isArray(t2)) {
          if (!s2) throw new e("coerce callback must be provided");
          for (const e2 of t2) this.coerce(e2, s2);
          return this;
        }
        if ("object" == typeof t2) {
          for (const e2 of Object.keys(t2)) this.coerce(e2, t2[e2]);
          return this;
        }
        if (!s2) throw new e("coerce callback must be provided");
        return v(this, et, "f").key[t2] = true, v(this, Y, "f").addCoerceMiddleware((i2, n2) => {
          let r2;
          return Object.prototype.hasOwnProperty.call(i2, t2) ? j(() => (r2 = n2.getAliases(), s2(i2[t2])), (e2) => {
            i2[t2] = e2;
            const s3 = n2.getInternalMethods().getParserConfiguration()["strip-aliased"];
            if (r2[t2] && true !== s3) for (const s4 of r2[t2]) i2[s4] = e2;
            return i2;
          }, (t3) => {
            throw new e(t3.message);
          }) : i2;
        }, t2), this;
      }
      conflicts(t2, e2) {
        return h("<string|object> [string|array]", [t2, e2], arguments.length), v(this, yt, "f").conflicts(t2, e2), this;
      }
      config(t2 = "config", e2, s2) {
        return h("[object|string] [string|function] [function]", [t2, e2, s2], arguments.length), "object" != typeof t2 || Array.isArray(t2) ? ("function" == typeof e2 && (s2 = e2, e2 = void 0), this.describe(t2, e2 || v(this, pt, "f").deferY18nLookup("Path to JSON config file")), (Array.isArray(t2) ? t2 : [t2]).forEach((t3) => {
          v(this, et, "f").config[t3] = s2 || true;
        }), this) : (t2 = n(t2, v(this, W, "f"), this[Mt]()["deep-merge-config"] || false, v(this, ct, "f")), v(this, et, "f").configObjects = (v(this, et, "f").configObjects || []).concat(t2), this);
      }
      completion(t2, e2, s2) {
        return h("[string] [string|boolean|function] [function]", [t2, e2, s2], arguments.length), "function" == typeof e2 && (s2 = e2, e2 = void 0), O(this, F, t2 || v(this, F, "f") || "completion", "f"), e2 || false === e2 || (e2 = "generate completion script"), this.command(v(this, F, "f"), e2), s2 && v(this, U, "f").registerFunction(s2), this;
      }
      command(t2, e2, s2, i2, n2, r2) {
        return h("<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]", [t2, e2, s2, i2, n2, r2], arguments.length), v(this, z, "f").addHandler(t2, e2, s2, i2, n2, r2), this;
      }
      commands(t2, e2, s2, i2, n2, r2) {
        return this.command(t2, e2, s2, i2, n2, r2);
      }
      commandDir(t2, e2) {
        h("<string> [object]", [t2, e2], arguments.length);
        const s2 = v(this, st, "f") || v(this, ct, "f").require;
        return v(this, z, "f").addDirectory(t2, s2, v(this, ct, "f").getCallerFile(), e2), this;
      }
      count(t2) {
        return h("<array|string>", [t2], arguments.length), this[Pt]("count", t2), this[Qt](t2), this;
      }
      default(t2, e2, s2) {
        return h("<object|string|array> [*] [string]", [t2, e2, s2], arguments.length), s2 && (u(t2, v(this, ct, "f")), v(this, et, "f").defaultDescription[t2] = s2), "function" == typeof e2 && (u(t2, v(this, ct, "f")), v(this, et, "f").defaultDescription[t2] || (v(this, et, "f").defaultDescription[t2] = v(this, pt, "f").functionDescription(e2)), e2 = e2.call()), this[St](this.default.bind(this), "default", t2, e2), this;
      }
      defaults(t2, e2, s2) {
        return this.default(t2, e2, s2);
      }
      demandCommand(t2 = 1, e2, s2, i2) {
        return h("[number] [number|string] [string|null|undefined] [string|null|undefined]", [t2, e2, s2, i2], arguments.length), "number" != typeof e2 && (s2 = e2, e2 = 1 / 0), this.global("_", false), v(this, et, "f").demandedCommands._ = { min: t2, max: e2, minMsg: s2, maxMsg: i2 }, this;
      }
      demand(t2, e2, s2) {
        return Array.isArray(e2) ? (e2.forEach((t3) => {
          d(s2, true, v(this, ct, "f")), this.demandOption(t3, s2);
        }), e2 = 1 / 0) : "number" != typeof e2 && (s2 = e2, e2 = 1 / 0), "number" == typeof t2 ? (d(s2, true, v(this, ct, "f")), this.demandCommand(t2, e2, s2, s2)) : Array.isArray(t2) ? t2.forEach((t3) => {
          d(s2, true, v(this, ct, "f")), this.demandOption(t3, s2);
        }) : "string" == typeof s2 ? this.demandOption(t2, s2) : true !== s2 && void 0 !== s2 || this.demandOption(t2), this;
      }
      demandOption(t2, e2) {
        return h("<object|string|array> [string]", [t2, e2], arguments.length), this[St](this.demandOption.bind(this), "demandedOptions", t2, e2), this;
      }
      deprecateOption(t2, e2) {
        return h("<string> [string|boolean]", [t2, e2], arguments.length), v(this, et, "f").deprecatedOptions[t2] = e2, this;
      }
      describe(t2, e2) {
        return h("<object|string|array> [string]", [t2, e2], arguments.length), this[Nt](t2, true), v(this, pt, "f").describe(t2, e2), this;
      }
      detectLocale(t2) {
        return h("<boolean>", [t2], arguments.length), O(this, G, t2, "f"), this;
      }
      env(t2) {
        return h("[string|boolean]", [t2], arguments.length), false === t2 ? delete v(this, et, "f").envPrefix : v(this, et, "f").envPrefix = t2 || "", this;
      }
      epilogue(t2) {
        return h("<string>", [t2], arguments.length), v(this, pt, "f").epilog(t2), this;
      }
      epilog(t2) {
        return this.epilogue(t2);
      }
      example(t2, e2) {
        return h("<string|array> [string]", [t2, e2], arguments.length), Array.isArray(t2) ? t2.forEach((t3) => this.example(...t3)) : v(this, pt, "f").example(t2, e2), this;
      }
      exit(t2, e2) {
        O(this, J, true, "f"), O(this, V, e2, "f"), v(this, T, "f") && v(this, ct, "f").process.exit(t2);
      }
      exitProcess(t2 = true) {
        return h("[boolean]", [t2], arguments.length), O(this, T, t2, "f"), this;
      }
      fail(t2) {
        if (h("<function|boolean>", [t2], arguments.length), "boolean" == typeof t2 && false !== t2) throw new e("Invalid first argument. Expected function or boolean 'false'");
        return v(this, pt, "f").failFn(t2), this;
      }
      getAliases() {
        return this.parsed ? this.parsed.aliases : {};
      }
      async getCompletion(t2, e2) {
        return h("<array> [function]", [t2, e2], arguments.length), e2 ? v(this, U, "f").getCompletion(t2, e2) : new Promise((e3, s2) => {
          v(this, U, "f").getCompletion(t2, (t3, i2) => {
            t3 ? s2(t3) : e3(i2);
          });
        });
      }
      getDemandedOptions() {
        return h([], 0), v(this, et, "f").demandedOptions;
      }
      getDemandedCommands() {
        return h([], 0), v(this, et, "f").demandedCommands;
      }
      getDeprecatedOptions() {
        return h([], 0), v(this, et, "f").deprecatedOptions;
      }
      getDetectLocale() {
        return v(this, G, "f");
      }
      getExitProcess() {
        return v(this, T, "f");
      }
      getGroups() {
        return Object.assign({}, v(this, K, "f"), v(this, at, "f"));
      }
      getHelp() {
        if (O(this, J, true, "f"), !v(this, pt, "f").hasCachedHelpMessage()) {
          if (!this.parsed) {
            const t3 = this[Jt](v(this, ht, "f"), void 0, void 0, 0, true);
            if (f(t3)) return t3.then(() => v(this, pt, "f").help());
          }
          const t2 = v(this, z, "f").runDefaultBuilderOn(this);
          if (f(t2)) return t2.then(() => v(this, pt, "f").help());
        }
        return Promise.resolve(v(this, pt, "f").help());
      }
      getOptions() {
        return v(this, et, "f");
      }
      getStrict() {
        return v(this, ft, "f");
      }
      getStrictCommands() {
        return v(this, dt, "f");
      }
      getStrictOptions() {
        return v(this, ut, "f");
      }
      global(t2, e2) {
        return h("<string|array> [boolean]", [t2, e2], arguments.length), t2 = [].concat(t2), false !== e2 ? v(this, et, "f").local = v(this, et, "f").local.filter((e3) => -1 === t2.indexOf(e3)) : t2.forEach((t3) => {
          v(this, et, "f").local.includes(t3) || v(this, et, "f").local.push(t3);
        }), this;
      }
      group(t2, e2) {
        h("<string|array> <string>", [t2, e2], arguments.length);
        const s2 = v(this, at, "f")[e2] || v(this, K, "f")[e2];
        v(this, at, "f")[e2] && delete v(this, at, "f")[e2];
        const i2 = {};
        return v(this, K, "f")[e2] = (s2 || []).concat(t2).filter((t3) => !i2[t3] && (i2[t3] = true)), this;
      }
      hide(t2) {
        return h("<string>", [t2], arguments.length), v(this, et, "f").hiddenOptions.push(t2), this;
      }
      implies(t2, e2) {
        return h("<string|object> [number|string|array]", [t2, e2], arguments.length), v(this, yt, "f").implies(t2, e2), this;
      }
      locale(t2) {
        return h("[string]", [t2], arguments.length), void 0 === t2 ? (this[kt](), v(this, ct, "f").y18n.getLocale()) : (O(this, G, false, "f"), v(this, ct, "f").y18n.setLocale(t2), this);
      }
      middleware(t2, e2, s2) {
        return v(this, Y, "f").addMiddleware(t2, !!e2, s2);
      }
      nargs(t2, e2) {
        return h("<string|object|array> [number]", [t2, e2], arguments.length), this[St](this.nargs.bind(this), "narg", t2, e2), this;
      }
      normalize(t2) {
        return h("<array|string>", [t2], arguments.length), this[Pt]("normalize", t2), this;
      }
      number(t2) {
        return h("<array|string>", [t2], arguments.length), this[Pt]("number", t2), this[Qt](t2), this;
      }
      option(t2, e2) {
        if (h("<string|object> [object]", [t2, e2], arguments.length), "object" == typeof t2) Object.keys(t2).forEach((e3) => {
          this.options(e3, t2[e3]);
        });
        else {
          "object" != typeof e2 && (e2 = {}), this[Qt](t2), !v(this, mt, "f") || "version" !== t2 && "version" !== (null == e2 ? void 0 : e2.alias) || this[wt](['"version" is a reserved word.', "Please do one of the following:", '- Disable version with `yargs.version(false)` if using "version" as an option', "- Use the built-in `yargs.version` method instead (if applicable)", "- Use a different option key", "https://yargs.js.org/docs/#api-reference-version"].join("\n"), void 0, "versionWarning"), v(this, et, "f").key[t2] = true, e2.alias && this.alias(t2, e2.alias);
          const s2 = e2.deprecate || e2.deprecated;
          s2 && this.deprecateOption(t2, s2);
          const i2 = e2.demand || e2.required || e2.require;
          i2 && this.demand(t2, i2), e2.demandOption && this.demandOption(t2, "string" == typeof e2.demandOption ? e2.demandOption : void 0), e2.conflicts && this.conflicts(t2, e2.conflicts), "default" in e2 && this.default(t2, e2.default), void 0 !== e2.implies && this.implies(t2, e2.implies), void 0 !== e2.nargs && this.nargs(t2, e2.nargs), e2.config && this.config(t2, e2.configParser), e2.normalize && this.normalize(t2), e2.choices && this.choices(t2, e2.choices), e2.coerce && this.coerce(t2, e2.coerce), e2.group && this.group(t2, e2.group), (e2.boolean || "boolean" === e2.type) && (this.boolean(t2), e2.alias && this.boolean(e2.alias)), (e2.array || "array" === e2.type) && (this.array(t2), e2.alias && this.array(e2.alias)), (e2.number || "number" === e2.type) && (this.number(t2), e2.alias && this.number(e2.alias)), (e2.string || "string" === e2.type) && (this.string(t2), e2.alias && this.string(e2.alias)), (e2.count || "count" === e2.type) && this.count(t2), "boolean" == typeof e2.global && this.global(t2, e2.global), e2.defaultDescription && (v(this, et, "f").defaultDescription[t2] = e2.defaultDescription), e2.skipValidation && this.skipValidation(t2);
          const n2 = e2.describe || e2.description || e2.desc, r2 = v(this, pt, "f").getDescriptions();
          Object.prototype.hasOwnProperty.call(r2, t2) && "string" != typeof n2 || this.describe(t2, n2), e2.hidden && this.hide(t2), e2.requiresArg && this.requiresArg(t2);
        }
        return this;
      }
      options(t2, e2) {
        return this.option(t2, e2);
      }
      parse(t2, e2, s2) {
        h("[string|array] [function|boolean|object] [function]", [t2, e2, s2], arguments.length), this[Ct](), void 0 === t2 && (t2 = v(this, ht, "f")), "object" == typeof e2 && (O(this, rt, e2, "f"), e2 = s2), "function" == typeof e2 && (O(this, nt, e2, "f"), e2 = false), e2 || O(this, ht, t2, "f"), v(this, nt, "f") && O(this, T, false, "f");
        const i2 = this[Jt](t2, !!e2), n2 = this.parsed;
        return v(this, U, "f").setParsed(this.parsed), f(i2) ? i2.then((t3) => (v(this, nt, "f") && v(this, nt, "f").call(this, v(this, V, "f"), t3, v(this, tt, "f")), t3)).catch((t3) => {
          throw v(this, nt, "f") && v(this, nt, "f")(t3, this.parsed.argv, v(this, tt, "f")), t3;
        }).finally(() => {
          this[Ht](), this.parsed = n2;
        }) : (v(this, nt, "f") && v(this, nt, "f").call(this, v(this, V, "f"), i2, v(this, tt, "f")), this[Ht](), this.parsed = n2, i2);
      }
      parseAsync(t2, e2, s2) {
        const i2 = this.parse(t2, e2, s2);
        return f(i2) ? i2 : Promise.resolve(i2);
      }
      parseSync(t2, s2, i2) {
        const n2 = this.parse(t2, s2, i2);
        if (f(n2)) throw new e(".parseSync() must not be used with asynchronous builders, handlers, or middleware");
        return n2;
      }
      parserConfiguration(t2) {
        return h("<object>", [t2], arguments.length), O(this, it, t2, "f"), this;
      }
      pkgConf(t2, e2) {
        h("<string> [string]", [t2, e2], arguments.length);
        let s2 = null;
        const i2 = this[At](e2 || v(this, W, "f"));
        return i2[t2] && "object" == typeof i2[t2] && (s2 = n(i2[t2], e2 || v(this, W, "f"), this[Mt]()["deep-merge-config"] || false, v(this, ct, "f")), v(this, et, "f").configObjects = (v(this, et, "f").configObjects || []).concat(s2)), this;
      }
      positional(t2, e2) {
        h("<string> <object>", [t2, e2], arguments.length);
        const s2 = ["default", "defaultDescription", "implies", "normalize", "choices", "conflicts", "coerce", "type", "describe", "desc", "description", "alias"];
        e2 = g(e2, (t3, e3) => !("type" === t3 && !["string", "number", "boolean"].includes(e3)) && s2.includes(t3));
        const i2 = v(this, q, "f").fullCommands[v(this, q, "f").fullCommands.length - 1], n2 = i2 ? v(this, z, "f").cmdToParseOptions(i2) : { array: [], alias: {}, default: {}, demand: {} };
        return p(n2).forEach((s3) => {
          const i3 = n2[s3];
          Array.isArray(i3) ? -1 !== i3.indexOf(t2) && (e2[s3] = true) : i3[t2] && !(s3 in e2) && (e2[s3] = i3[t2]);
        }), this.group(t2, v(this, pt, "f").getPositionalGroupName()), this.option(t2, e2);
      }
      recommendCommands(t2 = true) {
        return h("[boolean]", [t2], arguments.length), O(this, lt, t2, "f"), this;
      }
      required(t2, e2, s2) {
        return this.demand(t2, e2, s2);
      }
      require(t2, e2, s2) {
        return this.demand(t2, e2, s2);
      }
      requiresArg(t2) {
        return h("<array|string|object> [number]", [t2], arguments.length), "string" == typeof t2 && v(this, et, "f").narg[t2] || this[St](this.requiresArg.bind(this), "narg", t2, NaN), this;
      }
      showCompletionScript(t2, e2) {
        return h("[string] [string]", [t2, e2], arguments.length), t2 = t2 || this.$0, v(this, Q, "f").log(v(this, U, "f").generateCompletionScript(t2, e2 || v(this, F, "f") || "completion")), this;
      }
      showHelp(t2) {
        if (h("[string|function]", [t2], arguments.length), O(this, J, true, "f"), !v(this, pt, "f").hasCachedHelpMessage()) {
          if (!this.parsed) {
            const e3 = this[Jt](v(this, ht, "f"), void 0, void 0, 0, true);
            if (f(e3)) return e3.then(() => {
              v(this, pt, "f").showHelp(t2);
            }), this;
          }
          const e2 = v(this, z, "f").runDefaultBuilderOn(this);
          if (f(e2)) return e2.then(() => {
            v(this, pt, "f").showHelp(t2);
          }), this;
        }
        return v(this, pt, "f").showHelp(t2), this;
      }
      scriptName(t2) {
        return this.customScriptName = true, this.$0 = t2, this;
      }
      showHelpOnFail(t2, e2) {
        return h("[boolean|string] [string]", [t2, e2], arguments.length), v(this, pt, "f").showHelpOnFail(t2, e2), this;
      }
      showVersion(t2) {
        return h("[string|function]", [t2], arguments.length), v(this, pt, "f").showVersion(t2), this;
      }
      skipValidation(t2) {
        return h("<array|string>", [t2], arguments.length), this[Pt]("skipValidation", t2), this;
      }
      strict(t2) {
        return h("[boolean]", [t2], arguments.length), O(this, ft, false !== t2, "f"), this;
      }
      strictCommands(t2) {
        return h("[boolean]", [t2], arguments.length), O(this, dt, false !== t2, "f"), this;
      }
      strictOptions(t2) {
        return h("[boolean]", [t2], arguments.length), O(this, ut, false !== t2, "f"), this;
      }
      string(t2) {
        return h("<array|string>", [t2], arguments.length), this[Pt]("string", t2), this[Qt](t2), this;
      }
      terminalWidth() {
        return h([], 0), v(this, ct, "f").process.stdColumns;
      }
      updateLocale(t2) {
        return this.updateStrings(t2);
      }
      updateStrings(t2) {
        return h("<object>", [t2], arguments.length), O(this, G, false, "f"), v(this, ct, "f").y18n.updateLocale(t2), this;
      }
      usage(t2, s2, i2, n2) {
        if (h("<string|null|undefined> [string|boolean] [function|object] [function]", [t2, s2, i2, n2], arguments.length), void 0 !== s2) {
          if (d(t2, null, v(this, ct, "f")), (t2 || "").match(/^\$0( |$)/)) return this.command(t2, s2, i2, n2);
          throw new e(".usage() description must start with $0 if being used as alias for .command()");
        }
        return v(this, pt, "f").usage(t2), this;
      }
      usageConfiguration(t2) {
        return h("<object>", [t2], arguments.length), O(this, gt, t2, "f"), this;
      }
      version(t2, e2, s2) {
        const i2 = "version";
        if (h("[boolean|string] [string] [string]", [t2, e2, s2], arguments.length), v(this, mt, "f") && (this[Ot](v(this, mt, "f")), v(this, pt, "f").version(void 0), O(this, mt, null, "f")), 0 === arguments.length) s2 = this[xt](), t2 = i2;
        else if (1 === arguments.length) {
          if (false === t2) return this;
          s2 = t2, t2 = i2;
        } else 2 === arguments.length && (s2 = e2, e2 = void 0);
        return O(this, mt, "string" == typeof t2 ? t2 : i2, "f"), e2 = e2 || v(this, pt, "f").deferY18nLookup("Show version number"), v(this, pt, "f").version(s2 || void 0), this.boolean(v(this, mt, "f")), this.describe(v(this, mt, "f"), e2), this;
      }
      wrap(t2) {
        return h("<number|null|undefined>", [t2], arguments.length), v(this, pt, "f").wrap(t2), this;
      }
      [(z = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), q = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), F = /* @__PURE__ */ new WeakMap(), L = /* @__PURE__ */ new WeakMap(), V = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), bt)](t2) {
        if (!t2._ || !t2["--"]) return t2;
        t2._.push.apply(t2._, t2["--"]);
        try {
          delete t2["--"];
        } catch (t3) {
        }
        return t2;
      }
      [vt]() {
        return { log: (...t2) => {
          this[Rt]() || console.log(...t2), O(this, J, true, "f"), v(this, tt, "f").length && O(this, tt, v(this, tt, "f") + "\n", "f"), O(this, tt, v(this, tt, "f") + t2.join(" "), "f");
        }, error: (...t2) => {
          this[Rt]() || console.error(...t2), O(this, J, true, "f"), v(this, tt, "f").length && O(this, tt, v(this, tt, "f") + "\n", "f"), O(this, tt, v(this, tt, "f") + t2.join(" "), "f");
        } };
      }
      [Ot](t2) {
        p(v(this, et, "f")).forEach((e2) => {
          if ("configObjects" === e2) return;
          const s2 = v(this, et, "f")[e2];
          Array.isArray(s2) ? s2.includes(t2) && s2.splice(s2.indexOf(t2), 1) : "object" == typeof s2 && delete s2[t2];
        }), delete v(this, pt, "f").getDescriptions()[t2];
      }
      [wt](t2, e2, s2) {
        v(this, R, "f")[s2] || (v(this, ct, "f").process.emitWarning(t2, e2), v(this, R, "f")[s2] = true);
      }
      [Ct]() {
        v(this, B, "f").push({ options: v(this, et, "f"), configObjects: v(this, et, "f").configObjects.slice(0), exitProcess: v(this, T, "f"), groups: v(this, K, "f"), strict: v(this, ft, "f"), strictCommands: v(this, dt, "f"), strictOptions: v(this, ut, "f"), completionCommand: v(this, F, "f"), output: v(this, tt, "f"), exitError: v(this, V, "f"), hasOutput: v(this, J, "f"), parsed: this.parsed, parseFn: v(this, nt, "f"), parseContext: v(this, rt, "f") }), v(this, pt, "f").freeze(), v(this, yt, "f").freeze(), v(this, z, "f").freeze(), v(this, Y, "f").freeze();
      }
      [jt]() {
        let t2, e2 = "";
        return t2 = /\b(node|iojs|electron)(\.exe)?$/.test(v(this, ct, "f").process.argv()[0]) ? v(this, ct, "f").process.argv().slice(1, 2) : v(this, ct, "f").process.argv().slice(0, 1), e2 = t2.map((t3) => {
          const e3 = this[Yt](v(this, W, "f"), t3);
          return t3.match(/^(\/|([a-zA-Z]:)?\\)/) && e3.length < t3.length ? e3 : t3;
        }).join(" ").trim(), v(this, ct, "f").getEnv("_") && v(this, ct, "f").getProcessArgvBin() === v(this, ct, "f").getEnv("_") && (e2 = v(this, ct, "f").getEnv("_").replace(`${v(this, ct, "f").path.dirname(v(this, ct, "f").process.execPath())}/`, "")), e2;
      }
      [Mt]() {
        return v(this, it, "f");
      }
      [_t]() {
        return v(this, gt, "f");
      }
      [kt]() {
        if (!v(this, G, "f")) return;
        const t2 = v(this, ct, "f").getEnv("LC_ALL") || v(this, ct, "f").getEnv("LC_MESSAGES") || v(this, ct, "f").getEnv("LANG") || v(this, ct, "f").getEnv("LANGUAGE") || "en_US";
        this.locale(t2.replace(/[.:].*/, ""));
      }
      [xt]() {
        return this[At]().version || "unknown";
      }
      [Et](t2) {
        const e2 = t2["--"] ? t2["--"] : t2._;
        for (let t3, s2 = 0; void 0 !== (t3 = e2[s2]); s2++) v(this, ct, "f").Parser.looksLikeNumber(t3) && Number.isSafeInteger(Math.floor(parseFloat(`${t3}`))) && (e2[s2] = Number(t3));
        return t2;
      }
      [At](t2) {
        const e2 = t2 || "*";
        if (v(this, ot, "f")[e2]) return v(this, ot, "f")[e2];
        let s2 = {};
        try {
          let e3 = t2 || v(this, ct, "f").mainFilename;
          !t2 && v(this, ct, "f").path.extname(e3) && (e3 = v(this, ct, "f").path.dirname(e3));
          const i2 = v(this, ct, "f").findUp(e3, (t3, e4) => e4.includes("package.json") ? "package.json" : void 0);
          d(i2, void 0, v(this, ct, "f")), s2 = JSON.parse(v(this, ct, "f").readFileSync(i2, "utf8"));
        } catch (t3) {
        }
        return v(this, ot, "f")[e2] = s2 || {}, v(this, ot, "f")[e2];
      }
      [Pt](t2, e2) {
        (e2 = [].concat(e2)).forEach((e3) => {
          e3 = this[Dt](e3), v(this, et, "f")[t2].push(e3);
        });
      }
      [St](t2, e2, s2, i2) {
        this[It](t2, e2, s2, i2, (t3, e3, s3) => {
          v(this, et, "f")[t3][e3] = s3;
        });
      }
      [$t](t2, e2, s2, i2) {
        this[It](t2, e2, s2, i2, (t3, e3, s3) => {
          v(this, et, "f")[t3][e3] = (v(this, et, "f")[t3][e3] || []).concat(s3);
        });
      }
      [It](t2, e2, s2, i2, n2) {
        if (Array.isArray(s2)) s2.forEach((e3) => {
          t2(e3, i2);
        });
        else if (/* @__PURE__ */ ((t3) => "object" == typeof t3)(s2)) for (const e3 of p(s2)) t2(e3, s2[e3]);
        else n2(e2, this[Dt](s2), i2);
      }
      [Dt](t2) {
        return "__proto__" === t2 ? "___proto___" : t2;
      }
      [Nt](t2, e2) {
        return this[St](this[Nt].bind(this), "key", t2, e2), this;
      }
      [Ht]() {
        var t2, e2, s2, i2, n2, r2, o2, a2, h2, l2, c2, f2;
        const u2 = v(this, B, "f").pop();
        let p2;
        d(u2, void 0, v(this, ct, "f")), t2 = this, e2 = this, s2 = this, i2 = this, n2 = this, r2 = this, o2 = this, a2 = this, h2 = this, l2 = this, c2 = this, f2 = this, { options: { set value(e3) {
          O(t2, et, e3, "f");
        } }.value, configObjects: p2, exitProcess: { set value(t3) {
          O(e2, T, t3, "f");
        } }.value, groups: { set value(t3) {
          O(s2, K, t3, "f");
        } }.value, output: { set value(t3) {
          O(i2, tt, t3, "f");
        } }.value, exitError: { set value(t3) {
          O(n2, V, t3, "f");
        } }.value, hasOutput: { set value(t3) {
          O(r2, J, t3, "f");
        } }.value, parsed: this.parsed, strict: { set value(t3) {
          O(o2, ft, t3, "f");
        } }.value, strictCommands: { set value(t3) {
          O(a2, dt, t3, "f");
        } }.value, strictOptions: { set value(t3) {
          O(h2, ut, t3, "f");
        } }.value, completionCommand: { set value(t3) {
          O(l2, F, t3, "f");
        } }.value, parseFn: { set value(t3) {
          O(c2, nt, t3, "f");
        } }.value, parseContext: { set value(t3) {
          O(f2, rt, t3, "f");
        } }.value } = u2, v(this, et, "f").configObjects = p2, v(this, pt, "f").unfreeze(), v(this, yt, "f").unfreeze(), v(this, z, "f").unfreeze(), v(this, Y, "f").unfreeze();
      }
      [zt](t2, e2) {
        return j(e2, (e3) => (t2(e3), e3));
      }
      getInternalMethods() {
        return { getCommandInstance: this[Wt].bind(this), getContext: this[qt].bind(this), getHasOutput: this[Ut].bind(this), getLoggerInstance: this[Ft].bind(this), getParseContext: this[Lt].bind(this), getParserConfiguration: this[Mt].bind(this), getUsageConfiguration: this[_t].bind(this), getUsageInstance: this[Vt].bind(this), getValidationInstance: this[Gt].bind(this), hasParseCallback: this[Rt].bind(this), isGlobalContext: this[Tt].bind(this), postProcess: this[Bt].bind(this), reset: this[Kt].bind(this), runValidation: this[Zt].bind(this), runYargsParserAndExecuteCommands: this[Jt].bind(this), setHasOutput: this[Xt].bind(this) };
      }
      [Wt]() {
        return v(this, z, "f");
      }
      [qt]() {
        return v(this, q, "f");
      }
      [Ut]() {
        return v(this, J, "f");
      }
      [Ft]() {
        return v(this, Q, "f");
      }
      [Lt]() {
        return v(this, rt, "f") || {};
      }
      [Vt]() {
        return v(this, pt, "f");
      }
      [Gt]() {
        return v(this, yt, "f");
      }
      [Rt]() {
        return !!v(this, nt, "f");
      }
      [Tt]() {
        return v(this, X, "f");
      }
      [Bt](t2, e2, s2, i2) {
        if (s2) return t2;
        if (f(t2)) return t2;
        e2 || (t2 = this[bt](t2));
        return (this[Mt]()["parse-positional-numbers"] || void 0 === this[Mt]()["parse-positional-numbers"]) && (t2 = this[Et](t2)), i2 && (t2 = C(t2, this, v(this, Y, "f").getMiddleware(), false)), t2;
      }
      [Kt](t2 = {}) {
        O(this, et, v(this, et, "f") || {}, "f");
        const e2 = {};
        e2.local = v(this, et, "f").local || [], e2.configObjects = v(this, et, "f").configObjects || [];
        const s2 = {};
        e2.local.forEach((e3) => {
          s2[e3] = true, (t2[e3] || []).forEach((t3) => {
            s2[t3] = true;
          });
        }), Object.assign(v(this, at, "f"), Object.keys(v(this, K, "f")).reduce((t3, e3) => {
          const i2 = v(this, K, "f")[e3].filter((t4) => !(t4 in s2));
          return i2.length > 0 && (t3[e3] = i2), t3;
        }, {})), O(this, K, {}, "f");
        return ["array", "boolean", "string", "skipValidation", "count", "normalize", "number", "hiddenOptions"].forEach((t3) => {
          e2[t3] = (v(this, et, "f")[t3] || []).filter((t4) => !s2[t4]);
        }), ["narg", "key", "alias", "default", "defaultDescription", "config", "choices", "demandedOptions", "demandedCommands", "deprecatedOptions"].forEach((t3) => {
          e2[t3] = g(v(this, et, "f")[t3], (t4) => !s2[t4]);
        }), e2.envPrefix = v(this, et, "f").envPrefix, O(this, et, e2, "f"), O(this, pt, v(this, pt, "f") ? v(this, pt, "f").reset(s2) : P(this, v(this, ct, "f")), "f"), O(this, yt, v(this, yt, "f") ? v(this, yt, "f").reset(s2) : function(t3, e3, s3) {
          const i2 = s3.y18n.__, n2 = s3.y18n.__n, r2 = { nonOptionCount: function(s4) {
            const i3 = t3.getDemandedCommands(), r3 = s4._.length + (s4["--"] ? s4["--"].length : 0) - t3.getInternalMethods().getContext().commands.length;
            i3._ && (r3 < i3._.min || r3 > i3._.max) && (r3 < i3._.min ? void 0 !== i3._.minMsg ? e3.fail(i3._.minMsg ? i3._.minMsg.replace(/\$0/g, r3.toString()).replace(/\$1/, i3._.min.toString()) : null) : e3.fail(n2("Not enough non-option arguments: got %s, need at least %s", "Not enough non-option arguments: got %s, need at least %s", r3, r3.toString(), i3._.min.toString())) : r3 > i3._.max && (void 0 !== i3._.maxMsg ? e3.fail(i3._.maxMsg ? i3._.maxMsg.replace(/\$0/g, r3.toString()).replace(/\$1/, i3._.max.toString()) : null) : e3.fail(n2("Too many non-option arguments: got %s, maximum of %s", "Too many non-option arguments: got %s, maximum of %s", r3, r3.toString(), i3._.max.toString()))));
          }, positionalCount: function(t4, s4) {
            s4 < t4 && e3.fail(n2("Not enough non-option arguments: got %s, need at least %s", "Not enough non-option arguments: got %s, need at least %s", s4, s4 + "", t4 + ""));
          }, requiredArguments: function(t4, s4) {
            let i3 = null;
            for (const e4 of Object.keys(s4)) Object.prototype.hasOwnProperty.call(t4, e4) && void 0 !== t4[e4] || (i3 = i3 || {}, i3[e4] = s4[e4]);
            if (i3) {
              const t5 = [];
              for (const e4 of Object.keys(i3)) {
                const s6 = i3[e4];
                s6 && t5.indexOf(s6) < 0 && t5.push(s6);
              }
              const s5 = t5.length ? `
${t5.join("\n")}` : "";
              e3.fail(n2("Missing required argument: %s", "Missing required arguments: %s", Object.keys(i3).length, Object.keys(i3).join(", ") + s5));
            }
          }, unknownArguments: function(s4, i3, o3, a3, h2 = true) {
            var l3;
            const c3 = t3.getInternalMethods().getCommandInstance().getCommands(), f2 = [], d2 = t3.getInternalMethods().getContext();
            if (Object.keys(s4).forEach((e4) => {
              H.includes(e4) || Object.prototype.hasOwnProperty.call(o3, e4) || Object.prototype.hasOwnProperty.call(t3.getInternalMethods().getParseContext(), e4) || r2.isValidAndSomeAliasIsNotNew(e4, i3) || f2.push(e4);
            }), h2 && (d2.commands.length > 0 || c3.length > 0 || a3) && s4._.slice(d2.commands.length).forEach((t4) => {
              c3.includes("" + t4) || f2.push("" + t4);
            }), h2) {
              const e4 = (null === (l3 = t3.getDemandedCommands()._) || void 0 === l3 ? void 0 : l3.max) || 0, i4 = d2.commands.length + e4;
              i4 < s4._.length && s4._.slice(i4).forEach((t4) => {
                t4 = String(t4), d2.commands.includes(t4) || f2.includes(t4) || f2.push(t4);
              });
            }
            f2.length && e3.fail(n2("Unknown argument: %s", "Unknown arguments: %s", f2.length, f2.map((t4) => t4.trim() ? t4 : `"${t4}"`).join(", ")));
          }, unknownCommands: function(s4) {
            const i3 = t3.getInternalMethods().getCommandInstance().getCommands(), r3 = [], o3 = t3.getInternalMethods().getContext();
            return (o3.commands.length > 0 || i3.length > 0) && s4._.slice(o3.commands.length).forEach((t4) => {
              i3.includes("" + t4) || r3.push("" + t4);
            }), r3.length > 0 && (e3.fail(n2("Unknown command: %s", "Unknown commands: %s", r3.length, r3.join(", "))), true);
          }, isValidAndSomeAliasIsNotNew: function(e4, s4) {
            if (!Object.prototype.hasOwnProperty.call(s4, e4)) return false;
            const i3 = t3.parsed.newAliases;
            return [e4, ...s4[e4]].some((t4) => !Object.prototype.hasOwnProperty.call(i3, t4) || !i3[e4]);
          }, limitedChoices: function(s4) {
            const n3 = t3.getOptions(), r3 = {};
            if (!Object.keys(n3.choices).length) return;
            Object.keys(s4).forEach((t4) => {
              -1 === H.indexOf(t4) && Object.prototype.hasOwnProperty.call(n3.choices, t4) && [].concat(s4[t4]).forEach((e4) => {
                -1 === n3.choices[t4].indexOf(e4) && void 0 !== e4 && (r3[t4] = (r3[t4] || []).concat(e4));
              });
            });
            const o3 = Object.keys(r3);
            if (!o3.length) return;
            let a3 = i2("Invalid values:");
            o3.forEach((t4) => {
              a3 += `
  ${i2("Argument: %s, Given: %s, Choices: %s", t4, e3.stringifiedValues(r3[t4]), e3.stringifiedValues(n3.choices[t4]))}`;
            }), e3.fail(a3);
          } };
          let o2 = {};
          function a2(t4, e4) {
            const s4 = Number(e4);
            return "number" == typeof (e4 = isNaN(s4) ? e4 : s4) ? e4 = t4._.length >= e4 : e4.match(/^--no-.+/) ? (e4 = e4.match(/^--no-(.+)/)[1], e4 = !Object.prototype.hasOwnProperty.call(t4, e4)) : e4 = Object.prototype.hasOwnProperty.call(t4, e4), e4;
          }
          r2.implies = function(e4, i3) {
            h("<string|object> [array|number|string]", [e4, i3], arguments.length), "object" == typeof e4 ? Object.keys(e4).forEach((t4) => {
              r2.implies(t4, e4[t4]);
            }) : (t3.global(e4), o2[e4] || (o2[e4] = []), Array.isArray(i3) ? i3.forEach((t4) => r2.implies(e4, t4)) : (d(i3, void 0, s3), o2[e4].push(i3)));
          }, r2.getImplied = function() {
            return o2;
          }, r2.implications = function(t4) {
            const s4 = [];
            if (Object.keys(o2).forEach((e4) => {
              const i3 = e4;
              (o2[e4] || []).forEach((e5) => {
                let n3 = i3;
                const r3 = e5;
                n3 = a2(t4, n3), e5 = a2(t4, e5), n3 && !e5 && s4.push(` ${i3} -> ${r3}`);
              });
            }), s4.length) {
              let t5 = `${i2("Implications failed:")}
`;
              s4.forEach((e4) => {
                t5 += e4;
              }), e3.fail(t5);
            }
          };
          let l2 = {};
          r2.conflicts = function(e4, s4) {
            h("<string|object> [array|string]", [e4, s4], arguments.length), "object" == typeof e4 ? Object.keys(e4).forEach((t4) => {
              r2.conflicts(t4, e4[t4]);
            }) : (t3.global(e4), l2[e4] || (l2[e4] = []), Array.isArray(s4) ? s4.forEach((t4) => r2.conflicts(e4, t4)) : l2[e4].push(s4));
          }, r2.getConflicting = () => l2, r2.conflicting = function(n3) {
            Object.keys(n3).forEach((t4) => {
              l2[t4] && l2[t4].forEach((s4) => {
                s4 && void 0 !== n3[t4] && void 0 !== n3[s4] && e3.fail(i2("Arguments %s and %s are mutually exclusive", t4, s4));
              });
            }), t3.getInternalMethods().getParserConfiguration()["strip-dashed"] && Object.keys(l2).forEach((t4) => {
              l2[t4].forEach((r3) => {
                r3 && void 0 !== n3[s3.Parser.camelCase(t4)] && void 0 !== n3[s3.Parser.camelCase(r3)] && e3.fail(i2("Arguments %s and %s are mutually exclusive", t4, r3));
              });
            });
          }, r2.recommendCommands = function(t4, s4) {
            s4 = s4.sort((t5, e4) => e4.length - t5.length);
            let n3 = null, r3 = 1 / 0;
            for (let e4, i3 = 0; void 0 !== (e4 = s4[i3]); i3++) {
              const s5 = N(t4, e4);
              s5 <= 3 && s5 < r3 && (r3 = s5, n3 = e4);
            }
            n3 && e3.fail(i2("Did you mean %s?", n3));
          }, r2.reset = function(t4) {
            return o2 = g(o2, (e4) => !t4[e4]), l2 = g(l2, (e4) => !t4[e4]), r2;
          };
          const c2 = [];
          return r2.freeze = function() {
            c2.push({ implied: o2, conflicting: l2 });
          }, r2.unfreeze = function() {
            const t4 = c2.pop();
            d(t4, void 0, s3), { implied: o2, conflicting: l2 } = t4;
          }, r2;
        }(this, v(this, pt, "f"), v(this, ct, "f")), "f"), O(this, z, v(this, z, "f") ? v(this, z, "f").reset() : function(t3, e3, s3, i2) {
          return new _(t3, e3, s3, i2);
        }(v(this, pt, "f"), v(this, yt, "f"), v(this, Y, "f"), v(this, ct, "f")), "f"), v(this, U, "f") || O(this, U, function(t3, e3, s3, i2) {
          return new D(t3, e3, s3, i2);
        }(this, v(this, pt, "f"), v(this, z, "f"), v(this, ct, "f")), "f"), v(this, Y, "f").reset(), O(this, F, null, "f"), O(this, tt, "", "f"), O(this, V, null, "f"), O(this, J, false, "f"), this.parsed = false, this;
      }
      [Yt](t2, e2) {
        return v(this, ct, "f").path.relative(t2, e2);
      }
      [Jt](t2, s2, i2, n2 = 0, r2 = false) {
        let o2 = !!i2 || r2;
        t2 = t2 || v(this, ht, "f"), v(this, et, "f").__ = v(this, ct, "f").y18n.__, v(this, et, "f").configuration = this[Mt]();
        const a2 = !!v(this, et, "f").configuration["populate--"], h2 = Object.assign({}, v(this, et, "f").configuration, { "populate--": true }), l2 = v(this, ct, "f").Parser.detailed(t2, Object.assign({}, v(this, et, "f"), { configuration: { "parse-positional-numbers": false, ...h2 } })), c2 = Object.assign(l2.argv, v(this, rt, "f"));
        let d2;
        const u2 = l2.aliases;
        let p2 = false, g2 = false;
        Object.keys(c2).forEach((t3) => {
          t3 === v(this, Z, "f") && c2[t3] ? p2 = true : t3 === v(this, mt, "f") && c2[t3] && (g2 = true);
        }), c2.$0 = this.$0, this.parsed = l2, 0 === n2 && v(this, pt, "f").clearCachedHelpMessage();
        try {
          if (this[kt](), s2) return this[Bt](c2, a2, !!i2, false);
          if (v(this, Z, "f")) {
            [v(this, Z, "f")].concat(u2[v(this, Z, "f")] || []).filter((t3) => t3.length > 1).includes("" + c2._[c2._.length - 1]) && (c2._.pop(), p2 = true);
          }
          O(this, X, false, "f");
          const h3 = v(this, z, "f").getCommands(), m2 = v(this, U, "f").completionKey in c2, y2 = p2 || m2 || r2;
          if (c2._.length) {
            if (h3.length) {
              let t3;
              for (let e2, s3 = n2 || 0; void 0 !== c2._[s3]; s3++) {
                if (e2 = String(c2._[s3]), h3.includes(e2) && e2 !== v(this, F, "f")) {
                  const t4 = v(this, z, "f").runCommand(e2, this, l2, s3 + 1, r2, p2 || g2 || r2);
                  return this[Bt](t4, a2, !!i2, false);
                }
                if (!t3 && e2 !== v(this, F, "f")) {
                  t3 = e2;
                  break;
                }
              }
              !v(this, z, "f").hasDefaultCommand() && v(this, lt, "f") && t3 && !y2 && v(this, yt, "f").recommendCommands(t3, h3);
            }
            v(this, F, "f") && c2._.includes(v(this, F, "f")) && !m2 && (v(this, T, "f") && E(true), this.showCompletionScript(), this.exit(0));
          }
          if (v(this, z, "f").hasDefaultCommand() && !y2) {
            const t3 = v(this, z, "f").runCommand(null, this, l2, 0, r2, p2 || g2 || r2);
            return this[Bt](t3, a2, !!i2, false);
          }
          if (m2) {
            v(this, T, "f") && E(true);
            const s3 = (t2 = [].concat(t2)).slice(t2.indexOf(`--${v(this, U, "f").completionKey}`) + 1);
            return v(this, U, "f").getCompletion(s3, (t3, s4) => {
              if (t3) throw new e(t3.message);
              (s4 || []).forEach((t4) => {
                v(this, Q, "f").log(t4);
              }), this.exit(0);
            }), this[Bt](c2, !a2, !!i2, false);
          }
          if (v(this, J, "f") || (p2 ? (v(this, T, "f") && E(true), o2 = true, this.showHelp("log"), this.exit(0)) : g2 && (v(this, T, "f") && E(true), o2 = true, v(this, pt, "f").showVersion("log"), this.exit(0))), !o2 && v(this, et, "f").skipValidation.length > 0 && (o2 = Object.keys(c2).some((t3) => v(this, et, "f").skipValidation.indexOf(t3) >= 0 && true === c2[t3])), !o2) {
            if (l2.error) throw new e(l2.error.message);
            if (!m2) {
              const t3 = this[Zt](u2, {}, l2.error);
              i2 || (d2 = C(c2, this, v(this, Y, "f").getMiddleware(), true)), d2 = this[zt](t3, null != d2 ? d2 : c2), f(d2) && !i2 && (d2 = d2.then(() => C(c2, this, v(this, Y, "f").getMiddleware(), false)));
            }
          }
        } catch (t3) {
          if (!(t3 instanceof e)) throw t3;
          v(this, pt, "f").fail(t3.message, t3);
        }
        return this[Bt](null != d2 ? d2 : c2, a2, !!i2, true);
      }
      [Zt](t2, s2, i2, n2) {
        const r2 = { ...this.getDemandedOptions() };
        return (o2) => {
          if (i2) throw new e(i2.message);
          v(this, yt, "f").nonOptionCount(o2), v(this, yt, "f").requiredArguments(o2, r2);
          let a2 = false;
          v(this, dt, "f") && (a2 = v(this, yt, "f").unknownCommands(o2)), v(this, ft, "f") && !a2 ? v(this, yt, "f").unknownArguments(o2, t2, s2, !!n2) : v(this, ut, "f") && v(this, yt, "f").unknownArguments(o2, t2, {}, false, false), v(this, yt, "f").limitedChoices(o2), v(this, yt, "f").implications(o2), v(this, yt, "f").conflicting(o2);
        };
      }
      [Xt]() {
        O(this, J, true, "f");
      }
      [Qt](t2) {
        if ("string" == typeof t2) v(this, et, "f").key[t2] = true;
        else for (const e2 of t2) v(this, et, "f").key[e2] = true;
      }
    };
    var ee;
    var se;
    var { readFileSync: ie } = require("fs");
    var { inspect: ne } = require("util");
    var { resolve: re } = require("path");
    var oe = require_build();
    var ae = require_build2();
    var he;
    var le = { assert: { notStrictEqual: t.notStrictEqual, strictEqual: t.strictEqual }, cliui: require_build3(), findUp: require_sync(), getEnv: (t2) => process.env[t2], getCallerFile: require_get_caller_file(), getProcessArgvBin: y, inspect: ne, mainFilename: null !== (se = null === (ee = null === require || void 0 === require ? void 0 : require.main) || void 0 === ee ? void 0 : ee.filename) && void 0 !== se ? se : process.cwd(), Parser: ae, path: require("path"), process: { argv: () => process.argv, cwd: process.cwd, emitWarning: (t2, e2) => process.emitWarning(t2, e2), execPath: () => process.execPath, exit: (t2) => {
      process.exit(t2);
    }, nextTick: process.nextTick, stdColumns: void 0 !== process.stdout.columns ? process.stdout.columns : null }, readFileSync: ie, require, requireDirectory: require_require_directory(), stringWidth: require_string_width(), y18n: oe({ directory: re(__dirname, "../locales"), updateFiles: false }) };
    var ce = (null === (he = null === process || void 0 === process ? void 0 : process.env) || void 0 === he ? void 0 : he.YARGS_MIN_NODE_VERSION) ? Number(process.env.YARGS_MIN_NODE_VERSION) : 12;
    if (process && process.version) {
      if (Number(process.version.match(/v([^.]+)/)[1]) < ce) throw Error(`yargs supports a minimum Node.js version of ${ce}. Read our version support policy: https://github.com/yargs/yargs#supported-nodejs-versions`);
    }
    var fe = require_build2();
    var de;
    var ue = { applyExtends: n, cjsPlatformShim: le, Yargs: (de = le, (t2 = [], e2 = de.process.cwd(), s2) => {
      const i2 = new te(t2, e2, s2, de);
      return Object.defineProperty(i2, "argv", { get: () => i2.parse(), enumerable: true }), i2.help(), i2.version(), i2;
    }), argsert: h, isPromise: f, objFilter: g, parseCommand: o, Parser: fe, processArgv: b, YError: e };
    module2.exports = ue;
  }
});

// src/index.ts
var import_fs = __toESM(require("fs"));
var import_lodash = __toESM(require_lodash());
var import_os = require("os");

// node_modules/yargs/yargs.mjs
var import_build = __toESM(require_build4(), 1);
var { applyExtends, cjsPlatformShim, Parser, processArgv, Yargs } = import_build.default;
Yargs.applyExtends = (config, cwd, mergeExtends) => {
  return applyExtends(config, cwd, mergeExtends, cjsPlatformShim);
};
Yargs.hideBin = processArgv.hideBin;
Yargs.Parser = Parser;
var yargs_default = Yargs;

// src/index.ts
var argv = yargs_default(process.argv.slice(2)).options({
  sqlfolder: {
    type: "string",
    demandOption: "The path for the sql folder is required"
  },
  trackfile: {
    type: "string",
    demandOption: "The path for the sql track file is required"
  }
}).parseSync();
if (!import_fs.default.existsSync(argv.sqlfolder)) {
  console.error(`Make sure the sql folder exist`);
  process.exit(1);
}
if (!import_fs.default.existsSync(argv.trackfile)) {
  import_fs.default.writeFileSync(argv.trackfile, "", { encoding: "utf-8" });
}
var sqls = import_fs.default.readdirSync(argv.sqlfolder);
var tracked = import_fs.default.readFileSync(argv.trackfile, "utf-8").split(import_os.EOL);
var diff = (0, import_lodash.difference)(sqls, tracked);
if (diff.length === 0) {
  process.exit();
} else {
  console.error(
    `Make sure you have run the following sqls in your local database:${import_os.EOL}${(0, import_lodash.join)(
      (0, import_lodash.map)(diff, (d) => "- " + d),
      import_os.EOL
    )}`
  );
  process.exit(1);
}
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
