function DepartureTimeHr(props: { departure: any }) {

    const {departure} = props

    const {departureDateTime} = departure
    const departureTime = new Date(departureDateTime).toLocaleTimeString('fr-EU', { hour: '2-digit', minute: '2-digit' })

    return (
        <div>
            {departureTime}    
        </div>
    )
}

export default DepartureTimeHr