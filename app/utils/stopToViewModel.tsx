function stopToViewModel(data) {
    console.log("incomingData", data);

    const parsedData = data.map((stop) => {
        let parsedStop = {
            name: stop.name,
            stopId: stop.id,
            agencyId: stop.gtfsAgencyByAgencyId.id,
            agencyName: stop.gtfsAgencyByAgencyId.name,
            routesAtStop: stop.gtfsConnectionsByStopId.nodes.map((route) => {
                let parsedRoute = {
                    routeColorHex: `#${route.gtfsRouteByRouteId.color}`,
                    routeShortName: route.gtfsRouteByRouteId.shortName,
                    routeTextColorHex: `#${route.gtfsRouteByRouteId.textColor}`
                }
                // console.log("parsedRoute", parsedRoute);
                return parsedRoute
            })
        }
        console.log(stop.gtfsConnectionsByStopId.nodes);
        
        console.log("parsedStop", parsedStop);
        return parsedStop
    })
    console.log("parsedData", parsedData);
    return parsedData
}
export default stopToViewModel