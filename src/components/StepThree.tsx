import UserNameInfo from "../types/userNameInfo";

interface Props {
    userNameInfo: UserNameInfo;
    age: number;
}

const StepThree: React.FC<Props> = (props: Props) => {
    const {userNameInfo, age} = props;
    return (
        <div>
            <h1>InfoReview:</h1>
            <div>
                <h2>Name:</h2>
                <p>{userNameInfo.fName} {userNameInfo.lName}</p>
            </div>
            <div>
                <h2>Age:</h2>
                <p>{age}</p>
            </div>
        </div>
    );
}

export default StepThree;