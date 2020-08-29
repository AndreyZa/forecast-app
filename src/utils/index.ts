export const capitalizeFirstLetter = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

export const convertTimeNumbersToStr = (value: number): string =>
  value >= 10 ? String(value) : '0' + value;
