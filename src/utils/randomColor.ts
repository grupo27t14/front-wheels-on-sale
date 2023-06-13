function randomNumbers(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  let result = Math.floor(Math.random() * (max - min) + min);
  if (result >= max) {
    result = max - 1;
  }
  return result;
}

export function randomColor() {
  const red = randomNumbers(0, 160);
  const green = randomNumbers(0, 110);
  const blue = randomNumbers(0, 110);
  const color = `rgb(${red},${green},${blue})`;
  return color;
}
