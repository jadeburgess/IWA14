const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}


const sayHelloTwice = () => {
 logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

sayHelloTwice() //executes logTwice function defined in line 10. 