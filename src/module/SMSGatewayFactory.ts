import Pusula from './APIs/Pusula';
import Gateway1 from './APIs/Gateway1';
import Gateway2 from './APIs/Gateway2';

const messageAPIs: any = {
    Pusula,
    Gateway1,
    Gateway2
}

class SMSGatewayFactory {
    // create edilen send metodunu tanımadığı için böyle bir tanımlama gerekti
    [x: string]: any;
    
    constructor(gatewayAPI: string, userName: string, password: string, origin: string) {       
        try {
            // Always keep capital letter API Class Name
            const apiClassName = gatewayAPI.charAt(0).toLocaleUpperCase() + gatewayAPI.slice(1)
            return new messageAPIs[apiClassName](userName, password, origin);
        } catch (error) {
            console.log(error)
        }
    }
}

export default SMSGatewayFactory