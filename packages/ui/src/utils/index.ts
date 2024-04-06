export const numberFormat = (number: string) => {
  const value = Number(number.replaceAll(',', ''));
  return value.toLocaleString('ko-KR');
};
