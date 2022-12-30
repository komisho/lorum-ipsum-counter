// const { loremIpsum } = require("lorem-ipsum");

// const checkForVowels = () => {
//     //my attempt using a for loop

//     //Generate 5 paragraphs of LipSum text
//     const passage = loremIpsum({
//         count: 5,
//         units: "paragraph",
//     });
//     const vowelsArr = ["a", "e", "i", "o", "u"];
//     const vowelsCountArr = [];

//     //iterate through the generated text to check for vowels, push them into an array, return the array (because why not), and console log the array + length of array
//     for (let vowel of passage) {
//         if (vowelsArr.includes(vowel)) {
//             vowelsCountArr.push(vowel);
//         }
//     }
//     console.log(vowelsCountArr);
//     console.log(vowelsCountArr.length);

//     //the answer google gave me that obviously is WAY simpler... using just to check against.
//     return passage.match(/[aeiou]/gi).length;
// };

//there are 9 vowels in this text
const lipSum = "Lorem ipsum dolor sit amet";
const vowelsArr = ["a", "e", "i", "o", "u"];
let vowelsCounter = 0;
let vowelsCounter2 = 0;

//first check using .includes method against an array

const checkForVowels = () => {
    //round 2! fight! no random text this time

    for (let vowel of lipSum) {
        if (vowelsArr.includes(vowel)) {
            vowelsCounter++;
        }
    }
    return vowelsCounter;
};

//second check using if statements instead of a string method

const checkForVowels2 = () => {
    //round 3? fight!

    for (let vowel of lipSum) {
        if (vowel === "a") {
            vowelsCounter2++;
        } else if (vowel === "e") {
            vowelsCounter2++;
        } else if (vowel === "i") {
            vowelsCounter2++;
        } else if (vowel === "o") {
            vowelsCounter2++;
        } else if (vowel === "u") {
            vowelsCounter2++;
        }
    }
    return vowelsCounter2;
};

console.log(checkForVowels());
console.log(checkForVowels2());
console.assert(vowelsCounter === 9, "Counter 1 total does not match!");
console.assert(vowelsCounter2 === 9, "Counter 2 total does not match!");
console.assert(vowelsCounter === vowelsCounter2, "Counters do not match!");
