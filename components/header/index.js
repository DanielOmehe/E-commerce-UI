import Header from "./header"
import Links from "./links"
import Navigation from "./navigation"

const HeaderComponent = ()=>{
    return(
        <>
            <Header>
                <Navigation>
                    <Links />
                </Navigation>
            </Header>
        </>
    )
}

export default HeaderComponent