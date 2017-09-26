module.exports = function zeros(expression) {

  const multiply = require('./product.js');
  
  function factorial(n,countFactroial) {
      return (n != '1' && n != '0') ? multiply(n+'',factorial(n-countFactroial,countFactroial)) : '1'
    }

  let array = expression.split('*');

  for(let i = 0; i < array.length ; i++){
    if(array[i].indexOf('!!') !== -1 ){
      array[i]=factorial(array[i].slice(0,-2),2);
    }
    else array[i]=factorial(array[i].slice(0,-1),1);
  }

  let result = array[0];
  for(let i = 1; i < array.length ; i++){
    result=multiply(result,array[i]);
  }

  result=result.split('').reverse();
  let countZeros=0;

  for(let i = 0; i < result.length ; i++){
    if(result[i]==='0') countZeros++;
    else break;
  }
  return countZeros;
}
