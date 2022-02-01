import React from 'react';
import Navbar from './Navbar';

import styles from './aside.module.scss';

const Aside = () => {
  return (
      <aside className={styles.sidebar}>
        <Navbar />
      </aside>
    
  )
}

export default Aside
