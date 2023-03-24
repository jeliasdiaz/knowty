import "./SectionTitle.css"
import PropTypes from 'prop-types'

export const SectionTitle = ({title}) => {
    return (
        <div className="textIntroduction ownShadow">
            <h1>{title}</h1>
        </div>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}