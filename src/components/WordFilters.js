const WordFilters = ["pizza"]

export default WordFilters

// https://stackoverflow.com/a/3561711/240443
const reEscape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

// needs to be done only once
const badWords = ["bad","",""];
const badWordsRE = new RegExp(badWords.map(reEscape).join('|'));

// testing is quick and easy
console.log("baddy bad baddered.".match(badWordsRE)); // "Mr.Burns"
console.log("Nothing objectionable".match(badWordsRE)); 

let badwords = ["pickle", "bad"]
    let description = "badpickle"
    let isInclude = badwords.some(word => description.includes(word));
    console.log(isInclude)