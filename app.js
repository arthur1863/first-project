class User {
  constructor(name, age, job) {
    (this.name = name), (this.age = age), (this.job = job);
  }

  sayHi() {
    alert(`${this.name} says hi and he is ${this.age} years old`);
  }

  sayJob() {
    alert(`${this.name} workd as ${this.job}`);
  }
}

const user1 = new User("hamza baitiche", 30, "web developer");

console.log(Object.getOwnPropertyNames(User.prototype));
