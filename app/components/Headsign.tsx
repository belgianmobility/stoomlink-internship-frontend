function Headsign(props: { departure: any }) {

    const {departure} = props

    const {headsign} = departure

    return (
        <div>
            {headsign}    
        </div>
    )
}

export default Headsign