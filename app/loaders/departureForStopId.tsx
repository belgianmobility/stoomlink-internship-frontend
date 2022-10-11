import gtfsStops from "./gtfsStops";
import gtfsDepartures from "./gtfsDepartures";

export default async function departureForStopId(argument) {
    const {params} = argument
    const {stopIds} = params
    
    const [stopDetailsResp,
        departuresResp
      ] = stopIds && await Promise.allSettled([
        gtfsStops(argument),
        gtfsDepartures(argument)
      ])

      const stopDetails = stopDetailsResp && stopDetailsResp.status === "fulfilled" && stopDetailsResp.value
      ? stopDetailsResp.value
      : null

      const departures = departuresResp && departuresResp.status === "fulfilled" && departuresResp.value 
      ? departuresResp.value 
      : null

      return {stopDetails, departures}
}