import '../css/NavBtns.css';

interface Props {
    currentStep: number;
    handleBack: () => void;
    handleNext: () => void;
    handleFinish: () => void;
    isLastStep: boolean;
}

const NavBtns: React.FC<Props> = (props: Props) => {
    const {currentStep, handleBack, handleNext, handleFinish, isLastStep} = props;
    return (
        <div>
            {
                currentStep > 0 && <button onClick={handleBack}>Back</button>
            }
            {
                !isLastStep ? <button onClick={handleNext}>Next</button>
                    : <button onClick={handleFinish}>Finish</button>
            }
        </div>
    );
};

export default NavBtns;
