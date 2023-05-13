import { useContext } from 'react';
import { periodicContext } from '../context/PeriodicElementContext';

export const PeriodicElement = ({ element, colorMap }) => {
  const { onPeriodicProperties } = useContext(periodicContext);

  const onCliked = () => {
    onPeriodicProperties(element.name, element.number, element.summary, element.symbol);
  };


  return (
    <div
      className="element"
      onClick={onCliked}
      key={element.name}
      style={{
        gridRow: element.ypos,
        gridColumn: element.xpos,
        borderColor: colorMap[element.category],
      }}
    >
      <strong>{element.symbol}</strong>
      <small className="number">{element.number}</small>
      <small className="name">{element.name}</small>
    </div>
  );
};
