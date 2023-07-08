import { useCallback, useContext, useEffect, useRef } from "react"
import { useIsVisible } from "../hooks"
import "../css/SectionTitle.css"
import PropTypes from 'prop-types'
import { titleContext } from "../context/TitleContextSubject"

export const SectionTitle = ({ title }) => {
  const titleRef = useRef()
  const isVisible = useIsVisible(titleRef)
  const { setTitleVisible } = useContext(titleContext)
  const onTitleVisible = useCallback(() => {
    if (!isVisible) {
      setTitleVisible(true);
    }
    else {
      setTitleVisible(false);
      return;
    }
  }, [isVisible, setTitleVisible]);
  useEffect(() => {
    onTitleVisible()
  }, [onTitleVisible])

  return (
    <div className="textIntroduction ownShadow" ref={titleRef}>
      <h1>{title}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
}