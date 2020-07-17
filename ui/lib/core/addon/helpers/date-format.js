import { helper } from '@ember/component/helper';
import formatDate from 'date-fns/format';

export function dateFormat([date, format]) {
  let d = date;
  let f = format || 'dd MMM yyyy';

  if (typeof date === 'string') {
    // try to parse string assuming ISO format
    d = parseISO(date);

    // if that resulted in invalid date, try with new Date()
    if (!d.getTime()) {
      d = new Date(date);
    }

    // if that also failed, return just passed date string;
    if (!d.getTime()) {
      return date;
    }
  }

  try {
    // expects date obj or number only
    return formatDate(d, f);
  } catch (e) {
    console.log(e);
    return '';
  }
}

export default helper(dateFormat);
