import React from 'react';
import { useFormatMessage } from '@comparaonline/react-intl-hooks';

const Home = () => {
  const i18n = useFormatMessage();

  return (<div>{i18n('home')}</div>);
}

export default Home;
