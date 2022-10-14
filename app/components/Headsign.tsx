function Headsign(props: { departure: any }) {

    const {departure} = props

    const {headsign} = departure

    return (
        headsign
        ? (
        <div>
            {headsign}    
        </div>)
        : (<p>pas d'information</p>)
    )
}

export default Headsign