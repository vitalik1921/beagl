import React, { useState } from "react";
import { useFormatMessage } from "@comparaonline/react-intl-hooks";
import { Steps, Row, Col, Button, Icon } from "antd";
import { inject, observer } from "mobx-react";
import { Route, Switch } from "react-router-dom";
const { Step } = Steps;

import styles from "./styles.scss";

const Home = () => {
  const i18n = useFormatMessage();
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="full-page ant-row-flex ant-row-flex-center ant-row-flex-middle">
      <Row type="flex" className={styles.container}>
        <Col span={6}>
          <Steps direction="vertical" size="small" current={currentStep}>
            <Step
              title={i18n("steps.profile.title")}
              description={i18n("steps.profile.description")}
            />
            <Step
              title={i18n("steps.experience.title")}
              description={i18n("steps.experience.description")}
            />
            <Step
              title={i18n("steps.skills.title")}
              description={i18n("steps.skills.description")}
            />
            <Step
              title={i18n("steps.contacts.title")}
              description={i18n("steps.contacts.description")}
            />
          </Steps>
          <div className={styles.buttons}>
            <Button onClick={() => null}>
              <Icon type="left" />
              {i18n("button.prev")}
            </Button>
            <Button type="primary" onClick={() => null}>
              {i18n("button.next")}
              <Icon type="right" />
            </Button>
          </div>
        </Col>
        <Col span={18} className={styles.content}>
          <Switch>
            <Route exact path="/steps" render={() => <div>Profile</div>} />
            <Route
              path="/steps/experience"
              render={() => <div>Experience</div>}
            />
            <Route path="/steps/skills" render={() => <div>Skills</div>} />
            <Route path="/steps/contacts" render={() => <div>Contacts</div>} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default inject("routing")(observer(Home));
