import { Seq } from "immutable";

export default function printBestStudents(object) {
  const obj = Seq(object)
    .filter((student) => student.score > 70)
    .toJS();

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  Object.keys(obj).map((student) => {
    obj[student].firstName = capFirstLetter(obj[student].firstName);
    obj[student].lastName = capFirstLetter(obj[student].lastName);
    return obj[student];
  });

  console.log(obj);
}

