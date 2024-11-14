// export default function SendMessage() {
//     return (
//         <section className="pt-0">
//             <div className="container">
//                 <div className="row  align-items-center ">
//                     <div className="col-sm-6">
//                         <h2 className="text-left mb-4" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Let's talk about for your<br/> business.</h2>
//                         <div className="response-output "></div>
//                         <form action="#" method="post" className="">
//                             <div className="contact-form">
//                                 <div className=""><input type="text" name="your-name" className="form-control text "
//                                                          placeholder="Your Name"/></div>
//                                 <div className=""><input type="text" name="your-email"
//                                                          className="form-control text " placeholder="Your Email"/>
//                                 </div>
//                                 <div className=""><input type="text" name="your-subject"
//                                                          className="form-control text " placeholder="Subject"/></div>
//                                 <div className=""><textarea name="your-message" cols="40" rows="10"
//                                                             className="form-control textarea "
//                                                             placeholder="Your Message"></textarea></div>
//                                 <div>
//                                     <button id="submit-4" name="submit" type="submit" value="Send"
//                                             className="button d-block w-100">Send Message
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="mt-5 col-sm-6 offset-lg-1 col-lg-5 offset-md-1 col-md-5">
//                         <div className="wrapper">
//                             <div className="contact-box d-flex">
//                                 <i aria-hidden="true" className="ion ion-android-call"></i>
//                                 <div className="service-detail">
//                                     <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Phone support</h4>
//                                     <ul className="list-inline mb-0">
//                                         <li><a href="tel:+0123456789" style={{color:'#fff'}}> +918979523908</a></li>
//                                         <li><a href="tel:+0123456789" style={{color:'#fff'}}> +919818810837</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="contact-box d-flex   ">
//                                 <i aria-hidden="true" className="fa fa-envelope-o"></i>
//                                 <div className="service-detail">
//                                     <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Email us</h4>
//                                     <ul className="list-inline mb-0">
//                                         <li><a
//                                             href="mailto:contact@deepaarogya.com" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}> contact@deepaarogya.com</a>
//                                         </li>
//                                         <li><a
//                                             href="mailto:deepaarogya002@gmail.com" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}> deepaarogya002@gmail.com</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="contact-box d-flex   ">
//                                 <i aria-hidden="true" className="ion ion-android-share-alt"></i>
//                                 <div className="service-detail">
//                                     <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Social media</h4>
//                                     <ul>
//                                         <li className="d-inline"><a href="#"><i style={{color:'#fff'}}
//                                             className="fa fa-facebook-f"></i></a></li>
//                                         <li className="d-inline"><a href="#"><i className="fa fa-twitter" style={{color:'#fff'}}></i></a>
//                                         </li>
//                                         <li className="d-inline"><a href="#"><i className="fa fa-instagram"  style={{color:'#fff'}}></i></a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import React, { useState } from "react";

export default function SendMessage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = {
            name,
            email,
            subject,
            message,
        };

        try {
            const res = await fetch("https://dashboard.deepaarogya.com/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json();
                setResponse(data.success);
                // Reset the form fields
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                const errorData = await res.json();
                setResponse(errorData.error || "Failed to submit the form.");
            }
        } catch (error) {
            setResponse("An error occurred while sending your message.");
        }
    };

    return (
        <section className="pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <h2
                            className="text-left mb-4"
                            style={{ color: "#fff", fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                            Let's talk about your<br /> business.
                        </h2>
                        <div className="response-output">{response}</div>
                        <form onSubmit={handleSubmit} className="">
                            <div className="contact-form">
                                <div>
                                    <input
                                        type="text"
                                        name="your-name"
                                        className="form-control text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="your-email"
                                        className="form-control text"
                                        placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="your-subject"
                                        className="form-control text"
                                        placeholder="Subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="your-message"
                                        cols="40"
                                        rows="10"
                                        className="form-control textarea"
                                        placeholder="Your Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        id="submit-4"
                                        name="submit"
                                        type="submit"
                                        value="Send"
                                        className="button d-block w-100"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-5 col-sm-6 offset-lg-1 col-lg-5 offset-md-1 col-md-5">
                        <div className="wrapper">
                            <div className="contact-box d-flex">
                                <i aria-hidden="true" className="ion ion-android-call"></i>
                                <div className="service-detail">
                                    <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Phone support</h4>
                                    <ul className="list-inline mb-0">
                                        <li><a href="tel:+0123456789" style={{color:'#fff'}}> +918979523908</a></li>
                                        <li><a href="tel:+0123456789" style={{color:'#fff'}}> +919818810837</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-box d-flex">
                                <i aria-hidden="true" className="fa fa-envelope-o"></i>
                                <div className="service-detail">
                                    <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Email us</h4>
                                    <ul className="list-inline mb-0">
                                        <li><a href="mailto:contact@deepaarogya.com" style={{color:'#fff'}}> contact@deepaarogya.com</a></li>
                                        <li><a href="mailto:deepaarogya002@gmail.com" style={{color:'#fff'}}> deepaarogya002@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-box d-flex">
                                <i aria-hidden="true" className="ion ion-android-share-alt"></i>
                                <div className="service-detail">
                                    <h4 className="mb-2" style={{color:'#fff',fontFamily:'Arial, Helvetica, sans-serif'}}>Social media</h4>
                                    <ul>
    <li className="d-inline">
        <button style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-facebook-f"></i>
        </button>
    </li>
    <li className="d-inline">
        <button style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-twitter"></i>
        </button>
    </li>
    <li className="d-inline">
        <button style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-instagram"></i>
        </button>
    </li>
</ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
