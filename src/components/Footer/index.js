import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter} from "react-icons/fi"
import { TbBrandFacebook} from "react-icons/tb"
import { FaLinkedinIn} from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import SubFooter from "../SubFooter"
import FooterCopy from "../FooterCopy"


import "./index.css"

const Footer = () => {
  return (
    <div>
      <div className = "footer">
        <div className = "footer-container">
            <div className = "footer-boxes footer-boxes-one">
                <h5 className = "footer-box-heading">ROYAL BROTHERS</h5>
                <ul>
                    <li>
                          <a className="footer-email" href="mailto:support@royalbrothers.com" rel="noopener" >
                              <AiOutlineMail className = "icon"/>
                               support@royalbrothers.com
                        </a>
                    </li>
                    <li>
                        <BsFillTelephoneFill className = "icon" />
                          <a href = "tel:+917795687594">+917795687594</a>
                          <span> /</span>
                          <a href = "tel:+919019595595">+919019595595</a>
                    </li>
                    <li className = "space"></li>
                </ul>
            </div>
              <div className="footer-boxes footer-boxes-two">
                  <h5 className="footer-box-heading">COMPANY</h5>
                  <ul>
                      <li>
                          <a className="footer-about-us" href="/" rel="noopener" >
                              About us
                        </a>
                      </li>
                      <li>
                          <a className = "footer-blog" href="/">Blog</a>
                      </li>
                      <li>
                        <a className = "footer-careers" href="/">
                            Careers
                            <span>We're hiring</span>
                        </a>
                      </li>
                      <li>
                        <a className = "footer-contact" href="/">Contact us</a>
                      </li>
                  </ul>
              </div>
              <div className = "footer-boxes footer-boxes-three">
                  <h5 className="footer-box-heading">POLICIES</h5>
                <ul>
                    <li>
                        <a className = "footer-privacy" href="/"> Privacy Policy </a>

                    </li>
                    <li>
                          <a className="footer-condition" href="/">Term & Condition</a>
                    </li>
                </ul>
              </div>
              <div className="footer-boxes footer-boxes-four">
                  <h5 className="footer-box-heading">QUICK LINKS</h5>
                  <ul>
                      <li>
                          <a className="footer-tarif" href="/"> Tarif </a>

                      </li>
                      <li>
                          <a className="footer-offer" href="/">offers</a>
                      </li>
                      <li>
                          <a className="footer-franchise" href="/">Own a franchise</a>
                      </li>
                      <li>
                          <a className="footer-earn" href="/">Earn with us</a>
                      </li>
                      <li>
                          <a className="footer-routes" href="/">Indian bike routes</a>
                      </li>
                  </ul>
              </div>
              <div className = "footer-boxes footer-boxes-five">
                <h5 className = "footer-box-heading">FOLLOW US</h5>
                <ul>
                    <li>
                        <a className = "instagram" href="/">
                              <BsInstagram className = "icons"/>
                        </a>
                          <a className="instagram" href="/">
                              <TbBrandFacebook className="icons"/>
                          </a>
                          <a className="instagram" href="/">
                              <FiTwitter className="icons"/>
                          </a>
                          <a className="instagram" href="/">
                              <FaLinkedinIn className="icons"/>
                          </a>
                          <a className="instagram" href="/">
                              <BsYoutube className="icons"/>
                          </a>
                    </li>
                </ul>
              </div>
              <div className = "footer-boxes footer-boxes-six">
                <h5 className = "footer-box-heading">Dowload our app</h5>
                <ul>
                    <li className= "social">
                          <a className="app-store" href="https://apps.apple.com/in/app/royal-brothers-bike-rentals/id1405554590" rel="noopener">
                              <img src= "https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/ios-fcbc0490e08247e61abc51ad438f9c8c4ddad79de1158a06558cf301ef8079eb.webp"
                              alt = "app-store" className = "app-store"
                        />
                        </a>
                          <a className="play-store" href="https://play.google.com/store/apps/details?id=com.royalbrothers&hl=en_IN" rel="noopener">
                            <img src= "https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/play_store-b25c1e9f919b2b794263ac0c55102263093528f94667842de227471c46d57a3b.webp"
                                  alt="playstore" className= "play-store"
                            />
                        </a>
                    </li>
                </ul>
              </div>
        </div>

      </div>
      <SubFooter />
      <FooterCopy />
    </div>
  )
}

export default Footer