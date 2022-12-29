const { loremIpsum } = require("lorem-ipsum");

const checkForVowels = () => {
    //my attempt using a for loop

    //Generate 5 paragraphs of LipSum text
    const passage = loremIpsum({
        count: 5,
        units: "paragraph",
    });
    const vowelsArr = ["a", "e", "i", "o", "u"];
    const vowelsCountArr = [];

    for (let vowel of passage) {
        if (vowelsArr.includes(vowel)) {
            vowelsCountArr.push(vowel);
        }
    }
    console.log(vowelsCountArr);
    console.log(vowelsCountArr.length);

    //the answer google gave me that obviously is WAY simpler...
    return passage.match(/[aeiou]/gi).length;
};

console.log(checkForVowels());
