function factorialize(num) {
    if(num===0){
      return 1;
    }
    return num * factorialize(num-1);
  }
  
  factorialize(5);
  
  function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  factorialize(5);

  
 