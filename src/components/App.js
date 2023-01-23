import React, { Component } from "react";
import { MyComponent } from "./MyComponent";

class ExampleClass extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.names.map(
            (item, i) =>
              "Student " + (i + 1) + ": " + item + (i != 2 ? ", " : "\n")
          )}
        </h1>
        {/* <h1>This is {this.props.title}'s Website!</h1> */}
      </div>
    );
  }
}

ExampleClass.defaultProps = {
  names: ["Ram", "Shyam", "Raghav"],
};
// ExampleClass.defaultProps = {
//   title: "The Odin Project",
// };

// class Parent extends Component {
//   render() {
//     return (
//       <div>
//         <h2>You are inside Parent Component</h2>
//         <Child name="User" userId="5555" />
//       </div>
//     );
//   }
// }

// class Child extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h2>Hello, {this.props.name}</h2>
//         <h3>You are inside Child Component</h3>
//         <h3>Your user id is: {this.props.userId}</h3>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.onClickBtn = this.onClickBtn.bind(this);
//   }

//   onClickBtn() {
//     console.log("Button has been clicked");
//   }

//   render() {
//     return (
//       <div>
//         <MyComponent title="React" onButtonClicked={this.onClickBtn} />
//       </div>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <MyComponent title="Hello World" />
//     </div>
//   );
// };

// class DemoComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Hello {this.props.user}</h2>
//         <h3>Welcome to GeeksforGeeks</h3>
//       </div>
//     );
//   }
// }

export default ExampleClass;
// export default Parent;
// export default DemoComponent;
// export default App;
