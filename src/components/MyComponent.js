import React, { Component } from "react";

// class MyComponent extends Component {
//   //   constructor(props) {
//   //     super(props);
//   //   }
//   //   render() {
//   //     return (
//   //       <div>
//   //         <h1>{this.props.title}</h1>
//   //         <button onClick={this.props.onButtonClicked}>Click me!</button>
//   //       </div>
//   //     );
//   //   }

//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };

//     this.countUp = this.countUp.bind(this);
//   }

//   countUp() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.countUp}>Click Me!</button>
//         <p>{this.state.count}</p>
//       </div>
//     );
//   }
// }

// export default MyComponent;

export const MyComponent = (props) => {
  return <div>{props.title}</div>;
};
