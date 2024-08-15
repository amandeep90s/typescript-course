// Enums are a way to define a set of named constants i.e. a collection of related values that can be numeric or string values.
enum Role {
  ADMIN,
  TEACHER,
  STUDENT,
}

console.log(Role.ADMIN); // 0
// This pattern is resulting in a bidirectional mapping between the role names and their numeric values.
console.log(Role); // {0: 'ADMIN', 1: 'TEACHER', 2: 'STUDENT', ADMIN: 0, TEACHER: 1, STUDENT: 2}
console.log(Role[2]); // STUDENT

// We can also assign custom values to enum members.
enum Permission {
  READ = 10,
  WRITE = 20,
  VIEW = 30,
}
console.log(Permission.READ); // 10
console.log(Permission[20]); // WRITE
