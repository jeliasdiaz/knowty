import PropTypes from 'prop-types'

export const MoreBtn = ({url}) => {
    return (
        <>
            <button className="btn btn-secondary"><a href={url} target="_blank" rel="noreferrer" className="text-decoration-none text-white">Profundizar</a></button> <br /><br />
        </>
    )
}

MoreBtn.propTypes = {
    url: PropTypes.string.isRequired,
}