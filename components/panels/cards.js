import Heading from "../utility/heading"
import Text from "../utility/text"
import Card from "./card"

const Cards = ({cards})=>{
    return(
        <>
            <div className="cards">
                {
                    cards.map(({popular, heading, subTitle, image, price}) => {
                        return(
                            <Card>
                                <div className="popular">
                                    <Text variant="popular">POPULAR</Text>
                                </div>
                                <div className="book-case">
                                    <div className="book">
                                        <Heading variant='book-title'>{heading}</Heading>
                                        <Text variant='book-desc'>{subTitle}</Text>
                                    </div>
                                    <img src={image} alt='book'/>    
                                </div>
                                <Text variant='price'>{price}</Text>
                            </Card>
                        )
                    })
                }
            </div>
            <style jsx>{`
                .cards{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                }
                .popular{
                    height: 35px;
                    width: 90px;
                    border-radius: 25px;
                    display: grid;
                    place-items: center;
                    margin: 32px 0 30px 32px; 
                    background: #FFE0F9;
                    color: #5856E7;

                }
                .book-case{
                    display: flex;
                    margin-top: 0;
                    align-items: center;
                    justify-content: space-between;
                    position: absolute;
                    top: 72px;
                    left: 32px;
                }
                .book-case img{
                    position:  absolute;
                    left: 205px;
                    top: 2px;
                }
                .book{
                    width: 200px;
                    top: 20px;
                    position: absolute;
                    padding-right: 10px;
                }
            `}</style>
        </>
    )
}

export default Cards