import { Children, useState } from "react"

const tabs = [
    {name: 'Cards', key: 'cards'},
    {name: 'Services', key: 'services'}
]

const Tabs = ({ children, variant})=>{
    const [activeTab, setActiveTab] = useState(tabs[0].key)
    return(
        <>
            <div className={variant}>
                <ul className='tabs'>
                    {tabs.map(({name, key}) => {
                        return(
                            <li key={key} className={key === activeTab ? 'active' : ''} onClick={() => setActiveTab(key)} >{name}</li>
                        )
                    })}
                </ul>
                <div className='content'>
                    {
                        Children.map(children, (child) =>(
                            child.props.title === activeTab ? child : null
                        ))
                    }
                </div>
            </div>
            <style jsx>{`
                    .tabs{
                        width: 220px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 35px;
                    }
                    li{
                        height: 36px;
                        width: 100px;
                        list-style: none;
                        text-align: center;
                        display: grid;
                        place-items: center;
                        border-radius: 20px;
                        background: #eee1fe;
                        cursor: pointer;
                    }
                    .active{
                        background: #fff;
                        color: #5956e9;
                    }
                    .content{ 
                        width: 100%;
                    }
            `}</style>
        </>
    )
}

export default Tabs