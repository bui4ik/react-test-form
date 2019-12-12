import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './index.module.scss'
import Info from './Info'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const Main = () => {
  const [step, setStep] = useState(1);

  const onPrevBtnClick = (e : any) => {
        e.preventDefault();
        setStep(step - 1)
    };

  return (
    <Container className={`d-flex justify-content-center align-items-center ${styles.fill}`}>
      <div className={`border pt-5 px-5 pb-2 ${styles.contentWidth}`}>
        <Info step={step}/>
        <StepOne setStep={setStep} step={step}/>
        <StepTwo setStep={setStep} step={step} onPrevBtnClick={onPrevBtnClick}/>
        <StepThree setStep={setStep} step={step} onPrevBtnClick={onPrevBtnClick}/>
        <StepFour setStep={setStep} step={step} onPrevBtnClick={onPrevBtnClick}/>
        <StepFive setStep={setStep} step={step} onPrevBtnClick={onPrevBtnClick}/>
      </div>
    </Container>
  )
};

export default Main
