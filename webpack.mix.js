let mix = require('laravel-mix')

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/defer-images.js',
    'js/defer-images.min.js'
  )
} else {
  mix.js(
    'src/defer-images.js',
    'js/defer-images.js'
  )
}
