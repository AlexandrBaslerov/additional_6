module.exports = function zeros(expression) {

  //const multiply = require('./product.js');
  function multiply(first, second) {
    
        if (parseInt(first) === 0 || parseInt(second) === 0) {
            return '0';
        }
    
        first = first.split('').reverse();
        second = second.split('').reverse();
        let result = [];
    
        for (let i = 0; first[i] >= 0; i++) {
            for (let j = 0; second[j] >= 0; j++) {
                if (!result[i + j]) {
                    result[i + j] = 0;
                }
    
                result[i + j] += first[i] * second[j];
            }
        }
    
        for (let i = 0; result[i] >= 0; i++) {
            if (result[i] >= 10) {
                if (!result[i + 1]) {
                    result[i + 1] = 0;
                }
    
                result[i + 1] += parseInt(result[i] / 10);
                result[i] %= 10;
            }
        }
    
        return result.reverse().join('');
    }
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
