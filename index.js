exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    termCSS: `
      ${config.termCSS || ''}
      x-screen {
        -webkit-font-smoothing: subpixel-antialiased !important;
      }
    `
  })
}

