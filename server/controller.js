const model = require('./model.js')

module.exports = {
  getProducts: function (req, res) {
    model.getProducts((err, result) => {
      if (err) { res.status(404).json(err) }
      else { res.status(200).json(result); console.log(res.header) }
    })
  },
  getProductInfo: function (req, res) {
    model.getProductInfo(req.params.product_id, (err, result) => {
      if (err) { res.status(404).json(err) }
      else { res.status(200).json(result) }
    })
  },
  getStyles: function (req, res) {
    model.getStyles(req.params.product_id, (err, result) => {
      if (err) { res.status(404).json(err) }
      else { res.status(200).json(result) }
    })
  },
  getRelated: function (req, res) {
    model.getRelated(req.params.product_id, (err, result) => {
      if (err) { res.status(404).json(err) }
      else { res.status(200).json(result) }
    })
  }
}