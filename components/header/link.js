const Link = ({target, children})=>{
    return(
        <>
            <li className="listItem">
                <a href={target} className='link'>{children}</a>
            </li>
            <style jsx>{`
                .listItem{
                    list-style: none;
                    margin: 0 35px;
                }
                .link{
                    color: #fff;
                    font-weight: 200;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}

export default Link