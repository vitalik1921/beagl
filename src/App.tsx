import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { addLocaleData, IntlProvider } from "react-intl";
import { InjectIntlContext } from '@comparaonline/react-intl-hooks';
import en from 'react-intl/locale-data/en';

import messages from 'beagl/i18n';
import Home from 'beagl/views/Home';

addLocaleData([...en]);

const App = () => (
  <IntlProvider
    locale='en'
    messages={messages['en']}
  >
    <InjectIntlContext>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </InjectIntlContext>
  </IntlProvider>
);

export default App;
