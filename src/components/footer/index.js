import React from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"

import styles from "./footer.module.scss"

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        SamsDesigns
        <div>
          <Link>
            <FaFacebookSquare className={styles.icon} />
          </Link>
          <Link>
            <FaInstagram className={styles.icon} />
          </Link>
          <Link>
            <FaTwitterSquare className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index
