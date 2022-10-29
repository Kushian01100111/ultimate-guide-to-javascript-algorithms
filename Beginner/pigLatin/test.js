const piglatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof piglatin).toEqual('function');
});

test('works for words that start with a single consonant', () => {
  expect(piglatin('pig')).toEqual("igpay");
});

test('works for words that start with a consonant cluter', () => {
  expect(piglatin('glove')).toEqual("oveglay");
});

test('works for words that start with a vowel', () => {
  expect(piglatin('explain')).toEqual("explainway");
});

// test('returns the number of vowels found when string has mixed capitalization', () => {
//   expect(piglatin('Abcdegfizzjbhso')).toEqual(4);
// });
