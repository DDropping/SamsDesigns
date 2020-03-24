import React from "react"

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
              <a
                href={link.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.icon}>{link.icon}</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default index
