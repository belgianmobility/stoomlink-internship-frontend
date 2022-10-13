function Headsign(props: { depart: any }) {

    const {depart} = props

    const {headsign} = depart

    return (
        <div>
            {headsign}    
        </div>
    )
}

export default Headsign