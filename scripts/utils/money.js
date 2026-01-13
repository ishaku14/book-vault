export function formatPrice(price) {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  });

  return formatter.format(price);
}
