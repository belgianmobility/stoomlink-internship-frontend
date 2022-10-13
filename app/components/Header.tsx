function Header(props: { stopName: string; agencyName: string }) {

    const {stopName, agencyName} = props

    return (
        <header>
            <div className="header-name">
                {
                    stopName
                    ? (<h1> {stopName} </h1>)
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