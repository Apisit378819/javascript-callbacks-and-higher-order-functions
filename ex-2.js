//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  const student = operation(array)
  if (student >= 5) {
    return "ผ่านเกณฑ์ ✅"
  } else {
    return "ไม่ผ่านเกณฑ์ ❌"
  }
}

const Scores = (array) => {
  let chackScores = 0
  for (const Scores of array) {
    if (Scores > 70) {
      chackScores++
    }
  }
  return chackScores
}


const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];
console.log(Scores(studentScoresRoom1))
// Using `atLeastFive` function here



let scoreRoom1Result = atLeastFive(studentScoresRoom1, Scores);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, Scores);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, Scores);

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)
