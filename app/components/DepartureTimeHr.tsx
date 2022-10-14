function DepartureTimeHr(props: { departure: any }) {

    const {departure} = props

    const {departureDateTime} = departure
    const departureTime = new Date(departureDateTime).toLocaleTimeString('fr-EU', { hour: '2-digit', minute: '2-digit' })

    return (
        departureTime
        ? (<div>
            {departureTime}    
        </div>)
        : (<p>??:??</p>)
    )
}

export default DepartureTimeHr