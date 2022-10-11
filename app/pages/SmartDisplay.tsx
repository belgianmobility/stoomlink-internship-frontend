import { useLoaderData } from "@remix-run/react";

function SmartDisplay() {

    const data = useLoaderData()

    /* option possible */
    // if (!stopIds) {
    //     return (<div>erreur</div>)
    // }

    const { name } = data ? data : {} // sort version : const { name } = data || {}

    return (
        <div>
            {data ? 
                (<div>
                    <h1>{`Le stop name est : ${name}`}</h1>
                </div>
                ) : (
                <h1>Error not found</h1>
                )}
        </div>
    )
  }

  export default SmartDisplay