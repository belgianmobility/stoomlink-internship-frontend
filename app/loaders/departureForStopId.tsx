// import gtfsStops from "./gtfsStops";
import gtfsDepartures from "./gtfsDepartures";
import gtfsStopsAllDirections from "./gtfsStopsAllDirections";

export default async function departureForStopId(argument) {
    const {params} = argument
    const {stopIds, name} = params
    
    const [stopDetailsResp,
        departuresResp
      ] = stopIds && await Promise.allSettled([
        // gtfsStops(argument),
        gtfsStopsAllDirections(argument),
        gtfsDepartures(argument)
      ])

      const stopsDetails = stopDetailsResp && stopDetailsResp.status === "fulfilled" && stopDetailsResp.value
      ? stopDetailsResp.value
      : null

      const departures = departuresResp && departuresResp.status === "fulfilled" && departuresResp.value 
      ? departuresResp.value 
      : null

      return {stopsDetails, departures, name}
}