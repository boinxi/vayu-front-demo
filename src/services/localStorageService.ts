const saveUserInfoToLocalStorage = (fName: string, lName: string, userAge: number): string | null => {

    if (fName.trim() === '' || lName.trim() === '' || isNaN(userAge) || userAge < 0) {
        return "Invalid input data. Please check the provided information.";
    }

    try {
        localStorage.setItem('userInfo', JSON.stringify({
            firstName: fName,
            lastName: lName,
            age: userAge
        }));
        return null; // Success, no errors
    } catch (error) {
        return `Failed to save user info to local storage: ${error}`;
    }
};


export {saveUserInfoToLocalStorage};