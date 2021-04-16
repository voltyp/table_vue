export default function dateFilter(value) {
  const date = new Date(value);
  return new Intl.DateTimeFormat('ru-RU').format(date);
}
