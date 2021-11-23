const { Transformer } = require('@parcel/plugin')
const { hashString } = require('@parcel/hash');

module.exports = new Transformer({
  async transform({ asset }) {
    if (asset.type === 'svg') {
      const svgCode = await asset.getCode()
      const svgId = hashString(svgCode)
      const code = `export default "#${svgId}";`

      asset.type = 'js'
      asset.setCode(code)
      asset.meta.svgId = svgId
      asset.meta.type = 'svg-sprite'
    } else {
      console.warn("parcel-transformer-svg-sprite works only with .svg files")
    }

    return [asset]
  },
});
