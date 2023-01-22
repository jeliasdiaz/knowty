const MembersCard = ({ name, description, icon, iconTwo, optionalClass, animation }) => {
    
    return (
        <div className={`teamCard ${optionalClass}`} style={animation}>

            {icon}{iconTwo}
            <h6 className="pt-3">{name}</h6>
            <p>{description}</p>

        </div>
    )
}

export default MembersCard