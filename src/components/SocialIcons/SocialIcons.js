import React from "react"
import "./SocialIcons.css"
import twitter from "../../assets/icons/icons8-twitter-circled.gif"
import Instagram from "../../assets/icons/icons8-instagram.gif"
import linkedin from "../../assets/icons/icons8-linkedin-circled.gif"
import github from "../../assets/icons/icons8-github.gif"
import facebook from "../../assets/icons/icons8-facebook.gif"

const SocialIcons = () => {
  return (
    <>
      <div className="socials">
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} alt="Facebook" loading="lazy" className="socicon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src={Instagram}
            alt="Instagram"
            loading="lazy"
            className="socicon"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src={linkedin}
            alt="Linkedin"
            loading="lazy"
            className="socicon"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={github} alt="Github" className="socicon" />
        </a>
      </div>
    </>
  )
}

export default SocialIcons
