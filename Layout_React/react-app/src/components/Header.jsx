import { Link } from "react-router-dom";

const Header = ({links}) => {
    return (
        <>
            <nav>
                <h1>PLay NFT</h1>
                <ul>
                   {links.map((link, index)=>(
                    <Link to={link.path}>
                        <li key={index}>{link.name}</li>
                    </Link>
                   ))}                
                </ul>
                <input type="search" name="search" id="search" value="Search"/>
                <input type="button" value="Register" />
            </nav>
        </>
    )
}

export default Header;