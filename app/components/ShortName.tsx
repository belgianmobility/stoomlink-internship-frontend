function ShortName(props: { departure: any }) {

    const {departure} = props

    const {gtfsRouteByRouteId} = departure
    const {color, shortName, textColor} = gtfsRouteByRouteId

    const style = {
        backgroundColor: `#${color}`,
        color:`#${textColor}`
    }

    return (
        shortName
        ? (<div className="short-name" style={style}>
            {shortName}    
        </div>)
        : (<p>???</p>)
    )
}

export default ShortName