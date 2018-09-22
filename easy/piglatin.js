/*
Pig Latin is a children's language that is intended to be confusing when spoken quickly. Your job for this exercise is to create a solution that takes the words given and
turns them into pig latin. Please see the following wikipedia page for details regarding the rules of Pig Latin:

https://en.wikipedia.org/wiki/Pig_Latin

The rules section will give the rules and the examples that are required to complete this exercise.
*/

const translateWord = word => {
  const vowels = "a,e,i,o,u".split(",");

  let firstVowelIdx;
  let result = "";

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word[i].toLowerCase() === vowels[j]) {
        firstVowelIdx = i;
        break;
      }
    }
    if (typeof firstVowelIdx == "number") break; // cat do this: if (firstVowelIdx), because if the value is zero, it will be falsy in JavaScript;
  }


  if (firstVowelIdx == undefined) {
    result = word;
    return result;
  } else if (word.includes('qu')) {
    // 'qu' case
    const quIdx = word.indexOf('qu');
    result = word.slice(quIdx + 2) + word.slice(0, quIdx + 2) + 'ay';
    return result;
  } else if (firstVowelIdx === 0) {
    // Beginning with a vowel
    result = word + "ay";
    return result;
  } else {
    const starting = word.slice(firstVowelIdx);
    const ending = word.slice(0, firstVowelIdx) + "ay";
    result = starting + ending;
    return result;
  }
};

const pigLatin = str => {
  return str.split(' ').map(word => translateWord(word)).join(' ');
};

module.exports = pigLatin;