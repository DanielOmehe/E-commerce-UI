const Text = ({variant, children})=>{
    return(
        <>
            <p className={variant}>{ children }</p>
            <style jsx>{`
                .book-desc{
                    font-weight: 400;
                    font-size: 13px;
                    color: #373B42;
                    line-height: 140%;
                }
                .popular{
                    color: #5956e9;
                    font-size: 12px;
                }
                .price{
                    color: #5856e7;
                    font-size: 24px;
                    font-weight: 600;
                    position: absolute;
                    top: 222px;
                    left: 32px;
                }
            `}</style>
        </>
    )
}

export default Text