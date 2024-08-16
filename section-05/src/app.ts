class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log("Total employees count is " + this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe();
accounting.addEmployees("Max");
accounting.addEmployees("Manu");
accounting.printEmployeesInformation();
