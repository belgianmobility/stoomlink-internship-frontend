import stopToViewModel from "~/utils/stopToViewModel";

export default async function gtfsStops({params}) {
  const {stopIds} = params

  const stopIdsArray = stopIds.split(',')
  
    const query = `{
      allGtfsStops(filter: {id: {in: [${stopIdsArray.map((el) => (`"${el}"`)).join(',')}]}}) {
        nodes {
          name
          id
          gtfsAgencyByAgencyId {
            name
            id
          }
          gtfsConnectionsByStopId {
            nodes {
              gtfsRouteByRouteId {
                id
                color
                shortName
                textColor
              }
            }
          }
        }
      }
    }
      `;
    
    const response = await fetch('https://graphql.api.production.stoomlink.io/graphql', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        query: query
      }),
    }).then(resp => resp.json())

    /* to read several stops */
    const data = response.data && response.data.allGtfsStops && response.data.allGtfsStops.nodes && response.data.allGtfsStops.nodes.length
    ? response.data.allGtfsStops.nodes
    : null
  return stopToViewModel(data)
}  