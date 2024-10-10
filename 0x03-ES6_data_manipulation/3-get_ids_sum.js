/**
 * @param {{id: Number,firstName: String,location: String
 * }[]} students - The list of students.
 * @author Amr Mohamad <https://github.com/amrrmohamad/>
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
