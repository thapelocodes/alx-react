import { Seq } from 'immutable';

export default function printBestStudents(object) {
  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(
    Seq(object)
      .filter((student) => student.score > 70)
      .map((student) => {
        return {
          ...student,
          firstName: capFirstLetter(student.firstName),
          lastName: capFirstLetter(student.lastName),
        };
      })
      .toJS()
  );
}
