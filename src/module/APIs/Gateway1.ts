import { SMSGateway } from "../SMSGateway";

class Gateway1 implements SMSGateway {
    public userName;
    public password;
    public origin;

    constructor(userName: string, password: string, origin: string) {
        this.userName = userName
        this.password = password
        this.origin = origin
    }

    send(gsm: string | number, message: string | number | null):  Promise<string | boolean> {
        console.log("SMS sent with Gateway-1");
        
        return new Promise((resolve, reject) => {
            return resolve(true)
        });
    }
}

export default Gateway1