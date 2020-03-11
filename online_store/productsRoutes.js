import hasProduct from '../middlewares/hasProduct';

export default (PRODUCTS, productsList, total) => {
  PRODUCTS.get('/', (req, res) => {
    const viewActive = Number(req.query.status) === 1;
    const activeProducts = viewActive
      ? productsList.filter(p => p.stock > 0)
      : productsList;
    res.json({ status: 'ok', result: activeProducts });
  });

  PRODUCTS.get('/:id', hasProduct(productsList), (req, res) => {
    res.json({ status: 'ok', result: req.product });
  });

  PRODUCTS.put('/:id', hasProduct(productsList), (req, res) => {
    req.product.stock--;
    total += req.product.value;
    console.log(total);
    res.json({ status: 'ok', result: req.product });
  });

  PRODUCTS.delete('/:id', hasProduct(productsList), (req, res) => {
    productsList = productsList.filter(p => p.id !== req.params.id);
    res.json({ status: 'ok', result: productsList });
  });
}