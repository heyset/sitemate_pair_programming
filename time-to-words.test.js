import { convertTimeToWords } from './time-to-words';

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles quarter to', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles quarter past', () => {
    const timeInWords = convertTimeToWords('5:15');
    expect(timeInWords).toBe('quarter past five');
  });

  it('Handles times between 20 and 30 minutes', () => {
    const timeInWords = convertTimeToWords('15:23');
    expect(timeInWords).toBe('twenty three past three');
  });

  it('Handles times between 10 and 20 minutes', () => {
    const timeInWords = convertTimeToWords('19:14');
    expect(timeInWords).toBe('fourteen past seven');
  });

  it('Handles o\'clock times', () => {
    const timeInWords = convertTimeToWords('15:00');
    expect(timeInWords).toBe('three o\'clock');
  });
});
