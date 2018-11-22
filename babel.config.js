module.exports = (api) => {
  api.cache(true); // Bebel v7.1.2 require cache configuration
  return {
    presets: [
      ['@babel/env', {
        targets: {
          chrome: '41'
        },
        modules: false
      }],
      '@babel/preset-react'
    ]
  };
};
