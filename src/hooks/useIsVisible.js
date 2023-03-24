import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
    
  }, [ref]);

  return isIntersecting;
}

useIsVisible.propTypes = {
  ref: PropTypes.func.isRequired
}