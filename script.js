let s = '';

// 1
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 5; j++) {
//     for (let k = 0; k < 5; k++) {
//       for (let l = 0; l < 5; l++) {
//         s += '*';
//       }
//     }
//   }
//   s += '\n';
// }

// 2
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }

// 3
// for (let i = 10; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }

// test
// let size = 10;
// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     if (i == 0 || j == 0 || i == size - 1 || j == size - 1) {
//       s += '*';
//     } else {
//       s += ' ';
//     }
//   }
//   s += '\n';
// }

// 4
// for (let i = 5; i > 0; i--) {
//   if (i == 4) {
//     s += ' ';
//   } else if (i == 3) {
//     s += '  ';
//   } else if (i == 2) {
//     s += '   ';
//   } else if (i == 1) {
//     s += '    ';
//   }
//   for (let k = 0; k < i; k++) {
//     s += '*';
//   }
//   s += '\n';
// }

// 5
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// for (let k = 4; k > 0; k--) {
//   for (let l = 0; l < k; l++) {
//     s += '*';
//   }
//   s += '\n';
// }

// 6
// let pola = 10;
// for (let i = 1; i <= pola; i++) {
//   for (let j = pola; j >= i; j--) {
//     s += ' ';
//   }
//   for (let k = 1; k <= i + (i - 1); k++) {
//     s += '*';
//   }
//   s += '\n';
// }

// 7
// let pola = 10;
// for (let i = 1; i <= pola; i++) {
//   for (let j = pola; j >= i; j--) {
//     s += ' ';
//   }
//   for (let k = 1; k <= i + (i - 1); k++) {
//     s += '*';
//   }
//   s += '\n';
// }
// for (let i = 1; i <= pola; i++) {
//   for (let j = 1; j <= i; j++) {
//     s += ' ';
//   }
//   for (let k = pola; k >= 2 * i - pola; k--) {
//     s += '*';
//   }
//   s += '\n';
// }

// 8
let lebar = 10;
let panjang = 5;
for (let i = 0; i < panjang; i++) {
  if (i % 2 == 1) {
    for (let j = 0; j < lebar; j++) {
      if (j % 2 == 0) {
        s += '#';
      } else {
        s += ' ';
      }
    }
  } else {
    for (let k = 0; k < lebar; k++) {
      if (k % 2 == 0) {
        s += ' ';
      } else {
        s += '#';
      }
    }
  }
  s += '\n';
}

// segitiga pascal (menggunakan faktorial)
// let pola = 5;

// function faktorial(n) {
//   let a = 1;
//   let i = 1;

//   while (i <= n) {
//     a *= i;
//     i++;
//   }
//   return a;
// }

// for (let i = 0; i < pola; i++) {
//   for (let j = pola; j >= i; j--) {
//     s += ' ';
//   }
//   for (let j = 0; j <= i; j++) {
//     s += faktorial(i) / (faktorial(j) * faktorial(i - j)) + ' ';
//   }
//   s += '\n';
// }

// for (let i = 0; i < 5; i++) {
//   console.log(s);
// }
// console.log('\n');
// console.log(i);
console.log(s);
