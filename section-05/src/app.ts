class Department {
  protected employees: string[] = []; // protected: can be accessed by child classes

  constructor(
    private readonly id: string, // private: can't be accessed outside the class
    public name: string, // public: can be accessed outside the class (default)
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

// Inheritance
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("A1", ["Aman", "Babbu"]);
it.describe();
it.addEmployees("Aman");
it.addEmployees("Manu");
it.printEmployeesInformation();
console.log(it);

class AccountingDepartment extends Department {
  private lastReport: string;

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

  constructor(
    id: string,
    public reports: string[],
  ) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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
}

const accounting = new AccountingDepartment("A2", ["Report 1", "Report 2"]);
// Getter method
console.log(accounting.mostRecentReport);
// Setter method
accounting.mostRecentReport = "Report 4";
accounting.describe();
accounting.addReport("Report 3");
accounting.printReports();
accounting.addEmployee("Aman");
accounting.addEmployee("Manu");
accounting.printEmployeesInformation();
