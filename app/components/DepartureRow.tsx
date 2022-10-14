import DepartureTimeHr from "./DepartureTimeHr"
import Headsign from "./Headsign"
import ShortName from "./ShortName"

function DepartureRow(props: any) {

    const {departure} = props    

    return(
        departure
        ? (<div className="departure-row">
            <div className="shortName-and-headsign">
                <ShortName departure={departure} />
                <Headsign departure={departure} />
            </div>
            <DepartureTimeHr departure={departure} />
        </div>)
        : (<p>voyage non trouvé</p>)
    )
}

export default DepartureRow