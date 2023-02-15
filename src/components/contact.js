export default function Contact() {
    var style = {
        gradient_bg:{
            background: 'linear-gradient(90deg, rgba(33,130,254,1) 0%, rgba(141,95,250,1) 37%, rgba(161,89,249,1) 71%, rgba(226,68,247,1) 100%)'
        },
    }
    return (

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="consult-services wow fadeInUp contact-detail text-center" style={{background:'#121228'}}>
                            <div className="circle-effect"><i aria-hidden="true" className="fa fa-mobile-phone" style={{color:'#fff'}}></i>
                            </div>
                            <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Contact</h4>
                            <p className="mb-0" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>+918979523908<br/>
                                +918755512976
                                </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="consult">
                            <div className="consult-services wow fadeInUp contact-detail text-center" style={style.gradient_bg}>
                                <div className="circle-effect">
                                    <i aria-hidden="true"
                                       className="fa fa-map" style={{color:'#fff'}}></i>
                                </div>
                                <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Address</h4>
                                <p className="mb-0" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>Plot No-40, Roja jalalpur,Noida Extension<br/>
                                    Greater Noida</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="consult">
                            <div className="consult-services wow fadeInUp contact-detail text-center" style={{background:'#121228'}}>
                                <div className="circle-effect"><i aria-hidden="true"
                                                                  className="fa fa-send"></i></div>
                                <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Mail</h4>
                                <p className="mb-0" style={{color:'#fff',fontSize:'16px',fontFamily:'Arial, Helvetica, sans-serif'}}>contact@deepaarogya.com<br/>
                                info@deepaarogya.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}