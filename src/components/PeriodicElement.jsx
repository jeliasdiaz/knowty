import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { periodicContext } from '../context/PeriodicElementContext';

export const PeriodicElement = ({ element, colorMap }) => {
  const { onPeriodicProperties } = useContext(periodicContext);
  const [clicked, setClicked] = useState(false);
  const elementRef = useRef(null);

  const onCliked = () => {
    onPeriodicProperties(element.name, element.number, element.summary, element.symbol);
    setClicked(!clicked);
  };

  const handleClickOutside = (event) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={clicked ? 'element clicked' : 'element'}
      onClick={onCliked}
      key={element.name}
      ref={elementRef}
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
