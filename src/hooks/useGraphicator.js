import { useState } from "react";

export const useGraphicator = () => {
  const  [yValues, setYValues] = useState({
    y1: null,
    y2: null,
    y3: null,
    y4: null,
    y5: null,
    y6: null,
  });
  const [xValues, setXValues] = useState({
    x1: null,
    x2: null,
    x3: null,
    x4: null,
    x5: null,
    x6: null,
  });


  const [graphicData, setGraphicData] = useState([]);

  const onInputYOne = (e) => {
    const data = Number(e.target.value);
    setYValues({ ...yValues, y1: data });
  };
  const onInputYTwo = (e) => {
    const data = Number(e.target.value);
    setYValues({ ...yValues, y2: data });
  };
  const onInputYThree = (e) => {
    const data = Number(e.target.value);
    setYValues({ ...yValues, y3: data });
  };
  const onInputYFour = (e) => {
    const data = Number(e.target.value);
    setYValues({ ...yValues, y4: data });
  };
  const onInputYFive = (e) => {
    const data = Number(e.target.value);
    setYValues({ ...yValues, y5: data });
  };
  const onInputYSix = (e) => {
    const data = Number(e.target.value);
    setYValues({ ...yValues, y6: data });
  };

  const onInputXOne = (e) => {
    const data = Number(e.target.value);
    setXValues({ ...xValues, x1: data });
  };
  const onInputXTwo = (e) => {
    const data = Number(e.target.value);
    setXValues({ ...xValues, x2: data });
  };
  const onInputXThree = (e) => {
    const data = Number(e.target.value);
    setXValues({ ...xValues, x3: data });
  };
  const onInputXFour = (e) => {
    const data = Number(e.target.value);
    setXValues({ ...xValues, x4: data });
  };
  const onInputXFive = (e) => {
    const data = Number(e.target.value);
    setXValues({ ...xValues, x5: data });
  };
  const onInputXSix = (e) => {
    const data = Number(e.target.value);
    setXValues({ ...xValues, x6: data });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setGraphicData([yValues, xValues]);
    setYValues({
      y1: null,
      y2: null,
      y3: null,
      y4: null,
      y5: null,
      y6: null,
    });
    setXValues({
      x1: null,
      x2: null,
      x3: null,
      x4: null,
      x5: null,
      x6: null,
    });
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
