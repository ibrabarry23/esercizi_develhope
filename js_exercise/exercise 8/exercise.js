function multiplyByTwo(value) {
  let number = 2;
  function int(){
    return value*number;
  }
  return int;
}
console.log(multiplyByTwo(4)());

