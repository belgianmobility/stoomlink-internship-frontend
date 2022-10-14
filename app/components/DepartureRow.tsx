import DepartureTimeHr from "./DepartureTimeHr"
import Headsign from "./Headsign"
import ShortName from "./ShortName"

function DepartureRow(props: any) {

    const {departure} = props    

    return(
        <div className="departure-row">
            {departure
            ? (<>
                <div className="shortName-and-headsign">
                    <ShortName departure={departure} />
                    <Headsign departure={departure} />
                </div>
                <DepartureTimeHr departure={departure} />
            </>)         
            : (<p>voyage non trouvé</p>)
        }</div>
    )
}

export default DepartureRow