import React from "react"
import githubIcon  from "../../images/github.svg"


const Card = ({ heading, paragraph, imgUrl, projectLink, projectPage }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon"
        >
        </a>
        <a
            href={projectPage ? projectPage : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
        >
          Project page
        </a>
      </div>
    </div>
  )
}

export default Card
