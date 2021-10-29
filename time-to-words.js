// expecting numeric time to be in a format like '8:15' or '12:30'

// map numbers to words // ? needs to check for minutes vs hours
// 0 o' clock -> minutes
// 0 midnight -> hours
// one to nineteen
// 12 -> midday -> hours
// 15 -> quarter -> minutes
// twenty
// 30 -> half

// logic to check if
// to, past

// function to split and convert to numbers the components
// receives a hh:mm string returns [hours, minutes] number array

export function convertTimeToWords(numericTime) {
  // TODO: real code goes here!
  if (numericTime === '0:00') {
    return 'midnight';
  }

  return 'half past eight';
}
