const searchReplace = require('./index-START')

test('searchReplace is a function', () => {
    expect(typeof searchReplace).toEqual('function');
  });
  
  test('returns the new string with the chage value', () => {
    expect(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") ).toEqual("He is Sitting on the couch");
  });
  
//   test('returns the longet word in a lowercase string', () => {
//     expect(longestWord('the ultimate guide to js algorithms') ).toEqual('algorithms');
//   });
//   test('returns the longet word in an uppercase string', () => {
//     expect(longestWord('BUILDING FOR THE NEXT BILLION USERS') ).toEqual('BUILDING');
//   });