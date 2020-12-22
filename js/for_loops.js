
let showMultiplicationTable = function(num) {
  for (var n = 1; n <= 10; n++) {
    console.log(num + " x " + i + " = " + ( i * num ) );
  }
}

for (let i=0;i<10;i++) {
  let random = Math.floor(Math.random()*181) + 20;
  if (random % 2 === 0) {
    console.log(random + " is even");
  } else {
    console.log(random + " is odd");
  }
}
/* or*/

let randomNumber = Math.floor(Math.random() * 180) + 20;

for (var i = 0; i < 10; i += 10) {
  if (randomNumber % 2 === 0) {
    console.log(randomNumber + " is even");
  } else {
    console.log(randomNumber + " is odd");
  }

    for (let i = 1; i <= 9; i++) {
      let str = "";
      for (let j = 1; j <= i; j++) {
        str += i;
      }
      console.log(str);
    }
    /*  or*/

    for (let i = 1; i <= 9; i++) {
      console.log(i.toString().repeat(i));
    }


    for (let i = 100; i >= 5; i = i - 5) {
      console.log(i);
    }
}



