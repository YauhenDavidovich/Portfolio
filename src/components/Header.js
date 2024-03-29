import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"

const Header = () => {
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    <Fade bottom>
                        <h2>
                            HI THERE <span role="img" aria-label="Emoji">👋</span>,
                            I'M
                        </h2>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="heading-wrapper">
                            <h1>
                                {data.headerTagline[0]
                                    ? data.headerTagline[0]
                                    : "Building digital"}
                            </h1>
                            <h1>
                                {" "}
                                {data.headerTagline[1]
                                    ? data.headerTagline[1]
                                    : "products, brands"}
                            </h1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <p>{data.headerParagraph}</p>
                    </Fade>
                    <Fade bottom>
                        <a
                            href={`mailto:${
                                data.contactEmail ? data.contactEmail : "hello@chetanverma.com"
                            }`}
                            className="primary-btn"
                        >
                            CONNECT WITH ME
                        </a>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Header
