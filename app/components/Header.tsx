function Header(props: { stopDetails: any }) {

    const {stopDetails} = props

    const {name, gtfsAgencyByAgencyId} = stopDetails || {} // --> header
    const {name : agencyName} = gtfsAgencyByAgencyId || {} // --> header

    return (
        <header>
            <div className="header-name">
                {
                    name
                    ? (<h1> {name} </h1>)
                    : (<p>error no name</p>)
                }
            </div>
            <div className="header-agency">
                {
                    agencyName
                    ? (<div> {agencyName} </div>)
                    : (<p>error no agency</p>)
                }
            </div>
        </header>
    )
}

export default Header