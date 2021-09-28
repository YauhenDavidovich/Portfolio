import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <a
              href={data.promotionPara ? data.promotionPara : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download"
          >
          </a>

        </div>
      </div>
    </div>
  )
}

export default Promotion
