import { useState } from "react";
import { generateRandomColor } from "../helpers/generateRandomColor";
import { getContrastingColor } from "../helpers/getContrastColor";

export const useChangeColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#000");

  const handleChangeBackgroundColor = () => {
    const backgroundClr = generateRandomColor();
    const textClr = getContrastingColor(backgroundClr);
    setBackgroundColor(backgroundClr);
    setTextColor(textClr);
  };

  return { backgroundColor, textColor, handleChangeBackgroundColor };
};
