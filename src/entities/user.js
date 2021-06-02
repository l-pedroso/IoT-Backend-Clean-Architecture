module.exports = class User{ 

    constructor(firstName, lastName, email, devices) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
        this.devices = devices;
    }

} 
