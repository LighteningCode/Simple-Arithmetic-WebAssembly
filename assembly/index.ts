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

export function addAll(values: Int32Array): i32 {
  let total = 0
  for (let i = 0, k = values.length; i < k; ++i) {
    total += unchecked(values[i])
  }
  return total
}

export function subtractAll(values: Int32Array): i32 {
  let total = 0
  for (let i = 0, k = values.length; i < k; ++i) {
    total -= unchecked(values[i])
  }
  return total;
}

export function multiplyAll(values: Int32Array): i32 {
  let total:i32 = 1;
  for (let i = 0, k = values.length; i < k; ++i) {
    total = total * unchecked(values[i])
  }
  return total;
}

export function divideAll(values: Float32Array): f32 {
  let value:f32 = 0
  for (let i = 0, k = values.length; i < k-1; ++i) {
    value = unchecked(values[i]) / unchecked(values[i+1])
  }
  return value;
}




export const Int32Array_ID = idof<Int32Array>()