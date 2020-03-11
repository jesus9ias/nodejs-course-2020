
export default (productsList) => (req, res, next) => {
  const product = productsList.find(p => p.id === req.params.id);
  if (product && product.stock > 0) {
    req.product = product;
    next();
  } else {
    res.sendStatus(404);
  }
}