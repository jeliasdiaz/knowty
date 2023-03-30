import { useState } from "react";

export const useGraphicator = () => {
  const [numbersY, setNumbersY] = useState({
    numberOne: null,
    numberTwo: null,
    numberThree: null,
    numberFour: null,
    numberFive: null,
    numberSix: null,
  });
  const [numbersX, setNumbersX] = useState({
    numberOne: null,
    numberTwo: null,
    numberThree: null,
    numberFour: null,
    numberFive: null,
    numberSix: null,
  });

  const [graphicData, setGraphicData] = useState([]);

  const onInputYOne = (e) => {
    const data = Number(e.target.value);
    setNumbersY({ ...numbersY, numberOne: data });
  };
  const onInputYTwo = (e) => {
    const data = Number(e.target.value);
    setNumbersY({ ...numbersY, numberTwo: data });
  };
  const onInputYThree = (e) => {
    const data = Number(e.target.value);
    setNumbersY({ ...numbersY, numberThree: data });
  };
  const onInputYFour = (e) => {
    const data = Number(e.target.value);
    setNumbersY({ ...numbersY, numberFour: data });
  };
  const onInputYFive = (e) => {
    const data = Number(e.target.value);
    setNumbersY({ ...numbersY, numberFive: data });
  };
  const onInputYSix = (e) => {
    const data = Number(e.target.value);
    setNumbersY({ ...numbersY, numberSix: data });
  };

  const onInputXOne = (e) => {
    const data = Number(e.target.value);
    setNumbersX({ ...numbersX, numberOne: data });
  };
  const onInputXTwo = (e) => {
    const data = Number(e.target.value);
    setNumbersX({ ...numbersX, numberTwo: data });
  };
  const onInputXThree = (e) => {
    const data = Number(e.target.value);
    setNumbersX({ ...numbersX, numberThree: data });
  };
  const onInputXFour = (e) => {
    const data = Number(e.target.value);
    setNumbersX({ ...numbersX, numberFour: data });
  };
  const onInputXFive = (e) => {
    const data = Number(e.target.value);
    setNumbersX({ ...numbersX, numberFive: data });
  };
  const onInputXSix = (e) => {
    const data = Number(e.target.value);
    setNumbersX({ ...numbersX, numberSix: data });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setGraphicData([numbersY, numbersX]);
    setNumbersY([]);
    setNumbersX([]);
    e.target.reset();
  };

  const onInputY = {
    onInputYOne,
    onInputYTwo,
    onInputYThree,
    onInputYFour,
    onInputYFive,
    onInputYSix,
  };

  const onInputX = {
    onInputXOne,
    onInputXTwo,
    onInputXThree,
    onInputXFour,
    onInputXFive,
    onInputXSix,
  };
  return {
    graphicData,
    onInputX,
    onInputY,
    onFormSubmit,
  };
};
