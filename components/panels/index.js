import Shop from "./shop"
import Tabs from "./tabs"
import Panel from "./panels"
import Cards from "./cards"

const cards = [
    {popular: 'popular', heading: 'Como bookcase', subTitle: 'Get your prized possessions out in the open. Your favourite books? Mementoes from your travels?', image: '/images/bookcase.svg', price: '$120'},
    {popular: 'popular', heading: 'Como bookcase', subTitle: 'Get your prized possessions out in the open. Your favourite books? Mementoes from your travels?', image: '/images/bookcase.svg', price: '$120'},
    {popular: 'popular', heading: 'Como bookcase', subTitle: 'Get your prized possessions out in the open. Your favourite books? Mementoes from your travels?', image: '/images/bookcase.svg', price: '$120'},
    {popular: 'popular', heading: 'Como bookcase', subTitle: 'Get your prized possessions out in the open. Your favourite books? Mementoes from your travels?', image: '/images/bookcase.svg', price: '$120'},
    {popular: 'popular', heading: 'Como bookcase', subTitle: 'Get your prized possessions out in the open. Your favourite books? Mementoes from your travels?', image: '/images/bookcase.svg', price: '$120'},
]

const Content = ({})=>{
    return(
        <>
            <Shop>
                <Tabs>
                    <Panel title='cards'>
                        <Cards cards={cards} />
                    </Panel>
                    <Panel title='services'>This is the services Panel</Panel>
                </Tabs>
            </Shop>
        </>
    )
}

export default Content