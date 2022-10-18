function Header(props: { name: string }) {

    const { name } = props

    // const { name, gtfsAgencyByAgencyId } = name || {}
    // const { name: agencyName } = gtfsAgencyByAgencyId || {}

    return (
        <header>
            <div className="header-name">
                {
                    name
                        ? (<h1> {name} </h1>)
                        : (<p>error no name</p>)
                }
            </div>
            {/* <div className="header-agency">
                {
                    agencyName
                        ? (<div> {agencyName} </div>)
                        : (<p>error no agency</p>)
                }
            </div> */}
        </header>
    )
}

export default Header