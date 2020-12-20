// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}


export function subtract(num1: i32, num2: i32): i32 {
  return num1 - num2;
}

export function multiply(a: i32, b: i32): i32 {
  return a * b;
}

export function divide(a: i32, b: i32): i32 {
  return a / b;
}