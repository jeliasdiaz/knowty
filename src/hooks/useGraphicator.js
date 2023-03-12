import { useState } from "react";

export const useGraphicator = () => {
  const [numbersY, setNumbersY] = useState([]);
  const [numbersX, setNumbersX] = useState([]);

  const [graphicData, setGraphicData] = useState([]);

  const onInputY = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersY([...numbersY, data]);
    }, 200);
  };

  const onInputX = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersX([...numbersX, data]);
    }, 200);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setGraphicData([numbersY, numbersX]);
    setNumbersY([]);
    setNumbersX([]);
    e.target.reset();
  };

  return {
    graphicData,
    onInputX,
    onInputY,
    onFormSubmit,
  };
};
