import Head from "next/head"
import HeaderComponent from "../components/header"
import Content from "../components/panels"

const Home = ()=>{
    return (
        <>
            <HeaderComponent />
            <Content />
        </>
    )
}

export default Home