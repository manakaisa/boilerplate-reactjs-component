// JSX template literal (experimental)
window.jsx = (function () {
  let cache = new Map();
  
  return function (strings, ...values) {
    let jsx = '';
    strings.forEach((str, index) => {
      if (values[index] == null) {
        jsx += str;
      } else {
        jsx += str + `{values[${index}]}`;
      }
    });
    
    let code = '';
    if (cache.has(jsx)) {
      code = cache.get(jsx);
    } else {
      code = Babel.transform(jsx, { presets: ['react'] }).code;
      cache.set(jsx, code);
    }
    
    return eval(code);
  };
})();

// HTML to React (experimental)
// For "Include" component only
window.jsx._tranformHTML = (function () {
  let cache = new Map();
  
  return function (html, scopes) {
    let code = '';
    if (cache.has(html)) {
      code = cache.get(html);
    } else {
      code = Babel.transform(html, { presets: ['react'] }).code;
      cache.set(html, code);
    }
    
    let scopeVar = '';
    for (var prop in scopes) {
      scopeVar += `let ${prop} = scopes['${prop}'];`
    }
    
    return eval(scopeVar + code);
  };
})();
