function processString(input) {
  let noSpaces = input.replace(/\s+/g, '');

  let reversed = noSpaces.split('').reverse().join('');

  let result = reversed.toUpperCase();

  return result;
}
let inputString = "  Hello World  ";
let processedString = processString(inputString);
console.log(processedString);