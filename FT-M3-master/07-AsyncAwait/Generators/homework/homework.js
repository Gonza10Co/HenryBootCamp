function* fizzBuzzGenerator(max = Infinity) {
  // Tu código acá:
  let number = 1;

  while (number <= max) {
    if (number % 15 === 0) {
      yield "Fizz Buzz";
    } else if (number % 3 === 0) {
      yield "Fizz";
    } else if (number % 5 === 0) {
      yield "Buzz";
    } else {
      yield number;
    }
    number++;
  }
  if (number === max) return number;
}

module.exports = fizzBuzzGenerator;
