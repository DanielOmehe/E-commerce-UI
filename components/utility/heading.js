const Heading = ({variant, children})=>{
    return(
        <>
            <h3 className={variant}>{children}</h3> 
            <style jsx>{`
                .book-title{
                    color: #292930;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
            `}</style>
        </>
    )
}

export default Heading