export default function moneyFilter(value) {
  return new Intl.NumberFormat('ru-RU', {}).format(value).replace(',', '.');
}
