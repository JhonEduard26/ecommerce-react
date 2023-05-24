export const getTotal = ( products ) => {
  return products.reduce((acc, product) => acc + product.price, 0)
}