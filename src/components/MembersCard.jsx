const MembersCard = ({name, description, icon, iconTwo}) => {
    return (
        <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400" data-aos-once="true">

            {icon} {iconTwo}
            <h6 className="pt-3">{name}</h6>
            <p>{description}</p>

        </div>
    )
}

export default MembersCard