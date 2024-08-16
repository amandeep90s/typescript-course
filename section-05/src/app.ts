class Department {
  private employees: string[] = [];

  constructor(
    private id: string,
    public name: string,
  ) {}

  describe() {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log("Total employees count is " + this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("A1", "Accounting");
accounting.describe();
accounting.addEmployees("Max");
accounting.addEmployees("Manu");
accounting.printEmployeesInformation();
