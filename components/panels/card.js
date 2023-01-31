const Card = ({children})=>{
    return(
        <>
            <div className="card">
                {children}
            </div>
            <style jsx>{`
                .card{
                    height: 282px;
                    width: 353px;
                    border-radius: 0px;
                    background: #fff;
                    margin-right: 39px;
                    margin-bottom: 43px;
                    border-radius: 30px;
                    position: relative;
                }
            `}</style>
        </>
    )
}

export default Card