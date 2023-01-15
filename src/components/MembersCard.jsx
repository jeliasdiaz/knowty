const MembersCard = ({ name, description, icon, iconTwo, optionalClass }) => {
    return (
        <div className={`teamCard ${optionalClass}`} data-aos="zoom-in-down" data-aos-duration="1400">

            {icon}{iconTwo}
            <h6 className="pt-3">{name}</h6>
            <p>{description}</p>

        </div>
    )
}

export default MembersCard