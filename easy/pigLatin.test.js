//  Topics

//  * modules
//  * strings

//  Pig Latin

// Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.

// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.

// Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.

// (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)

// See https://en.wikipedia.org/wiki/Pig_Latin for more details.

const pigLatin = require("./pigLatin.js");

describe('#translate', function () {
  it('translates a word beginning with a vowel', function () {
    s = pigLatin("apple");
    expect(s).toEqual('appleay');
  });

  it('translates a word beginning with a consonant', function () {
    s = pigLatin("banana");
    expect(s).toEqual("ananabay");
  });

  it('translates a word beginning with two consonants', function () {
    s = pigLatin("cherry");
    expect(s).toEqual('errychay');
  });

  it('translates two words', function () {
    s = pigLatin("eat pie");
    expect(s).toEqual('eatay iepay');
  });

  it('translates a word beginning with three consonants', function () {
    expect(pigLatin("three")).toEqual("eethray");
  });

  it('counts "sch" as a single phoneme', function () {
    s = pigLatin("school");
    expect(s).toEqual("oolschay");
  });

  it('counts "qu" as a single phoneme', function () {
    s = pigLatin("quiet");
    expect(s).toEqual("ietquay");
  });

  it('counts "qu" as a consonant even when its preceded by a consonant', function () {
    s = pigLatin("square");
    expect(s).toEqual("aresquay");
  });

  it('translates many words', function () {
    s = pigLatin("the quick brown fox");
    expect(s).toEqual("ethay ickquay ownbray oxfay");
  });

  it('handles non-vowels words', function () {
    s = pigLatin("rhythm");
    expect(s).toEqual("rhythm");
  });
});