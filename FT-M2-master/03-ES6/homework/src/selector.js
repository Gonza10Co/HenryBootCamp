var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  //el argumento es la funcion true o false que llega en matchFunc

  if (matchFunc(startEl)) resultSet.push(startEl);
  for (var el of startEl.children)
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc,el))

  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector.includes('#')) return 'id';
  if (selector.includes('.')) {
    if (selector[0] === "." ) return 'class';
    else return 'tag.class';
  }
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (el) =>  `#${el.id}` === selector;

  } else if (selectorType === "class") {
    matchFunction = (el) => {
      for (let i = 0; i < el.classList.length; i++) {
        if (`.${el.classList[i]}` === selector) return true;
      }
      return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = (el) => {
      let miTag = el.tagName.toLowerCase();
      for (let i = 0; i < el.classList.length; i++) {
        if (`${miTag}.${el.classList[i]}` === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = (el) =>  el.tagName.toLowerCase() === selector;
  }
  return matchFunction;
};
//selector = 'body'
var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);//selectorMatchFunc es la funcion q retorna true o false
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;//elements es una array con los elementos del arbol
};

var elements = $('body')
