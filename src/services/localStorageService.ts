const saveUserInfoToLocalStorage = (fName: string, lName: string, userAge: number) => {

    localStorage.setItem('userInfo', JSON.stringify({
        firstName: fName,
        lastName: lName,
        age: userAge
    }));
};

export { saveUserInfoToLocalStorage };