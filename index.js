const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // change each string to an array of words with .split(' ')
  // word.slice(1).toLowerCase()
  // word[0].toUpperCase() + word.slice(1).toLowerCase()
  // words.join() back into a string

  let words = tutorials.map(string => string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
  return words
}

console.log(titleCased(tutorials))



