import React, { useRef } from "react"
import { Link } from "gatsby"

import "./StripeMenu.scss"
import MenuItem from "./MenuItem"
import { MENU_ITEMS } from "./utils"
import buildings from "./smallbuildings-small.jpg"
import tower from "./smalltower-small.jpg"

const StripeMenu = () => {
  const backgroundRef = useRef(null)
  const navRef = useRef(null)

  return (
    <div id="Stripe-Menu">
      <nav ref={navRef}>
        <div ref={backgroundRef} className="dropdownBackground">
          <span className="arrow"></span>
        </div>

        <ul className="menu-item">
          {MENU_ITEMS.map(item => (
            <MenuItem
              key={item.name}
              item={item}
              nav={navRef}
              background={backgroundRef}
            />
          ))}
        </ul>
      </nav>
      <div className="left-column">
        <h1>Responsive menu</h1>
        <h2>Made with ReactJs and inspired by Stripe</h2>
        <Link className="go-back-button" to="/new-beginnings">
          GO BACK
        </Link>
      </div>
      <div className="right-column">
        <i className="fas fa-arrow-circle-up" />
        <h3>Hover the three menu items to try it out.</h3>
      </div>
      <img className="buildings" src={buildings} alt="buildings" />
      <img className="tower" src={tower} alt="small tower" />
    </div>
  )
}

export default StripeMenu
