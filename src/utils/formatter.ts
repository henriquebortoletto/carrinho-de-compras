type currencyType = "currency" | "decimal";

export function formatPrice(price: number, style: currencyType = "currency") {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    currency: "BRL",
    style,
  }).format(price);
}
