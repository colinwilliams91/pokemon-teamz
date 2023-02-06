"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpoke_play_pen"] = self["webpackChunkpoke_play_pen"] || []).push([["client_src_components_pokedex_Pokedex_jsx"],{

/***/ "./client/src/components/pokedex/Cards.jsx":
/*!*************************************************!*\
  !*** ./client/src/components/pokedex/Cards.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mui/index.jsx */ \"./client/src/mui/index.jsx\");\n\n\n\n\n//moved 2 unsused style components to Styled.jsx - CardSect, PokeCard\n\nvar Cards = function Cards(_ref) {\n  var pokeCards = _ref.pokeCards,\n    changePokeCardDisplay = _ref.changePokeCardDisplay;\n  // const [cardToAdd, setCardToAdd] = useState({});\n\n  var addCard = function addCard(card) {\n    console.log(card);\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/deck', {\n      params: {\n        q: card\n      }\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    variant: \"contained\",\n    onClick: function onClick() {\n      return changePokeCardDisplay(false);\n    }\n  }, \"x\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, pokeCards.map(function (card) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Card, {\n      sx: {\n        maxWidth: 275\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", null, card.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n      component: \"img\",\n      image: card.images.small,\n      alt: \"\".concat(card.name, \" was not found!\")\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Button, {\n      variant: \"contained\",\n      onClick: function onClick() {\n        handleAddCard(card);\n      }\n    }, \"Add \", card.name, \" to Marketplace\")));\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cards);\n\n//# sourceURL=webpack://poke-play-pen/./client/src/components/pokedex/Cards.jsx?");

/***/ }),

/***/ "./client/src/components/pokedex/Poke.jsx":
/*!************************************************!*\
  !*** ./client/src/components/pokedex/Poke.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mui/index.jsx */ \"./client/src/mui/index.jsx\");\n/* harmony import */ var _Styled_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styled.jsx */ \"./client/src/components/Styled.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Poke = function Poke(_ref) {\n  var selectPoke = _ref.selectPoke,\n    getCards = _ref.getCards;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    pokedex = _useState2[0],\n    setPokedex = _useState2[1]; //array of pokemon to be rendered\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    //retrieve pokemon list and set pokedex state to that data\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api/pokedex').then(function (pokemon) {\n      setPokedex(pokemon.data);\n    })[\"catch\"](function (err) {\n      return console.log('Pokemon Request FAILED:', err);\n    });\n  }, []);\n  var sendUserId = function sendUserId(id) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/api/user/favpokemon/\".concat(id)).then(function (data) {\n      return data;\n    })[\"catch\"](function (err) {\n      return console.log('Error Favoriting Pokemon', err);\n    });\n  };\n  return pokedex.map(function (pokemon, id) {\n    id++;\n    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Styled_jsx__WEBPACK_IMPORTED_MODULE_3__.PokeEntry, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n      component: \"img\",\n      image: \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/\".concat(id, \".png\"),\n      alt: \"\".concat(pokemon.name, \" was not found!\")\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h4\", null, pokemon.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Button, {\n      variant: \"contained\",\n      onClick: function onClick() {\n        return sendUserId(id);\n      }\n    }, \"Add as Your Favorite\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_2__.Button, {\n      variant: \"contained\",\n      onClick: function onClick() {\n        return selectPoke(id);\n      }\n    }, \"View \", \"\".concat(pokemon.name, \"'s\"), \" Stats\"))));\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Poke);\n\n//# sourceURL=webpack://poke-play-pen/./client/src/components/pokedex/Poke.jsx?");

/***/ }),

