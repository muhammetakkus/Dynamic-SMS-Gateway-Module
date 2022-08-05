import express, {Request,Response,Application, NextFunction} from 'express';
import cors from 'cors'
import SMSGatewayFactory from './module/SMSGatewayFactory';

const PORT = process.env.PORT || 6000

const app:Application = express();
app.use(cors<Request>());

app.get("/", async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const SMSGateway =  new SMSGatewayFactory([API_CLASS_NAME], [USER_NAME], [PASSWORD], [ORIGIN])
        const send = await SMSGateway.send(5555555555, "some message")
        res.json({response: send})
    } catch (err) {
        next(err)
        res.json({error: err})
    }
});

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});