import iv from "../images/iv-drip-therapy.jpg"

export const ContactUsSection = () => {
    return(
        <>
            <section className="contact" id="contact" style={{
                backgroundImage : `url(${iv})`,
                height : '100vh',
                backgroundSize : 'cover'
            }}>
                <div className="max-width">
                    <h2 className="title">Contact Us</h2>
                    <div className="contact-content">
                        <div className="column left">

                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-phone"></i>
                                    <div className="info">
                                        <div className="sub-title"><a href="https://wa.me/+27662979493">+27662979493</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="sub-title">Johannesburg South . 2031</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="sub-title"><a href="mailto:elixirtherapy@outlook.com">elixirtherapy@outlook.com</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"operating-hours-div"}>
                            <h2 className={"operating-hours"}>Operating Hours</h2>
                            <div className="column right">
                                <div className="square">
                                    <span className="operating-hours-span">Monday - Friday : 09.00 AM - 06.00 PM</span>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="column right">
                                <div className="square">
                                    <span className="operating-hours-span">Saturday - Sunday : 11.00 AM - 03.00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}