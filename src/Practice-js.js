// Prototypes  ------------- done ------------- important
// Mixins ------------- done
// Web workers ------------- done
// Design pattern ------------- done
// Execution context ------------- done
// Routings ------------- done
// Redux using connect ------------- done
// axios with observable ------------- done


//dif kind of promises
//Jest, enzyme, react testing library., JSDOM, snapshot testing
// 1.Enzyme 
// 2.How to mock api in jest
// 3.How to mock redux call
// https://www.lambdatest.com/learning-hub/jest-interview-questions
//web sockets

// - Difference between unit testing & automation testing
// - What is snapshot testing
// - Steps in writing a single unit test case
// - Jest Syntax for writing test cases
// - Common Jest matchers that are used
// - Jest Mocking Fns/modules/api call implementation
// - Rendering Shallow vs mount(enzyme)
// - Handling asynchronous operations in jest & timeouts
//worker.js

self.onmessage = function (e) {
  self.postMessage(e.data);
};

//index.js

var worker = new Worker("worker.js");

worker.onmessage = function (e) {
  console.log(e.data);
};

// Singleton design pattern

class SingleTon {
  constructor() {
    if (SingleTon.instance) {
      console.log("helloxxx");
      return SingleTon.instance;
    }
    this.data = "single";
    SingleTon.instance = this;
  }
}

const single = new SingleTon();
const single123 = new SingleTon();
const single1234 = new SingleTon();
console.log(single.data);

//factory design pattern
class Animal {
  speak() {
    throw new Error("This method should be overridden!");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow! Meow!");
  }
}

class AnimalFactory {
  static createAnimal(animalType) {
    switch (animalType) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      default:
        throw new Error("Unknown animal type");
    }
  }
}

// Usage
const dog = AnimalFactory.createAnimal("dog");
dog.speak(); // Outputs: Woof! Woof!

const cat = AnimalFactory.createAnimal("cat");
cat.speak(); // Outputs: Meow! Meow!

//Adapter design pattern

class oldPrinter {
  print(text) {
    console.log(text);
  }
}

class newPrinter {
  printMessage(text) {
    throw new Error("Printer is not compatible");
  }
}

class Adapter {
  constructor(printer) {
    this.printer = printer;
  }

  print(text) {
    if (this.printer instanceof newPrinter) this.printer.printMessage(text);
    else {
      this.printer.print(text);
    }
  }
}

const adapterPrinter = new Adapter(new oldPrinter());

adapterPrinter.print("Hello printer");

//Mixin in React.js
//Mixin.js
const MyMixin = {
  componentDidMount() {
    console.log("Component did mount");
  },
  logMessage(message) {
    console.log(message);
  },
};

// MyComponent.js
import React from "react";
import { createReactClass } from "create-react-class";
import MyMixin from "./Mixin";

const MyComponent = createReactClass({
  mixins: [MyMixin],
  render() {
    console.log(this.logMessage("helllo hello"));
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  },
});

// export default MyComponent;

// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
const buttonInc = document.createElement("button");
buttonInc.innerHTML = "Increment";
document.getElementById("app").appendChild(buttonInc);
const buttonDec = document.createElement("button");
buttonDec.innerHTML = "Decrement";
const div = document.createElement("div");

// div.adda.id = 'display';
div.id = "display";
document.getElementById("app").appendChild(div);

document.getElementById("app").appendChild(buttonDec);
let count = 0;
buttonInc.addEventListener("click", () => {
  count++;
  div.innerHTML = count;
});
buttonDec.addEventListener("click", () => {
  count--;
  div.innerHTML = count;
});

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const personObj = {
  firstName: "Subhajit",
  lastName: "Tewary",
};

Person.call(personObj, "", "");
Person.call(personObj, ["", ""]);
const subhajit = Person.bind();

class OldPrinter {
  print(text) {
    console.log(text);
  }
}

class NewPrinter {
  printMessage(text) {
    throw new Error("using new ", text);
  }
}

class Adapter {
  constructor(oldprinterInstance) {
    this.oldprinterInstance = oldprinterInstance;
  }

  print() {
    this.oldprinterInstance.print("Printing...");
  }
}

const adapter = new Adapter(new OldPrinter());

adapter.print();

//Prototypes

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.calcAge = function (age) {
  console.log(2024 - age);
  return 2024 - age;
};
subhajit = new Person("Subhajit", "Tewary");

function Student(firstName, lastName, address) {
  Person.call(this, firstName, lastName);
  this.address = address;
}

// Student.prototype = Object.create(Person.prototype)
Student.prototype.intro = function () {
  console.log("Im " + this.firstName + " from " + this.address);
};
const std1 = new Student("Rakesh", "T", "Bankura");
std1.intro();
std1.calcAge(2000);
console.log(subhajit.calcAge(1997));

// Mixin in javascript
// Define a mixin with methods
const sayMixin = {
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
  sayBye() {
    console.log(`Bye, ${this.name} is leaving`);
  },
  sayEx() {
    this.ex = "Ex bye";
    console.log(`Bye, ${this.ex} is leaving`);
  },
};

