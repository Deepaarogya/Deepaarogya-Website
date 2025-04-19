import service1 from '../images/01.png';
import upload from '../images/upload.png';
import loading from '../images/loading-bar.png';
import load from '../images/load.png';
import report from '../images/report.png';
import service2 from '../images/02.png';
import service3 from '../images/03.png';
import HeightBox from "./heightBox";
import { useTheme, useMediaQuery } from "@material-ui/core";

export default function Process() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

    const getResponsiveStyles = () => {
        if (isMobile) {
            return {
                title: {
                    fontSize: '32px',
                    lineHeight: '36px',
                    marginBottom: '30px'
                },
                processTitle: {
                    fontSize: '20px',
                    marginBottom: '10px'
                },
                processText: {
                    fontSize: '16px',
                    lineHeight: '24px'
                },
                processContainer: {
                    marginBottom: '30px',
                    padding: '20px'
                },
                image: {
                    width: '80px',
                    height: '80px',
                    marginBottom: '15px'
                }
            };
        } else if (isTablet) {
            return {
                title: {
                    fontSize: '32px',
                    lineHeight: '36px',
                    marginBottom: '35px'
                },
                processTitle: {
                    fontSize: '20px',
                    marginBottom: '12px'
                },
                processText: {
                    fontSize: '16px',
                    lineHeight: '24px'
                },
                processContainer: {
                    marginBottom: '35px',
                    padding: '25px'
                },
                image: {
                    width: '90px',
                    height: '90px',
                    marginBottom: '18px'
                }
            };
        } else if (isLaptop) {
            return {
                title: {
                    fontSize: '32px',
                    lineHeight: '36px',
                    marginBottom: '40px'
                },
                processTitle: {
                    fontSize: '20px',
                    marginBottom: '15px'
                },
                processText: {
                    fontSize: '16px',
                    lineHeight: '24px'
                },
                processContainer: {
                    marginBottom: '40px',
                    padding: '30px'
                },
                image: {
                    width: '100px',
                    height: '100px',
                    marginBottom: '20px'
                }
            };
        } else {
            return {
                title: {
                    fontSize: '32px',
                    lineHeight: '36px',
                    marginBottom: '45px'
                },
                processTitle: {
                    fontSize: '20px',
                    marginBottom: '15px'
                },
                processText: {
                    fontSize: '16px',
                    lineHeight: '24px'
                },
                processContainer: {
                    marginBottom: '45px',
                    padding: '35px'
                },
                image: {
                    width: '110px',
                    height: '110px',
                    marginBottom: '25px'
                }
            };
        }
    };

    const styles = getResponsiveStyles();

    return (
        <section className="xamin-custom-bg iq-pb-70">
            <HeightBox height={isMobile ? 20 : isTablet ? 25 : 30}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-box wow fadeInUp text-center">
                            <h2 style={{color:'#fff', ...styles.title}}>Our Deepaarogya AI Testing Process</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-md-4 col-sm-12 ${isMobile ? 'mb-4' : ''}`}>
                        <div className="xamin-process xamin-circle right wow fadeInUp text-center"
                             data-wow-delay="0.6s" style={styles.processContainer}>
                            <div className="circle-effect">
                                <img src={upload} alt="Upload Process" style={styles.image}/>
                            </div>
                            <h5 className="mb-2" style={{color:'#fff', ...styles.processTitle, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                Upload
                            </h5>
                            <p className="mb-0" style={{color:'#fff', ...styles.processText, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                Upload Handwritten prescription image or PDF
                            </p>
                        </div>
                    </div>
                    <div className={`col-md-4 col-sm-12 ${isMobile ? 'mb-4' : 'mt-4 mt-md-0'}`}>
                        <div className="xamin-process xamin-circle right wow fadeInUp text-center"
                             data-wow-delay="0.6s" style={styles.processContainer}>
                            <div className="circle-effect">
                                <img src={load} alt="Process Step" style={styles.image}/>
                            </div>
                            <h5 className="mb-2" style={{color:'#fff', ...styles.processTitle, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                Process
                            </h5>
                            <p className="mb-0" style={{color:'#fff', ...styles.processText, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                Extract data from prescription using our AI Model
                            </p>
                        </div>
                    </div>
                    <div className={`col-md-4 col-sm-12 ${isMobile ? '' : 'mt-4 mt-md-0'}`}>
                        <div className="xamin-process xamin-circle wow fadeInUp text-center" 
                             data-wow-delay="0.6s" style={styles.processContainer}>
                            <div className="circle-effect">
                                <img src={report} alt="Report Generation" style={styles.image}/>
                            </div>
                            <h5 className="mb-2" style={{color:'#fff', ...styles.processTitle, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                Report
                            </h5>
                            <p className="mb-0" style={{color:'#fff', ...styles.processText, fontFamily:'Arial, Helvetica, sans-serif'}}>
                                Save patient data to hospital database in real time
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}