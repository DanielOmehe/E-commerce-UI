const Header = ({children})=>{
    return (
        <>
            <header className="header">{children}</header>
            <style jsx>{`
                .header{
                    width: 100%;
                    height: 74px;
                    background: #5956E9;
                }
            `}</style>
        </>
    )
}

export default Header