/***/ "./client/src/components/pokedex/PokeInfo.jsx":
/*!****************************************************!*\
  !*** ./client/src/components/pokedex/PokeInfo.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mui/index.jsx */ \"./client/src/mui/index.jsx\");\n/* harmony import */ var _Styled_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styled.jsx */ \"./client/src/components/Styled.jsx\");\n\n\n\nvar PokeInfo = function PokeInfo(_ref) {\n  var selectedPoke = _ref.selectedPoke,\n    changePokeStatus = _ref.changePokeStatus,\n    selectedPokeId = _ref.selectedPokeId;\n  selectedPoke.name = selectedPoke.name.charAt(0).toUpperCase() + selectedPoke.name.slice(1);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_index_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    variant: \"contained\",\n    onClick: function onClick() {\n      return changePokeStatus(false);\n    }\n  }, \"x\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Styled_jsx__WEBPACK_IMPORTED_MODULE_2__.Contents, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, selectedPoke.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/\".concat(selectedPokeId, \".png\")\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, selectedPoke.types.map(function (pokemon) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, pokemon.type.name);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Abilities\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, selectedPoke.abilities.map(function (pokemon) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, pokemon.ability.name);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Stats\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, selectedPoke.stats.map(function (pokemon) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, pokemon.stat.name, \": \", pokemon.base_stat);\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeInfo);\n\n//pokemon name\n//pokemon image\n//pokemon type \n//pokemon abilities\n//pokemon stats - hp, attack, defense, special-attack, special-defense, speed\n\n//# sourceURL=webpack://poke-play-pen/./client/src/components/pokedex/PokeInfo.jsx?");

/***/ }),

/***/ "./client/src/components/pokedex/Pokedex.jsx":
/*!***************************************************!*\
  !*** ./client/src/components/pokedex/Pokedex.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Poke_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Poke.jsx */ \"./client/src/components/pokedex/Poke.jsx\");\n/* harmony import */ var _PokeInfo_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PokeInfo.jsx */ \"./client/src/components/pokedex/PokeInfo.jsx\");\n/* harmony import */ var _Cards_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cards.jsx */ \"./client/src/components/pokedex/Cards.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar Pokedex = function Pokedex() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),\n    _useState2 = _slicedToArray(_useState, 2),\n    selectedPoke = _useState2[0],\n    setSelectedPoke = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    pokeStatus = _useState4[0],\n    setPokeStatus = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n    _useState6 = _slicedToArray(_useState5, 2),\n    selectedPokeId = _useState6[0],\n    setSelectedPokeId = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n    _useState8 = _slicedToArray(_useState7, 2),\n    pokeCards = _useState8[0],\n    setPokeCards = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState10 = _slicedToArray(_useState9, 2),\n    pokeCardDisplay = _useState10[0],\n    setPokeCardDisplay = _useState10[1];\n\n  //select pokemon to render info\n  var selectPoke = function selectPoke(id) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/api/pokedex/\".concat(id)).then(function (pokemon) {\n      setSelectedPoke(pokemon.data);\n      setSelectedPokeId(id);\n      changePokeStatus(true);\n    })[\"catch\"](function (err) {\n      return console.log('Error Retrieving Pokemon', err);\n    });\n  };\n\n  //Get pokemon's cards\n  var getCards = function getCards(pokeName) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/api/pokedex/card/\".concat(pokeName)).then(function (pokemon) {\n      setPokeCards(pokemon.data.data);\n      changePokeCardDisplay(true);\n    })[\"catch\"](function (err) {\n      return console.log('Error Retrieving Pokemon Cards', err);\n    });\n  };\n\n  //change pokestatus view\n  var changePokeStatus = function changePokeStatus(bool) {\n    setPokeStatus(bool);\n  };\n  var changePokeCardDisplay = function changePokeCardDisplay(bool) {\n    setPokeCardDisplay(bool);\n  };\n  var renderView = function renderView() {\n    if (pokeStatus === true) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PokeInfo_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        selectedPoke: selectedPoke,\n        changePokeStatus: changePokeStatus,\n        selectedPokeId: selectedPokeId\n      });\n    } else if (pokeCardDisplay === true) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Cards_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        pokeCards: pokeCards,\n        changePokeCardDisplay: changePokeCardDisplay\n      });\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Poke_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        selectPoke: selectPoke,\n        getCards: getCards\n      });\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"The Pok\\xE9dex!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, renderView())));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokedex);\n\n//# sourceURL=webpack://poke-play-pen/./client/src/components/pokedex/Pokedex.jsx?");

/***/ })

}]);