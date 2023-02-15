import contact from '../images/04.png';
import AiBg from "../images/connections.gif";
import {
    useTheme,
    useMediaQuery,
} from "@material-ui/core";

export default function AboutBreadcrumb() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    var bgStyle = {
        backgroundImage:`url(${AiBg})`,
        backgroundSize:'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        height:isMobile ? '50%' :'120%',
        minWidth: '100%',
    };

    return (
        <div className="text-left iq-breadcrumb-one iq-bg-over black" style={bgStyle}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-left align-self-center">
                        <nav aria-label="breadcrumb" className="text-center" style={{marginTop:'45px'}}>
                            <h2 className="title"><span style={{color:'#fff',fontSize:'42px',}}>About us</span> </h2>
                            <ol className="breadcrumb main-bg">
                                <li className="breadcrumb-item"><a href="/" style={{color:'#fff',fontSize:'20px',fontFamily:'Arial, Helvetica, sans-serif'}}>Home</a></li>
                                <li className="breadcrumb-item active" style={{color:'#fff',fontSize:'17px',fontFamily:'Arial, Helvetica, sans-serif'}}>About us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}