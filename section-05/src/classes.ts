// We can use abstract class to define a blueprint for other classes
// We can't create an instance of an abstract class
abstract class Department {
  protected employees: string[] = []; // protected: can be accessed by child classes

  constructor(
    protected readonly id: string, // private: can't be accessed outside the class
    public name: string, // public: can be accessed outside the class (default)
  ) {}

  abstract describe(this: Department): void;

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log("Total employees count is " + this.employees.length);
    console.log(this.employees);
  }
}

// Inheritance
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Department ID: " + this.id);
  }
}

const it = new ITDepartment("A1", ["Aman", "Babbu"]);
it.describe();
// it.addEmployees("Aman");
// it.addEmployees("Manu");
// it.printEmployeesInformation();
// console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;

  // Static property can be accessed without creating an instance of the class
  static FiscalYear = 2020;

  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please provide a valid value");
    }
    this.addReport(value);
  }

  // private constructor is used to make sure that we can't create an instance of the class
  // from outside the class
  private constructor(
    id: string,
    public reports: string[],
  ) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // Singleton pattern: It ensures that we have only one instance of the class
  // and provides a global point of access to it
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("A2", []);
    return this.instance;
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Aman") {
      return;
    }
    this.employees.push(name);
  }
  // Static method can be accessed without creating an instance of the class
  static createEmployee(name: string) {
    return { name, year: this.FiscalYear };
  }

  describe() {
    console.log(`Accounting Department ID: ${this.id}`);
  }
}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
// Getter method
// console.log(accounting.mostRecentReport);
// Setter method
accounting.mostRecentReport = "Report 4";
accounting.describe();
// accounting.addReport("Report 3");
// accounting.printReports();
// accounting.addEmployee("Aman");
// accounting.addEmployee("Manu");
// accounting.printEmployeesInformation();
// console.log(AccountingDepartment.createEmployee("Amandeep"));
