function Header(props: { name: string, stopsDetails:any}) {

    const { name, stopsDetails } = props

    return (
        <header>
            <div className="header-name">
                {
                    name
                        ? (<h1> {name} </h1>)
                        : (<p>error no name</p>)
                }
                {
                    stopsDetails
                        ? (<p> {JSON.stringify(stopsDetails)} </p>)
                        : null
                }
            </div>
        </header>
    )
}

export default Header