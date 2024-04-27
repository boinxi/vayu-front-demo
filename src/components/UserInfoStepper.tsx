import {useState} from "react";
import StepOne, {stepOneValidator} from "./steps/stepOne/StepOne";
import StepTwo, {stepTwoValidator} from "./steps/stepTwo/StepTwo";
import StepThree from "./steps/stepThree/StepThree";
import NavBtns from "./nav/NavBtns";
import UserNameInfo from "../types/userNameInfo";
import {saveUserInfoToLocalStorage} from "../services/localStorageService";
import './UserInfoStepper.css';


const UserInfoStepper: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [userInfo, setUserInfo] = useState<UserNameInfo>({fName: '', lName: ''});
    const [age, setAge] = useState(0);


    const steps = [
        <StepOne initialUserInfo={userInfo} setUserInfo={setUserInfo}/>,
        <StepTwo initialAge={age} setAge={setAge}/>,
        <StepThree userNameInfo={userInfo} age={age}/>
    ];

    const handleNext = () => {
        // vaildate 1st step
        if (currentStep === 0 && !stepOneValidator(userInfo)) {
            alert('Please fill out all fields');
            return;
        }

        // validate 2nd step
        if (currentStep === 1 && !stepTwoValidator(age)) {
            alert('Please enter a valid age');
            return;
        }

        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleFinish = () => alert(saveUserInfoToLocalStorage(userInfo.fName, userInfo.lName, age) ?? 'Form Submitted');

    const isNextEnabled = () => {
        if (currentStep === 0) return stepOneValidator(userInfo);
        if (currentStep === 1) return stepTwoValidator(age);

        return true;
    };


    return (
        <div className={'stepperContainer'}>
            <h1 className={'title'}>User Info Stepper</h1>
            {steps[currentStep]}
            <NavBtns
                currentStep={currentStep}
                handleBack={handleBack}
                handleNext={handleNext}
                handleFinish={handleFinish}
                isLastStep={currentStep === steps.length - 1}
                isNextEnabled={isNextEnabled()}
            />
        </div>
    );
}

export default UserInfoStepper;
