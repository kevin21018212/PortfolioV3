import { useEffect } from "react";
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

  return `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
};

export function useResizeLogic(
  setPerPage: React.Dispatch<React.SetStateAction<number>>,
  setTags: React.Dispatch<React.SetStateAction<any>>,
  setHeight: React.Dispatch<React.SetStateAction<string>>,
  allTags: string[],
  mobileTags: string[]
): any {
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setPerPage(windowWidth <= 600 ? 1.75 : windowWidth <= 1200 ? 2.5 : 4.5);
      if (windowWidth >= 1200) {
        setTags(mobileTags.concat(allTags));
        setHeight("50vh");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
}
