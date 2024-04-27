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
            <h5>Name: {userNameInfo.fName} {userNameInfo.lName}</h5>
            <h5>Age: {age}</h5>
        </div>
    );
}

export default StepThree;