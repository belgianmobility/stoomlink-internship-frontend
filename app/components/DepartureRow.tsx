function DepartureRow(props: any) {

    return(
        <div>
            departure
        </div>
    )
}

export default DepartureRow

// {
//     departures && departures.length
//     ? (<div>
//         <ul>
//           {departures.map((item: any, index: number) => {
//             const departureDateTimeLocaleString = new Date(item.departureDateTime).toLocaleTimeString('fr-EU', { hour: '2-digit', minute: '2-digit' })
//             return (<li key={index} className="departure-row">
//               {/* {`${departureDateTimeLocaleString} : ${item.headsign}`} */}
//               <div className="short-name" style={{backgroundColor: `#${item.gtfsRouteByRouteId.color}`}}>{item.gtfsRouteByRouteId.shortName}</div>
//               <div className="headsign">{item.headsign}</div>
//               <div className="departure-time">{departureDateTimeLocaleString}</div>
//             </li>)
//           })}
//         </ul> 
//       </div>

//     )
//     : (<p>error no departure</p>)
// }