class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
const textStorage = new DataStorage<string>();
textStorage.addItem('Aman');
textStorage.addItem('Taran');
textStorage.removeItem('Aman');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const amanObj = { name: 'Aman' };
// objectStorage.addItem(amanObj);
// objectStorage.addItem({ name: 'Taran' });
// objectStorage.removeItem(amanObj);
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoall(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // Partial is a generic type that makes all properties of CourseGoal optional.
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Aman', 'Taran']; // Readonly is a generic type that makes the array readonly.
// names.push('Manu'); // This will not work because names is a readonly array.

const person: Readonly<{ name: string }> = { name: 'Aman' }; // Readonly is a generic type that makes the object readonly.
// person.name = 'Taran'; // This will not work because person is a readonly object.
