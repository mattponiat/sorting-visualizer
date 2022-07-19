const getRandomNumbers = (length: number): number[] => {
  const array: number[] = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 300) + 10);
  }

  return array;
};

export default getRandomNumbers;
