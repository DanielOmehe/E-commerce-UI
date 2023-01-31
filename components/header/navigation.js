const Navigation = ({children})=>{
    return(
        <>
            <nav className="navbar">
                <ul className="listitems">{children}</ul>
            </nav>
            <style jsx>{`
                .navbar{
                    width: 100%;
                    height: 100%;
                }
                .listitems{
                    width: 90%;
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
            `}</style>
        </>
    )
}

export default Navigation