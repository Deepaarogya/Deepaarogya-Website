import contact from '../images/Flat-color-Modern-Isometric-Illustration-design-Artificial-Intelligence-1-1.png';
import AiBg from "../images/Blue-Glitter-Background-GIFs-Tenor.gif";
export default function Breadcrumb() {
    var bgStyle = {
        backgroundImage:`url(${AiBg})`,
        backgroundSize:'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        height:'120%',
        minWidth: '100%',
    };

    return (
        <div className="text-left iq-breadcrumb-one iq-bg-over black" style={bgStyle}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-left align-self-center">
                        <nav aria-label="breadcrumb" className="text-left">
                            <h2 className="title"><span style={{color:'#fff',fontSize:'42px'}}>Contact us</span> </h2>
                            <ol className="breadcrumb main-bg">
                                <li className="breadcrumb-item"><a href="/" style={{color:'#fff',fontSize:'20px'}}>Home</a></li>
                                <li className="breadcrumb-item active" style={{color:'#fff',fontSize:'17px'}}>Contact us</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-lg-8 col-md-8 text-right wow fadeInRight">
                        <img alt="banner"
                         className="img-fluid float-right"
                         src={contact}/>
                    </div>
                </div>
            </div>
        </div>
    );
}