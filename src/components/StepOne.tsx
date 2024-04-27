import React, {Dispatch, SetStateAction, useState} from "react";
import UserNameInfo from "../types/userNameInfo";

export const stepOneValidator = (userInfo: UserNameInfo): boolean => userInfo.fName.length > 0 && userInfo.lName.length > 0;

interface Props {
    initialUserInfo: UserNameInfo;
    setUserInfo: Dispatch<SetStateAction<UserNameInfo>>;
}

const StepOne: React.FC<Props> = (props: Props) => {
    const {initialUserInfo, setUserInfo} = props;

    const [fName, setFName] = useState(initialUserInfo.fName); // TODO: maybe i dont need this state
    const [lName, setLName] = useState(initialUserInfo.lName);

    return (
        <div>
            <h1>Step One: Enter Your Name</h1>
            <div>
                <label htmlFor="fName">First Name:</label>
                <input
                    type="text"
                    id="fName"
                    name="fName"
                    value={initialUserInfo.fName}
                    onChange={e => {
                        setUserInfo({fName: e.target.value, lName});
                        setFName(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="lName">Last Name:</label>
                <input
                    type="text"
                    id="lName"
                    name="lName"
                    value={initialUserInfo.lName}
                    onChange={e => {
                        setUserInfo({fName, lName: e.target.value});
                        setLName(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}

export default StepOne;