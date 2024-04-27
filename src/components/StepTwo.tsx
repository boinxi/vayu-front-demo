import React from "react";

export const stepTwoValidator = (age: number): boolean => age >= 0 && age <= 120;

interface Props {
    initialAge: number;
    setAge: React.Dispatch<React.SetStateAction<number>>;
}

const StepTwo: React.FC<Props> = (props: Props) => {
    const {initialAge, setAge} = props;

    return (
        <div>
            <h1>Step Two</h1>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    value={initialAge}
                    onChange={e => {
                        setAge(parseInt(e.target.value));
                    }}
                />
            </div>
        </div>
    );
}

export default StepTwo;