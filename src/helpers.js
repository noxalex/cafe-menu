export function formatPrice(kop) {
  return (kop / 100).toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB"
  });
}
