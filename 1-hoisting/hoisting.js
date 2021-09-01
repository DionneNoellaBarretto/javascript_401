// TASK : Rewrite the following *function declarations* using a *function expression*:

// function keyword not being used for writing this arrow function! This
// 1.
//  function cube(x) {
//     return x * x * x;
//   }
const cube = x => {
    return x**3; 
    //x**3 --> x*x*x*
}


// 2.
// function fullName(first, last) {
//     return first + " " + last;
//   }
 
const fullName = (first, last) => {
    return first + " " + last;
}

// 3.
// function power(base, exp) {
//     if (exp === 0) {
//       return 1;
//     }
//     return base * power(base, exp - 1);
//   }
const power = (base, exp) => {
    if (exp === 0) 
        {
            return 1;
        }
    return base * power(base, exp - 1);   
}

  // 4.
//   function sumCubes(numbers) {
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       total = total + cube(numbers[i]);
//     }
//     return total;
//   }

const sumCubes = (numbers) => {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
}