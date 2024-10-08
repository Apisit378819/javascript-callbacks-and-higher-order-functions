//Exercise #2: At Least Five Function

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, operation) {
  if (operation(array) >= 5) {
    return "ผ่านเกณฑ์";
  } else {
    return "ไม่ผ่านเกณฑ์";
  }
}

function score(Roomparams) {
  let total = 0;
  for (let index = 0; index < Roomparams.length; index++) {
    if (Roomparams[index] > 70) {
      total++;
    }
  }

  return total;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, score);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, score);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, score);
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);

// Copy
// นักเรียนห้องที่ 1 ผ่านเกณฑ์ ✅
// นักเรียนห้องที่ 2 ไม่ผ่านเกณฑ์ ❌
// นักเรียนห้องที่ 3 ไม่ผ่านเกณฑ์ ❌
