const { Packager } = require('@parcel/plugin')
const HTMLPackager = require('@parcel/packager-html')
const fs = require('fs/promises')

const CONFIG = Symbol.for('parcel-plugin-config');
const packager = HTMLPackager.default[CONFIG]

async function generateSvgSymbol(id, path) {
  let svg = await fs.readFile(path, { encoding: 'utf-8' })
  svg = svg.replace('xmlns="http://www.w3.org/2000/svg"', '')
  svg = svg.replace(/xml:space="\w+"/, '')
  svg = svg.replace('<svg', `<symbol id="${id}"`)
  svg = svg.replace('</svg', '</symbol')
  return svg
}

async function generateSprite(svgs) {
  const svgStart = '<svg aria-hidden="true" width="0" height="0" style="position:absolute">'
  const svgEnd = '</svg>'
  const symbols = await Promise.all(Object.entries(svgs).map(([id, path]) => generateSvgSymbol(id, path)))
  return `${svgStart}${symbols}${svgEnd}`
}

module.exports = new Packager({
  loadConfig: packager.loadConfig,
  async package(args) {
    const { bundleGraph } = args

    // Collect SVGs
    const svgs = {}
    bundleGraph.getBundles().forEach(bundle => {
      bundle.traverseAssets(asset => {
        if (asset.meta.type === 'svg-sprite') {
          svgs[asset.meta.svgId] = asset.filePath
        }
      })
    })

    let contents = (await packager.package(args)).contents
    const svgSprite = await generateSprite(svgs)
    contents = contents.replace('<body>', `<body>${svgSprite}`)

    return {
      contents: contents
    }
  }
});
