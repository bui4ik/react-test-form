import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Info from './Info'
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const Main: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const onPrevBtnClick = (e : any) => {
        e.preventDefault();
        setStep(step - 1)
    };

  return (
    <Container className='d-flex justify-content-center align-items-center min-vh-100'>
      <div className='border pt-5 px-5 pb-2 w-75'>
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
