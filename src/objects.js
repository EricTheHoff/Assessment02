// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
function getNames(people) {
  let newArr = []
  for(const person of people) {
    newArr.push(person.firstName + ` ` + person.lastName)
  }
  return newArr
}

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring(person) {
  const { firstName, lastName, location } = person
  return firstName + ` ` + lastName
}

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
function getPeopleByLocation(people, location) {
  let newArr = []
  for(const person of people) {
    if(person.location === location) {
      newArr.push(person)
    }
  }
  return newArr
}

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {
  let newArr = phrase.split(` `)
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] === `excuse`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.excuse)
    } else if(newArr[i] === `sir`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.sir)
    } else if(newArr[i] === `is`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.is)
    } else if(newArr[i] === `restroom`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.restroom)
    } else if(newArr[i] === `student`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.student)
    } else if(newArr[i] === `friend`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.friend)
    } else if(newArr[i] === `restaurant`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.restaurant)
    } else if(newArr[i] === `your`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.your)
    } else if(newArr[i] === `are`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.are)
    } else if(newArr[i] === `my`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.my)
    } else if(newArr[i] === `hotel`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.hotel)
    } else if(newArr[i] === `hello`) {
      newArr.splice(i,1,EN_PIRATE_LOOKUP.hello)
    }
  }
  let arrString = newArr.toString()
  let newString = arrString.replaceAll(`,`,` `)
  return newString
}

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }
function wordCount(str) {
  let newObj = {}
  let newArr = str.split(` `)
  newArr.forEach((element) => {
    newObj[element] = newObj[element] ? ++newObj[element] : 1
  })
  //ternary condition is checking to see if the element exists in the object. If it does, increment its value by one. If it doesn't, set it's value to 1.
  return newObj
}

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  const {name, availability} = bug
  const {rarity, months} = availability
  for(let i = 0; i < months.length; i++) {
    if(months[i] === month) {
      return true
    }
  }
  return false
}

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {
  let newObj = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: []
}
 for(let i = 0; i < bugs.length; i++){
  if(bugs[i].availability.months.includes(1)) {
    newObj[`1`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(2)) {
    newObj[`2`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(3)) {
    newObj[`3`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(4)) {
    newObj[`4`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(5)) {
    newObj[`5`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(6)) {
    newObj[`6`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(7)) {
    newObj[`7`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(8)) {
    newObj[`8`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(9)) {
    newObj[`9`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(10)) {
    newObj[`10`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(11)) {
    newObj[`11`] += bugs[i].name + `, `
  } if(bugs[i].availability.months.includes(12)) {
    newObj[`12`] += bugs[i].name + `, `
  } 
}
  return newObj
}

//I believe the reason this is failing the test despite returning the correct bugs
//corresponding to the direct months is because my results aren't returning as an array.

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
