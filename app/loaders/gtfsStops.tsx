export default async function gtfsStops({params}) {
  const {stopIds} = params
  
    const query = `{
        allGtfsStops(filter: {id: {in: ["${stopIds}"]}}) {
          nodes {
            name
            id
            gtfsConnectionsByStopId {
              nodes {
                gtfsRouteByRouteId {
                  color
                  longName
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

    /* todo : uncomment to read several stops */
    // const data = response.data && response.data.allGtfsStops && response.data.allGtfsStops.nodes && response.data.allGtfsStops.nodes.length
    // ? response.data.allGtfsStops.nodes
    // : null

    const data = response.data && response.data.allGtfsStops && response.data.allGtfsStops.nodes && response.data.allGtfsStops.nodes.length
    ? response.data.allGtfsStops.nodes[0]
    : null

  return data
}  