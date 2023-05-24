import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.main}>
      <input type="color" id="head" name="head" value="#e66465"></input>
    </div>
  )
}

export default Header