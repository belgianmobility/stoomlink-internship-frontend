export default async function gtfsDepartures({ params }) {
  const { stopIds } = params
  const stopIdsArray = stopIds.split(',')

  const date = new Date()

  const query = `{
        allGtfsDepartures(
          first: 10,
          orderBy: DEPARTURE_DATE_TIME_ASC,
          filter: {stopId: {in: [${stopIdsArray.map((el) => (`"${el}"`)).join(',')}]},
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
      query: query
    }),
  }).then(resp => resp.json())

  const data = response.data && response.data.allGtfsDepartures && response.data.allGtfsDepartures.nodes && response.data.allGtfsDepartures.nodes.length
    ? response.data.allGtfsDepartures.nodes
    : null

  return data
}  