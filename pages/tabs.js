import { Children } from "react";

const Tabs = ({activeTab, onChange=()=>{}, labels, variant, tabClass, content})=>{
    return(
        <Fragment>
            <div className={variant}>
                <ul className={tabClass}>
                    {labels.map(({key, label}) => {
                        return(
                            <li key={key} className={key === activeTab ? 'active' : ''} onClick={() => {onChange(key)}} >{label}</li>
                        )
                    })}
                </ul>
                <div className={content}>
                    {
                        Children.map(children, (child) =>(
                            child.props.tabKey === activeTab ? child : null
                        ))
                    }
                </div>
            </div>
            <style jsx>{`
                .tabs{
                    height: 44px;
                    width: 350px;
                    left: 0px;
                    top: 21px;
                    border-radius: 0px;
                    border-bottom: 1px solid rgba(0,0,0,.24);
                    position: absolute;
                }
                .recent-tabs{
                    height: 44px;
                    width: 100%;
                    left: 0px;
                    top: 25px;
                    border-radius: 0px;
                    border-bottom: 1px solid rgba(0,0,0,.24);
                    position: absolute;
                }
                .tab-labels{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    color: #7D8FB3;
                    position: absolute;
                    height: 45.11111068725586px;
                    width: 278px;
                    left: 47px;
                    top: 0px;
                    border-radius: 0px;
                }
                .recent-tab-labels{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    color: #7D8FB3;
                    position: absolute;
                    height: 44.11111068725586px;
                    width: 278px;
                    left: 201px;
                    top: 0;
                    border-radius: 0px;
                }
                .tab-labels li{
                    font-size: 12px;
                    font-weight: 900;
                    cursor: pointer;
                    list-style: none;
                }
                .recent-tab-labels li{
                    font-size: 12px;
                    font-weight: 900;
                    cursor: pointer;
                    list-style: none;
                }
                .popular-tabs{
                    width: 100%;
                    height: 45.11111068725586px;
                    left: 0;
                    top: 25px;
                    border-bottom: 1px solid rgba(0,0,0,.24);
                    border-radius: 0px;
                    position: absolute;
                }
                .popular-tab-labels{
                    height: 44.11111068725586px;
                    width: 278px;
                    left: 95px;
                    top: 0px;
                    color: #7D8FB3;
                    border-radius: 0px;
                    position: absolute;
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                }
                .popular-tab-labels li{
                    font-size: 12px;
                    font-weight: 900;
                    cursor: pointer;
                    list-style: none;
                }
                li.active{
                    color: #FF6633;
                    padding-bottom: 25px;
                    border-bottom: 2px solid red;
                }
                .content{
                    height: 245px;
                    width: 310px;
                    left: 20px;
                    top: 35px;
                    position: absolute;
                    border-radius: 0px;
                    margin: 30px auto;
                }
                .popular-content{
                    width: 445px;
                    height: 550px;
                    top: 46px;
                    position: absolute;
                    z-index: 0;
                }
                .recent-transactions-content{
                    height: 458px;
                    width: 550px;
                    left: 44px;
                    top: 100px;
                    position: absolute;
                }
            `}</style>
        </Fragment>
    )
}

export default Tabs