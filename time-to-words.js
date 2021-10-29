// expecting numeric time to be in a format like '8:15' or '12:30'

function getHourDescriptionFromNumeric(numericValue) {
  const hours = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'midday', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven'];

  if (numericValue === 0 || numericValue === 24) {
    return hours[numericValue];
  }

  return hours[numericValue];
}

function getMinuteDescriptionFromNumeric(numericValue) {
  const minutes = ['o\'clock', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
  'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];

  const parsedNumericValue = numericValue > 30 ? (30 + (30 - numericValue)) : numericValue;

  return minutes[parsedNumericValue];
}

function getRelativeDescription(minutes) {
  if (minutes === 0) {
    return '';
  } else if (minutes > 30) {
    return ' to ';
  } else {
    return ' past ';
  }
}

function getNumericalComponents(timeString) {
  const [hours, minutes] = timeString.split(':');

  return [parseInt(hours), parseInt(minutes)];
}

export function convertTimeToWords(timeString) {
  const [hours, minutes] = getNumericalComponents(timeString);

  if (hours === 0 && minutes === 0) {
    return 'midnight';
  }

  if (hours === 12 && minutes === 0) {
    return 'midday';
  }

  const parsedHours = minutes > 30 ? hours + 1 : hours;
  const hourString = getHourDescriptionFromNumeric(parsedHours);
  const relativeDescription = getRelativeDescription(minutes);
  const minuteString = getMinuteDescriptionFromNumeric(minutes);

  return minuteString + relativeDescription + hourString;
}
