/**
 * @param {{id: Number,firstName: String,location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @author Amr Mohamad <https://github.com/amrrmohamad>
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
