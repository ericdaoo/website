const WordFilters = [""]

export default WordFilters

// // https://stackoverflow.com/a/3561711/240443
// const reEscape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/, '\\$&');

// // needs to be done only once
// const badWords = ["shity","shitty"];
// const badWordsRE = new RegExp(badWords.map(reEscape).join('|'), 'g');

// // testing is quick and easy
// console.log(badWordsRE)
// console.log(badWordsRE.test('shit shitt adjflaj shitty'))
// // console.log("baddy bad baddered.".match(badWordsRE));
// // console.log("Nothing objectionable".search(badWordsRE)); 