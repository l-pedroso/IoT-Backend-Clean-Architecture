export default class Device {

    id: string;
    name: string;
    type: string;
    token: string;
    email: string;

    constructor(id: string, name: string, type: string, token: string, email: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.token = token;
        this.email = email;
    }
}