window.jsx = (function () {
  let cache = new Map();
  
  return function (strings, ...values) {
    let jsxTemplate = '';
    strings.forEach((str, index) => {
      if (values[index] == null) {
        jsxTemplate += str;
      } else {
        jsxTemplate += str + `{values[${index}]}`;
      }
    });
    
    let code = null;
    if (cache.has(jsxTemplate)) {
      code = cache.get(jsxTemplate);
    } else {
      code = Babel.transform(jsxTemplate, { presets: ['react'] }).code;
      cache.set(jsxTemplate, code);
    }
    
    return eval(code);
  };
})();
