function ShortName(props: { depart: any }) {

    const {depart} = props
    console.log(depart);
    
    return (
        <div className="short-name" style={{backgroundColor: `#${depart.gtfsRouteByRouteId.color}`}}>
            {depart.gtfsRouteByRouteId.shortName}    
        </div>
    )
}

export default ShortName

// <div className="short-name" style={{backgroundColor: `#${item.gtfsRouteByRouteId.color}`}}>{item.gtfsRouteByRouteId.shortName}</div>