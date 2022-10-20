function Header(props: { name: string }) {

    const { name } = props

    return (
        <header>
            <div className="header-name">
                {
                    name
                        ? (<h1> {name} </h1>)
                        : (<p>error no name</p>)
                }
            </div>
        </header>
    )
}

export default Header