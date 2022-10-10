import { useLoaderData } from "@remix-run/react";

function SmartDisplay() {

    const data = useLoaderData()
  
    console.log(data);
  
    return (
      <div>
        <h1>Le stop ID est : </h1>
        <h2>{data.params.stopIds}</h2>
      </div>
    )
  }

  export default SmartDisplay

  //just for test PR