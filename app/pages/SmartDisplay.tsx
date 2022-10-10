import { useLoaderData } from "@remix-run/react";

function SmartDisplay() {

    const data = useLoaderData()
  
    console.log(data);
    const { stopIds } = data.params;

    /* option possible */
    // if (!stopIds) {
    //     return (<div>erreur</div>)
    // }

    return (
        <div>
            {stopIds ? 
                (<div>
                    <h1>Le stop ID est : </h1>
                    <h2>{ stopIds }</h2>
                </div>
                ) : (
                <h1>Error not found</h1>
                )}
        </div>
    )
  }

  export default SmartDisplay