// Create a User class
class User {
  constructor(name) {
    this.name = name;
    this.ex = ""; // Initialize ex property
    this.initialize(); // Call mixin methods in constructor
  }

  // Method to initialize using mixin methods
  initialize() {
    // Call mixin methods
    this.sayHi();
    this.sayEx();
  }

  // Method to use the ex property set by mixin method
  useEx() {
    console.log(`Using ex: ${this.ex}`);
  }
}

// Apply the mixin to the User class prototype
Object.assign(User.prototype, sayMixin);

// Use the User class
const user = new User("Alice");
user.useEx(); // Output: Using ex: Ex bye

MyMixin = (superclass) =>
  class extends superclass {
    myMixinMethod() {
      console.log("Helo my mixin method");
    }
  };

class BaseClass {
  baseOne() {
    console.log("base one!!");
  }
}

class EClass extends MyMixin(BaseClass) {
  base() {
    console.log("hello helllo hello");
  }
}

const mixin = new EClass();
mixin.myMixinMethod();
mixin.base();

//find repetative chars in a string
const str = "aaaaaaaaaabbbbbbbbcccccccccccdddddd";
const uniqueArr = [...new Set(str.split(""))].join("")
console.log(uniqueArr);

//Pub Sub
class PubSub {
  constructor() {
    this.topics = {}; // Stores topics and their subscribers
  }

  // Method to subscribe to a topic
  subscribe(topic, subscriber) {
    if (!this.topics[topic]) {
      this.topics[topic] = []; // Initialize the topic if it doesn't exist
    }
    this.topics[topic].push(subscriber); // Add subscriber to the topic
    console.log("this.topics[topic]", this.topics);
  }

  // Method to unsubscribe from a topic
  unsubscribe(topic, subscriber) {
    if (!this.topics[topic]) return;

    this.topics[topic] = this.topics[topic].filter((sub) => sub !== subscriber);
  }

  // Method to publish a message to a topic
  publish(topic, data) {
    if (!this.topics[topic]) return;

    this.topics[topic].forEach((subscriber) => subscriber(data)); // Notify all subscribers
  }
}

// Usage example
const pubSub = new PubSub();

// Subscriber function
const subscriber1 = (data) => {
  console.log(`Subscriber 1 received: ${data}`);
};

const subscriber2 = (data) => {
  console.log(`Subscriber 2 received: ${data}`);
};

// Subscribing to a topic
pubSub.subscribe("news", subscriber1);
pubSub.subscribe("news", subscriber2);

// Publishing a message to the topic
pubSub.publish(
  "news",
  "Breaking News: Publisher-Subscriber model implemented!"
);

// Unsubscribe subscriber1
pubSub.unsubscribe("news", subscriber1);

// Publishing another message to the topic
pubSub.publish("news", "More News: subscriber1 unsubscribed.");


// Using Axios with RxJS Observables in a React application allows you to handle HTTP requests in a more functional and reactive way. This combination is especially useful when dealing with asynchronous data streams, complex data manipulation, or chaining multiple dependent requests.

// Here is a step-by-step guide to using Axios with RxJS Observables in a React application:

// 1. Install Dependencies
// First, you need to install axios and rxjs if you haven't already:


// npm install axios rxjs
// 2. Create an Axios Observable Wrapper
// Create a utility function to wrap Axios requests in RxJS Observables. This can be placed in a file like axiosObservable.js:

import { from } from 'rxjs';
import axios from 'axios';

export const axiosGet = (url, config) => {
  return from(axios.get(url, config));
};

export const axiosPost = (url, data, config) => {
  return from(axios.post(url, data, config));
};

// Similarly, you can create wrappers for other Axios methods (put, delete, etc.)
// 3. Use Axios Observable in a React Component
// Now, let's see how to use these Axios Observable wrappers in a React component. Assume you have a functional component that fetches data from an API endpoint when it mounts.


import React, { useEffect, useState } from 'react';
import { axiosGet } from './axiosObservable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const subscription = axiosGet('https://api.example.com/data')
      .pipe(
        map(response => response.data),
        catchError(err => {
          setError(err.message);
          return of(null); // Return a null observable on error
        })
      )
      .subscribe(
        result => {
          if (result) {
            setData(result);
          }
        },
        err => {
          setError(err.message);
        }
      );

    // Clean up subscription on component unmount
    return () => subscription.unsubscribe();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
// Explanation
// axiosObservable.js:

// axiosGet and axiosPost functions convert Axios promises into Observables using from.
// DataFetcher Component:

// useEffect hook is used to make the HTTP request when the component mounts.
// axiosGet is called with the API URL, and its response is processed using RxJS operators.
// map operator extracts the data from the Axios response.
// catchError operator catches any errors and sets the error state.
// The subscribe method handles the success and error scenarios.
// The subscription is cleaned up on component unmount to prevent memory leaks.
// Advantages of Using RxJS with Axios
// Composability: Combine multiple asynchronous operations in a readable and maintainable way.
// Error Handling: Centralized and consistent error handling using RxJS operators.
// Stream-based: Treat data as streams, enabling powerful data manipulation and transformation.
// Cancellation: Easily cancel subscriptions (and thus network requests) when the component unmounts or when a new request supersedes the old one.
// This approach leverages the strengths of RxJS to handle complex asynchronous operations in React applications, making your code more predictable and easier to manage.

