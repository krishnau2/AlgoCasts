// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(string) {
  return string
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

// function generateCharMap(string) {
//   const charMap = {};
//   for (let ch of string.replace(/[^\w]/g, "").toLowerCase()) {
//     if (charMap[ch]) {
//       charMap[ch] = charMap[ch] + 1;
//     } else {
//       charMap[ch] = 1;
//     }
//   }
//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const stringAMap = generateCharMap(stringA);
//   const stringBMap = generateCharMap(stringB);

//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//     return false;
//   }

//   for (let element in stringAMap) {
//     if (stringAMap[element] !== stringBMap[element]) {
//       return false;
//     }
//   }

//   return true;
// }
