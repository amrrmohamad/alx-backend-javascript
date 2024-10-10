/**
 * @param {{id: Number, firstName: String, location: String
 * }[]} students - List of students.
 * @author Amr Mohamad <https://github.com/amrrmohamad/>
 * @returns none
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
