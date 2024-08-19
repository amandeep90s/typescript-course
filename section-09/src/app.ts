class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input",
    ) as HTMLTemplateElement; // type casting
    this.hostElement = document.getElementById("app") as HTMLDivElement; // type casting
    const importedNode = document.importNode(
      this.templateElement.content,
      true,
    );
    this.element = importedNode.firstElementChild as HTMLFormElement; // type casting
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title",
    ) as HTMLInputElement; // type casting
    this.descriptionInputElement = this.element.querySelector(
      "#description",
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people",
    ) as HTMLInputElement;
    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
