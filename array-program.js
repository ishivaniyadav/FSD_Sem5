Objects & Arrays

// Object
const user = {
  name: 'Shivani',
  age: 20,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

// Array
const colors = ['violet', 'indigo', 'magenta'];
// Array methods (ES6+)
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);
