import React, { useState, useEffect } from "react";
import { useFormatMessage } from "@comparaonline/react-intl-hooks";
import { Steps, Row, Col, Button, Icon } from "antd";
import { inject, observer } from "mobx-react";
import { Route, Switch, match } from "react-router-dom";
import { RouterStore } from "mobx-react-router";

import Basic from "beagl/components/forms/Basic";
import styles from "./styles.scss";

const stepsMap = ["", "experience", "skills", "contacts"];
const { Step } = Steps;

type routing = {
  routing: RouterStore;
  match: match;
};

export const Wizard = ({ routing, match }: routing) => {
  const i18n = useFormatMessage();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(
    () => routing.history.push(`${match.path}/${stepsMap[currentStep]}`),
    [currentStep]
  );

  const prevStep = () => {
    setCurrentStep(currentStep > 0 ? currentStep - 1 : 0);
  };

  const nextStep = () => {
    setCurrentStep(
      currentStep < stepsMap.length - 1 ? currentStep + 1 : currentStep
    );
  };

  const onStepFinish = () => nextStep();

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
            <Button
              type="default"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <Icon type="left" />
              {i18n("button.prev")}
            </Button>
            <Button
              type="primary"
              onClick={nextStep}
              disabled={currentStep === stepsMap.length - 1}
            >
              {i18n("button.next")}
              <Icon type="right" />
            </Button>
          </div>
        </Col>
        <Col span={18} className={styles.content}>
          <Switch>
            <Route
              exact
              path="/steps"
              render={props => <Basic onComplete={onStepFinish}>Profile</Basic>}
            />
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

export default inject("routing")(observer(Wizard));
