import { useLoaderData } from "@remix-run/react";
import DepartureRow from "~/components/DepartureRow";
import Header from "../components/Header"

function SmartDisplay() {

    const data = useLoaderData()
    console.log("data : ", data);

    const {stopDetails, departures} = data
    
    /* option possible */
    // if (!stopIds) {
    //     return (<div>erreur</div>)
    // }

    //const { name } = data ? data : {} // short version : const { name } = data || {}

  // 

    return (
        <div className="main-container">
          <Header stopDetails={stopDetails}/> 
          <DepartureRow departures={departures}/> {/* map */}
        </div>
    )
  }

  export default SmartDisplay