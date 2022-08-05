export interface SMSGateway {
    send(gsm: string | number, message: string | number | null): Promise<string | boolean>;
}