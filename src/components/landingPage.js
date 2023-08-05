import Navbar from './landing-page/navbar';
import Headcontent from './landing-page/headcontent';
import Popular from './landing-page/popular';
import Mainreason from './landing-page/mainreason';
import Promotion from './landing-page/pomotion';
import Pricelist from './landing-page/pricelist';
import Copyright from './landing-page/copyRight';


const landingpage = () => {
    return(
        <div>
            <Navbar />
            <Headcontent />
            <Popular />
            <Mainreason />
            <Promotion />
            <Pricelist />
            <Copyright />
        </div>
    )
}

export default landingpage;