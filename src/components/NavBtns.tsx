import '../css/NavBtns.css';

interface Props {
    currentStep: number;
    handleBack: () => void;
    handleNext: () => void;
    handleFinish: () => void;
    isLastStep: boolean;
    isNextEnabled: boolean;
}

const NavBtns: React.FC<Props> = (props: Props) => {
    const {currentStep, handleBack, handleNext, handleFinish, isLastStep, isNextEnabled} = props;

    let btnStyle = {
        backgroundColor: isNextEnabled ? '#007bff' : '#cccccc',
        color: isNextEnabled ? 'white' : 'black'
    };

    return (
        <div>
            {
                currentStep > 0 && <button onClick={handleBack}>Back</button>
            }
            {
                !isLastStep ? <button onClick={handleNext} style={btnStyle}> Next </button>
                    : <button onClick={handleFinish}>Finish</button>
            }
        </div>
    );
};

export default NavBtns;
