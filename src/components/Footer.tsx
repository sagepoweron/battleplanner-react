export default Footer;
import image1 from "../assets/logo.png";

function Footer()
{
    return (
        <footer>
            <div className="column">
                <div className="column card">
                    <img src={image1} alt="site logo"></img>
                    <h3>J Tate 2025</h3>
                </div>
            </div>
            
            
        </footer>
    );
}