// function that checks if a number is a factor of 2, 11 or 22,
// printing "candy", "bar", or "candybar"
// if it isn't, print the input instead
function divisible(input: number) {
  // key-pair value of expected factor and result
  let factors: Array<[number, string]> = [
    [2, "candy"],
    [11, "bar"],
    [22, "candybar"],
  ];

  // set response to input; if the value is a factor,
  // it will be overwritten
  let response: string = input.toString();

  // for each factor in factors
  factors.map(([factor, text]) => {
    // check if input is divisible by the factor
    if (input % factor == 0) {
      response = text;
    }
  });

  // output response
  console.log(response);
}
