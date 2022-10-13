function ShortName(props: { depart: any }) {

    const {depart} = props

    const {gtfsRouteByRouteId} = depart
    const {color, shortName, textColor} = gtfsRouteByRouteId

    const style = {
        backgroundColor: `#${color}`,
        color:`#${textColor}`
    }

    return (
        <div className="short-name" style={style}>
            {shortName}    
        </div>
    )
}

export default ShortName