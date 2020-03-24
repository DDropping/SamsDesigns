import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.scss"
import socialLinks from "../../constants/social"

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        SamsDesigns
        <div>
          {socialLinks.map((link, index) => {
            return (
              <Link to={link.path}>
                <span className={styles.icon}>{link.icon}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default index
