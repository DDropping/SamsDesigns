import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.scss"
import socialLinks from "../../constants/social"
import navLinks from "../../constants/links"
import policies from "../../constants/policies"

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
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

        <div className={styles.menu}>
          <div>
            {navLinks.map((link, index) => {
              return (
                <span>
                  <Link key={index} to={link.path} className={styles.link}>
                    {" " + link.text + " "}
                  </Link>
                  {link.text !== "ON SALE" && " | "}
                </span>
              )
            })}
          </div>
          <div>
            {policies.map((policy, index) => {
              return (
                <span>
                  <Link key={index} to={policy.path} className={styles.link}>
                    {" " + policy.text + " "}
                  </Link>
                  {policy.text !== "About Us" && " | "}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
