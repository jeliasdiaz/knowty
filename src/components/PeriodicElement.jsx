import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { periodicContext } from '../context/PeriodicElementContext';

export const PeriodicElement = ({ element, colorMap }) => {
  const { onPeriodicProperties, activeCategory} = useContext(periodicContext);

  const onCliked = () => {
    onPeriodicProperties(element.name, element.number, element.summary, element.symbol, element.atomic_mass, element.electronegativity_pauling, element.electron_configuration);
  };

  const { category } = element;
  const isActiveCategory = activeCategory[category.toLowerCase()];
  const borderColor = isActiveCategory ? colorMap[category.toLowerCase()] : "";


  return (
    <div
      className="element"
      onClick={onCliked}
      key={element.name}
      style={{
        gridRow: element.ypos,
        gridColumn: element.xpos,
        borderColor: borderColor,
      }}
    >
      <strong>{element.symbol}</strong>
      <small className="number">{element.number}</small>
      <small className="numberTwo">{element.atomic_mass.toFixed(2)}</small>
      <small className="name">{element.name}</small>
    </div>
  );
};

PeriodicElement.propTypes = {
  element: PropTypes.object.isRequired,
  colorMap: PropTypes.object.isRequired,
}