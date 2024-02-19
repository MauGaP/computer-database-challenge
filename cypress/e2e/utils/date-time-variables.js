import moment from 'moment';

export function createTodaysDate() {
  const date = moment();
  return date.format('YYYY-MM-DD');
}

export function createNextYearDate() {
  const date = moment().add(1, 'year');
  return date.format('YYYY-MM-DD');
}
