/**
  Challenge: Display all users to the browser
  Small Hint: Use array map with react key
  
  Solution: https://codepen.io/angelo_jin/pen/wvreMpZ
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

const users = [
{ name: "John Doe", id: 1 },
{ name: "Jane Doe", id: 2 },
{ name: "Billy Doe", id: 3 }];


function App() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h3", null, "User names"), /*#__PURE__*/
    React.createElement("ul", null,
    users.map((user) => /*#__PURE__*/
    React.createElement("li", { key: user.id }, user.name)))));




}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));

/**
  All Exercises and Solutions from the video for your convenience
  https://youtu.be/VzNNjNmbXpY

  Exercises:
  Display simple JSX 
    - https://codepen.io/angelo_jin/pen/wvrygZa
  Display array of users to browser
    - https://codepen.io/angelo_jin/pen/QWqQdXE
  Show/Hide Element on Screen
    - https://codepen.io/angelo_jin/pen/zYERZZL
  2 way data binding in ReactJS
    - https://codepen.io/angelo_jin/pen/MWEQmqN
  Disable a button
    - https://codepen.io/angelo_jin/pen/YzrazGY
  Update the parent state
    - https://codepen.io/angelo_jin/pen/JjrLjOy
  Dynamically add child components (React Children)
    - https://codepen.io/angelo_jin/pen/BawrpeX
  Sum of Two Numbers
    - https://codepen.io/angelo_jin/pen/zYEWZNR
  Create Counter App
    - https://codepen.io/angelo_jin/pen/mdBxWwN
  Fetch data from an API
    - https://codepen.io/angelo_jin/pen/oNGqZpm

  Solutions:
  Display simple JSX 
    - https://codepen.io/angelo_jin/pen/xxXrZLd
  Display array of users to browser
    - https://codepen.io/angelo_jin/pen/wvreMpZ
  Show/Hide Element on Screen
    - https://codepen.io/angelo_jin/pen/abLwyrL
  2 way data binding in ReactJS
    - https://codepen.io/angelo_jin/pen/yLzvMop
  Disable a button
    - https://codepen.io/angelo_jin/pen/dyVmyYz
  Update the parent state
    - https://codepen.io/angelo_jin/pen/KKXoKgO
  Dynamically add child components (React Children)
    - https://codepen.io/angelo_jin/pen/MWEVJNb
  Sum of Two Numbers
    - https://codepen.io/angelo_jin/pen/BawrWzy
  Create Counter App
    - https://codepen.io/angelo_jin/pen/yLzKMXX
  Fetch data from an API
    - https://codepen.io/angelo_jin/pen/zYEWZdW
**/