function DepartureTimeHr(props: { depart: any }) {

    const {depart} = props

    const {departureDateTime} = depart
    const departTime = new Date(departureDateTime).toLocaleTimeString('fr-EU', { hour: '2-digit', minute: '2-digit' })

    return (
        <div>
            {departTime}    
        </div>
    )
}

export default DepartureTimeHr