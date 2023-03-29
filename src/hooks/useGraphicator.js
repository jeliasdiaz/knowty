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
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersY({...numbersY, numberOne: data});
    }, 200);
  };
  const onInputYTwo = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersY({...numbersY, numberTwo: data});
    }, 200);
  };
  const onInputYThree = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersY({...numbersY, numberThree: data});
    }, 200);
  };
  const onInputYFour = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersY({...numbersY, numberFour: data});
    }, 200);
  };
  const onInputYFive = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersY({...numbersY, numberFive: data});
    }, 200);
  };
  const onInputYSix = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersY({...numbersY, numberSix: data});
    }, 200);
  };

  const onInputXOne = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersX({...numbersX, numberOne:data});
    }, 200);
  };
  const onInputXTwo = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersX({...numbersX, numberTwo:data});
    }, 200);
  };
  const onInputXThree = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersX({...numbersX, numberThree:data});
    }, 200);
  };
  const onInputXFour = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersX({...numbersX, numberFour:data});
    }, 200);
  };
  const onInputXFive = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersX({...numbersX, numberFive:data});
    }, 200);
  };
  const onInputXSix = (e) => {
    setTimeout(() => {
      const data = Number(e.target.value);
      setNumbersX({...numbersX, numberSix:data});
    }, 200);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setGraphicData([numbersY, numbersX]);
    setNumbersY([]);
    setNumbersX([]);
    e.target.reset();
  };
  
  const onInputY = {onInputYOne, onInputYTwo, onInputYThree, onInputYFour, onInputYFive, onInputYSix}

  const onInputX = {onInputXOne, onInputXTwo, onInputXThree, onInputXFour, onInputXFive, onInputXSix}
  return {
    graphicData,
    onInputX,
    onInputY,
    onFormSubmit,
  };
};
