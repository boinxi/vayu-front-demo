import UserNameInfo from "../../../types/userNameInfo";

interface Props {
    userNameInfo: UserNameInfo;
    age: number;
}

const StepThree: React.FC<Props> = (props: Props) => {
    const {userNameInfo, age} = props;
    return (
        <div>
            <h3>InfoReview:</h3>
            <div>
                <h4>Name:</h4>
                <p>{userNameInfo.fName} {userNameInfo.lName}</p>
            </div>
            <div>
                <h4>Age:</h4>
                <p>{age}</p>
            </div>
        </div>
    );
}

export default StepThree;