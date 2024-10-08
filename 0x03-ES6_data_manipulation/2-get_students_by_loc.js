export default function getStudentsByLocation(students, searchLocation) {
  return students.filter(({ location }) => location === searchLocation);
}
