import React, {Dispatch, SetStateAction} from "react";
import UserNameInfo from "../../../types/userNameInfo";
import './StepOne.css';

export const stepOneValidator = (userInfo: UserNameInfo): boolean => userInfo.fName.length > 0 && userInfo.lName.length > 0;

interface Props {
    initialUserInfo: UserNameInfo;
    setUserInfo: Dispatch<SetStateAction<UserNameInfo>>;
}

const StepOne: React.FC<Props> = (props: Props) => {
    const {initialUserInfo, setUserInfo} = props;

    let onFNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({fName: e.target.value, lName: initialUserInfo.lName});
    };
    let onLNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({fName: initialUserInfo.fName, lName: e.target.value});
    };
    return (
        <div className={'container'}>
            <h3>Step One: Enter Your Name</h3>
            <div>
                <label htmlFor="fName">First Name:</label>
                <input
                    className={'input'}
                    type="text"
                    id="fName"
                    name="fName"
                    value={initialUserInfo.fName}
                    onChange={onFNameChange}
                />
            </div>
            <div>
                <label htmlFor="lName">Last Name:</label>
                <input
                    className={'input'}
                    type="text"
                    id="lName"
                    name="lName"
                    value={initialUserInfo.lName}
                    onChange={onLNameChange}
                />
            </div>
        </div>
    );
}

export default StepOne;