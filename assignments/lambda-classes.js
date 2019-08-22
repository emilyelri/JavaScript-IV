// CODE here for your Lambda Classes

class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
    }
    speak() {
        return(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(person) {
        super(person);
        this.specialty = person.specialty;
        this.favLanguage = person.favLanguage;
        this.catchPhrase = person.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`
  }
}

class Student extends Person {
    constructor(person) {
        super(person);
        this.previousBackground = person.previousBackground;
        this.className = person.className;
        this.favSubjects = person.favSubjects;
  }
  listsSubjects() {
        this.favSubjects.array.forEach(element => {
            console.log(element);
        });
  }
  PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class TL extends Instructor {
    constructor(person) {
        super(person);
        this.gradClassName = person.gradClassName;
        this.favInstructor = person.favInstructor;
  }
  standUp(slackChannel) {
      return `${this.name} announces to ${slackChannel}, @channel study time!`;
  }
  debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}




console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
