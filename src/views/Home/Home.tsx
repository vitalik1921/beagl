import React from 'react';
import { Button } from 'antd';
import { useFormatMessage } from '@comparaonline/react-intl-hooks';
import styles from './styles.scss';


const Home = () => {
  const i18n = useFormatMessage();

  return (
    <div className="full-page ant-row-flex ant-row-flex-center ant-row-flex-middle">
      <div className={styles['home-animation']}>
        <img
          className={styles['home-animation-image']}
          src='/img/logo.svg'
          alt="Hello"
        />
        <span
          className={styles['home-animation-separator']}
        />
        <Button
          className={styles['home-animation-button']}
          href="/cv-steps"
        >
          {i18n('home.create_cv')}
        </Button>
      </div>
    </div>
  );
}

export default Home;
