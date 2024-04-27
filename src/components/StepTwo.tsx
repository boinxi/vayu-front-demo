import React from "react";
import '../css/StepTwo.css'

export const stepTwoValidator = (age: number): boolean => age >= 0 && age <= 120;

interface Props {
    initialAge: number;
    setAge: React.Dispatch<React.SetStateAction<number>>;
}

const StepTwo: React.FC<Props> = (props: Props) => {
    const {initialAge, setAge} = props;

    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(e.target.value));
    };

    return (
        <div>
            <h3>Step Two</h3>
            <div>
                <label>Age:</label>
                <input
                    className={'input'}
                    type="number"
                    value={initialAge}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default StepTwo;