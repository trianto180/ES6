const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`);
            return
            } 
        }
    }
newFunction('William', 'Imoh').fullName();