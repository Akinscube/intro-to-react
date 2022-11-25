import React from 'react'
import styles from "./profilephoto.module.css"

import profileP from "../../assets/images/0BC8D363-B207-49BF-9009-D2B0C58A9EB1_1_105_c.jpeg"

const ProfilePhoto = () => {
  return (
    <div>
        <img src={profileP} alt="" className={styles.profile} />
    </div>
  )
}

export default ProfilePhoto