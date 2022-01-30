class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  get name() {
    return this.name;
  }
}

const dog = new Dog("Pete", "white");
console.log(dog.name());
