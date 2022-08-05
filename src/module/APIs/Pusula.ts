import { SMSGateway } from "../SMSGateway";
import fetch from "cross-fetch";

class Pusula implements SMSGateway {
    public userName;
    public password;
    public origin;

    constructor(userName: string, password: string, origin: string) {
        this.userName = userName
        this.password = password
        this.origin = origin
    }

    async send(gsm: string | number, message: string | number | null): Promise<string | boolean> {
        return await fetch(`http://api.pusulasms.com/toplusms.asp?kullanici=${this.userName}&parola=${this.password}&telefonlar=${gsm}&mesaj=${message}&gonderen=${this.origin}`)
        .then((res: any) => {
            if (res.status >= 400) { throw new Error("Bad response from server - Pusula.js"); }
            return {status: res.status} // return res
        })
        .then((data: any) => {
            if(data.status === 200) { return true; } // console.log(data.res.status)
        })
        .catch((err: any) => { console.error(err); return err; });
    }
}

export default Pusula