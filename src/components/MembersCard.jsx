const MembersCard = ({ name, description, icon, iconTwo, optionalClass, animationDuration }) => {
    return (
        <div className={`teamCard ${optionalClass}`} data-aos="fade-right" data-aos-duration={animationDuration}>

            {icon}{iconTwo}
            <h6 className="pt-3">{name}</h6>
            <p>{description}</p>

        </div>
    )
}

export default MembersCard