useEffect(()=> {
  const subscription = from(axios.get("url")).pipe(
    map(res=> res.userId),
    switchMap(userId => axios.get(userId)),
    map(res=> res.data),
    catchError(err => of(null))
  ).subscribe(
    res => res.data,
    err => err
  )
})

/**
 * DOM CREATION
 * Parsing: This step involves breaking down the HTML or XML into a structured format that the browser can work with.
Tokenization: The process of converting the raw HTML or XML into tokens. These tokens include elements, attributes, and text content.
Building the DOM Tree: The tokens are used to build a hierarchical tree structure that represents the document.
Node Objects: Each node in the DOM tree is an object with properties and methods, allowing for manipulation via JavaScript.
Document Object: This is the root of the DOM tree and provides an entry point for DOM manipulation.
Rendering: After the DOM and CSSOM are built, the browser renders the content on the screen.
Additional Notes:
CSSOM: Alongside the DOM, the browser also constructs the CSS Object Model (CSSOM) to apply styles to the DOM elements. The final rendering involves combining both the DOM and CSSOM.
Reflow and Repaint: When the DOM or CSSOM changes, the browser may need to reflow (recalculate layout) and repaint (redraw the screen) to reflect these changes.


In web development, **repaint** and **reflow** are processes that the browser uses to render and update the visual display of a webpage. They are both part of the rendering engine's process to display content on the screen, but they involve different levels of computational work and affect different aspects of the webpage.

### Reflow (Layout)

**Reflow** (also known as **layout**) is the process by which the browser calculates the position and size of elements on the page. This process occurs when changes to the DOM or CSS affect the layout of the page. Examples of changes that can trigger reflow include:

- Adding or removing elements from the DOM
- Changing the dimensions (width, height) or positioning (top, left) of elements
- Modifying the font size or other text properties
- Changing the CSS that affects the layout, such as `display`, `position`, or `float` properties

During a reflow, the browser needs to recalculate the positions and sizes of all affected elements and re-render the page layout. This process can be computationally intensive, especially for complex pages or when many changes occur.

### Repaint

**Repaint** is the process of updating the visual representation of elements on the screen without affecting their layout. Repaint occurs when changes are made to the appearance of elements that do not affect their layout. Examples of changes that can trigger repaint include:

- Changing the background color, text color, or border color of an element
- Updating visibility (e.g., changing `visibility` or `opacity`)
- Modifying shadows or outlines

Repaints are less expensive than reflows because they only involve the drawing operations on the screen and do not require recalculating the layout. However, excessive repaints can still affect performance, especially if they happen frequently or on a large number of elements.

### Summary

- **Reflow (Layout)**: Recalculates the layout of the page when changes affect the size or position of elements. This is more computationally expensive and can significantly impact performance.
- **Repaint**: Updates the visual appearance of elements without changing their layout. This is less expensive than reflow but can still impact performance if it happens frequently.

### Best Practices to Minimize Reflow and Repaint

To optimize performance and reduce the impact of reflows and repaints, consider the following best practices:

- Minimize DOM manipulations: Batch DOM changes and apply them all at once rather than making frequent, individual changes.
- Avoid inline styles: Use CSS classes to apply styles instead of setting styles directly in the HTML or via JavaScript.
- Minimize layout thrashing: Avoid repeatedly querying layout information (e.g., `offsetHeight`, `offsetWidth`) in a way that forces the browser to reflow.
- Use CSS transforms and opacity: For animations, prefer using `transform` and `opacity` properties, which can often be handled by the GPU and are less likely to trigger reflows.
- Debounce or throttle event handlers: For events that trigger frequently (e.g., `scroll`, `resize`), use debouncing or throttling to limit the number of times reflows and repaints are triggered.

By understanding and managing reflows and repaints, you can ensure that your web pages perform efficiently and provide a smoother user experience.
*/

//Prototype is the mechanism through which objects can inherit method and properties from other objects..

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({newColor = "green"} = {}) {
    this.newColor = newColor;
  }


}

console.log("aaa", Chameleon.colorChange("red"))


import React from 'react';
import ReactDOM from 'react-dom';

class BaseLoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.onsubmit(this.state);
  };

  onsubmit(data) {
    // To be implemented in the child class
    throw new Error('onsubmit method must be implemented in the child class');
  }

  renderFields() {
    // To be implemented in the child class
    throw new Error('renderFields method must be implemented in the child class');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderFields()}
        <button type="submit">Login</button>
      </form>
    );
  }
}

class ExtendedLogin extends BaseLoginView {
  onsubmit(data) {
    // Custom submission logic
    console.log('Form submitted:', data);
  }

  renderFields() {
    return (
      <>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

ReactDOM.render(<ExtendedLogin />, document.getElementById('root'));


function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function debounce(func, delay) {
  let debounceTimer;
  return function(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}



React.createElement(
  "h1",
  {},
  "Hello"
)