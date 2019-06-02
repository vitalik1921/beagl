import React from 'react';
import { inject, observer } from 'mobx-react';
import { useFormatMessage } from '@comparaonline/react-intl-hooks';
import { Button } from 'antd';

import styles from './styles.scss';

const Home = ({ routing }: any) => {
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
          onClick={() => routing.history.push('steps')}
        >
          {i18n('home.create_cv')}
        </Button>
      </div>
    </div>
  );
};

export default inject('routing')(observer(Home));
