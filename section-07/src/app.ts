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
