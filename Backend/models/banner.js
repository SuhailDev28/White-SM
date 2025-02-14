const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    item_code: String,
    banner_img: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  const Banner = mongoose.model('Banner', bannerSchema);

  module.exports = Banner;