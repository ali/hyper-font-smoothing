exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    termCSS: `
      ${config.termCSS || ''}
      @media 
      (-webkit-max-device-pixel-ratio: 1.3), 
      (max-resolution: 120dpi) { 
        x-screen {
          -webkit-font-smoothing: subpixel-antialiased !important;
        }
      }
    `
  })
}

