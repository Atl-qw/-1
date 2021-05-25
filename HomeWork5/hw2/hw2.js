//1

for (let i = 1; i <= 7; i++) console.log(`*`.repeat(i));

//2

for (let i = 1; i <= 100; i++) {
  //   if (i % 5 == 0 && i % 3 == 0) {
  //     console.log(`FizzBuzz`);
  //   } else if (i % 5 == 0) {
  //     console.log(`Buzz`);
  //   } else if (i % 3 == 0) {
  //     console.log(`Fizz`);
  //   } else {
  //     console.log(i);
  //   }
  i % 5 == 0 && i % 3 == 0
    ? console.log(`FizzBuzz`)
    : i % 3 == 0
    ? console.log(`Fizz`)
    : i % 5 == 0
    ? console.log(`Buzz`)
    : console.log(i);
}

//3
const chess_board = (width, height) => {
    let board = "";
    for (let i = 0; i < height; i++) {
      if (i % 2 == 0) {
        board += "# ".repeat(Math.round(width / 2)) + "\n";
      } else {
        board += " #".repeat(Math.round(width / 2)) + "\n";
      };
    }

    console.log(board);
};
chess_board(8, 8);
//4
const limit = 10;
let counter = 1;

while (counter < limit) {
  let result = ``;
  for (let i = 0; i < counter; i++) {
    result += `*`;
  }
  console.log(result);
  counter++;
}
