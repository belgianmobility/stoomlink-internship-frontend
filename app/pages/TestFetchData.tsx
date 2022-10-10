import { useLoaderData } from "@remix-run/react";

function TestFetchData() {

    const data = useLoaderData()
  
    console.log("data from route", data.data.allGtfsRoutes.nodes);
    const { nodes } = data.data.allGtfsRoutes  //destructure
  
    return (
      <div>
        <p>Test fetch data</p>
        <ul>
          {nodes.map((item: any, index: number) => (
            <li key={index}> {item.shortName}</li>
          ))}
        </ul>
      </div>
    )
  }

  export default TestFetchData
