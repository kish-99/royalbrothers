import React from 'react'
import { AiOutlineHeart} from "react-icons/ai"
import "./index.css"

const FooterCopy = () => {
  return (
      <div className = "footer-copy">
        <p>
            Made with
            <AiOutlineHeart className = "icon"/>
            by team brothers
        </p>
    </div>
  )
}

export default FooterCopy