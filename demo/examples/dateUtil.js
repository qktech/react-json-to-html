export const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

export function pad(n) {
  return n < 10 ? '0' + n : n;
}

/**
 * Format as YYYY-MM-DD
 * @param {value} value to format
 */
export function formatShortDate(value) {
  return (
    value.getFullYear() +
    '-' +
    value.getMonth() +
    1 +
    '-' +
    pad(value.getDate())
  );
}

