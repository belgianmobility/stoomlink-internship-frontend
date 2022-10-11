export default async function gtfsDepartures({params}) {
  const {stopIds} = params
    /* query for info stop ID*/
    // const query = `{
    //     allGtfsStops(filter: {id: {in: ["${stopIds}"]}}) {
    //       nodes {
    //         name
    //         id
    //         gtfsConnectionsByStopId {
    //           nodes {
    //             gtfsRouteByRouteId {
    //               color
    //               longName
    //               shortName
    //               textColor
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    //   `;


    const query = `{
      allGtfsDepartures(first: 10, filter: {stopId: {in: ["${stopIds}"]}}) {
        nodes {
          departureDateTime
          isFirstOfDay
          isLastOfDay
          realtimeDepartureDateTime
          gtfsRouteByRouteId {
            shortName
            textColor
            color
            agencyId
            longName
          }
          headsign
        }
      }
    }
    `;

    const date = new Date()

    const query2 = `{
        allGtfsDepartures(
          first: 10,
          orderBy: DEPARTURE_DATE_TIME_ASC,
          filter: {stopId: {in: ["${stopIds}"]},
          departureDateTime: {greaterThan: "${date.toISOString()}"},
          pickupType: {notEqualTo: 1}
        }
      ) 
      {
        nodes {
          departureDateTime
          isFirstOfDay
          isLastOfDay
          realtimeDepartureDateTime
          gtfsRouteByRouteId {
            shortName
            textColor
            color
            agencyId
            longName
          }
          headsign
        }
      }
    }
    `;
  
    const response = await fetch('https://graphql.api.production.stoomlink.io/graphql', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        query: query2
      }),
    }).then(resp => resp.json())    

    const data = response.data && response.data.allGtfsDepartures && response.data.allGtfsDepartures.nodes && response.data.allGtfsDepartures.nodes.length
    ? response.data.allGtfsDepartures.nodes
    : null
    console.log("response : ",response);
    
    console.log("data : ",data);

  return data
}  