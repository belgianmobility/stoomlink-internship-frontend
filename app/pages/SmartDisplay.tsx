import { useLoaderData } from "@remix-run/react";

function SmartDisplay() {

    const data = useLoaderData()
    console.log("data : ", data);

    const {stopDetails, departures} = data
    const {name} = stopDetails || {}
    
    
    /* option possible */
    // if (!stopIds) {
    //     return (<div>erreur</div>)
    // }

    //const { name } = data ? data : {} // short version : const { name } = data || {}

    return (
        <div>
            {
                stopDetails && stopDetails.name
                ? (<h1> {name} </h1>)
                : (<p>error no name</p>)
            }
            {
                departures && departures.length
                ? (<div>
                    <h2>prochains départs : </h2>
                    <ul>
                      {departures.map((item: any, index: number) => {
                        // console.log(typeof item.departureDateTime);
                        const departureDateTimeLocaleString = new Date(item.departureDateTime).toLocaleDateString()
                      return (<li key={index}>{`${departureDateTimeLocaleString} : ${item.headsign}`}</li>)
                      }
                      )
                      }
                    </ul>

                    
                  </div>

                )
                : (<p>error no departure</p>)
            }
        </div>
    )
  }

  export default SmartDisplay