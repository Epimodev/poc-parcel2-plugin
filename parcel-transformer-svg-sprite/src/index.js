import { Transformer } from "@parcel/plugin";

export default new Transformer({
  async transform({ asset }) {
    console.log('CUSTOM PLUGIN ASSET', asset)
    return asset;
  },
});
