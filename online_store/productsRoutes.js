import products from "./products";

export default (PRODUCTS, productsList, total) => {
  PRODUCTS.get('/', (req, res) => {
    const viewActive = Number(req.query.status) === 1;
    const activeProducts = viewActive
      ? productsList.filter(p => p.stock > 0)
      : productsList;
    res.json({ status: 'ok', result: activeProducts });
  });

  PRODUCTS.get('/:id', (req, res) => {
    const product = productsList.find(p => p.id === req.params.id);
    if (product && product.stock > 0) {
      res.json({ status: 'ok', result: product });
    } else {
      //  res.json({ status: 'not_found', msg: 'product not found' });
      res.sendStatus(404);
    }
  });

  PRODUCTS.put('/:id', (req, res) => {
    const product = productsList.find(p => p.id === req.params.id);
    if (product && product.stock > 0) {
      product.stock--;
      total += product.value;
      console.log(total);
      res.json({ status: 'ok', result: product });
    } else {
      res.sendStatus(404);
    }
  });

  PRODUCTS.delete('/:id', (req, res) => {
    const product = productsList.find(p => p.id === req.params.id);
    if (product) {
      productsList = productsList.filter(p => p.id !== req.params.id);
      res.json({ status: 'ok', result: productsList });
    } else {
      res.sendStatus(404);
    }
  });
}