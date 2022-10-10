export default async function searchTenRoutes() {
  
    const query = `{
      allGtfsRoutes(first: 10) {
        nodes {
          agencyId
          color
          description
          longName
          shortName
          textColor
        }
      }
    } 
      `;
  
    const data = await fetch('https://graphql.api.production.stoomlink.io/graphql', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({
        query: query
      }),
    }).then(resp => resp.json())

  return data
}  