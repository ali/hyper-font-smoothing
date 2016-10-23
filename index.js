console && console.warn && console.warn('WARNING: Hyperterm plugin `hyperpixel-subpixel-antialiased` has been renamed to `hyper-font-smoothing`. Please install it instead. See https://github.com/ali/hyper-font-smoothing for more information.');

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

