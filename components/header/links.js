import Link from "./link";
const links = [
    {name: 'Wallet', target: '/target'},
    {name: 'History', target: '/history'},
    {name: 'Account', target: '/account'}
];

const Links = ()=>{
    return(
        <>
            {
                links.map(({name, target})=>{
                    return(
                        <Link target={target}>{name}</Link>
                    )
                })
            }      
        </>
    )
}

export default Links