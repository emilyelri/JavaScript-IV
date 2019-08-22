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
  adjustGrade(student) {
      let response = `Previous grade: ${student.grade}. Updated grade: `;
      let newGrade = student.grade + Math.floor((Math.random() * (201-student.grade) - 100));
        if (newGrade < 0) {newGrade = 0};
      response += `${newGrade}.`
      student.grade = newGrade;
      return response;
  }
}

class Student extends Person {
    constructor(person) {
        super(person);
        this.previousBackground = person.previousBackground;
        this.className = person.className;
        this.favSubjects = person.favSubjects;
        this.grade = person.grade;
  }
  listsSubjects() {
    return this.favSubjects.toString();
  }
  PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
  graduate() {
      if (this.grade >= 70) {
        return `${this.name} has graduated! Yay!`;
      } else {
          return `${this.name} has not graduated.`;
      }
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

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies.`
  });

  const emily = new Student({
    name: 'Emily',
    location: 'Manchester',
    age: 25,
    previousBackground: "some CS semesters",
    className: "web23",
    favSubjects: ["JS", "Python", "C#"],
    grade: 90
  });

  const susan = new TL({
    name: 'Susan',
    location: 'Anchorage',
    age: 29,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `It's study time!`,
    gradClassName: 'web15',
    favInstructor: 'Brit'
  });

console.log(fred.speak());
console.log(fred.demo("React"));
console.log(fred.grade(emily, "JavaScript VI"));
console.log(emily.speak());
console.log(emily.listsSubjects());
console.log(emily.PRAssignment("Constructors"));
console.log(emily.sprintChallenge("Advanced JavaScript"));
console.log(susan.speak());
console.log(susan.standUp("web23-susan"));
console.log(susan.debugsCode(emily, ".this"));
console.log('');
console.log('Stretch Goals:');
console.log('');
console.log(fred.adjustGrade(emily));
console.log(fred.adjustGrade(emily));
console.log(emily.graduate());