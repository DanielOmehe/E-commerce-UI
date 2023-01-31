const Shop = ({children})=>{
    return(
        <>
            <div className="content">
                <h1 className="heading">Shop</h1> 
                <div>{children}</div>
            </div>

            <style jsx>{`
                .content{
                    width: 100%;
                    height: 903px;
                    padding: 10px 75px;
                    background: #e5e5e5;
                }
                .heading{
                    font-size: 36px;
                    font-weight: 600;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}

export default Shop