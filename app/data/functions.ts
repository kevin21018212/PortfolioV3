import { hexColorOptions } from "./smallData";

export const getImagePath = (item: string | null): string => {
  return item ? `/about/${item}.jpg` : "";
};

export const getRandomGradient = () => {
  const randomColor1 =
    hexColorOptions[Math.floor(Math.random() * hexColorOptions.length)];
  let randomColor2;
  do {
    randomColor2 =
      hexColorOptions[Math.floor(Math.random() * hexColorOptions.length)];
  } while (randomColor2 === randomColor1);

  const randomDegree = Math.floor(Math.random() * 361);

  return `linear-gradient(${randomDegree}deg, ${randomColor1}, ${randomColor2})`;
};
