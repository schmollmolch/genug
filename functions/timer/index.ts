import express from 'express';
import helmet from 'helmet';

import { Timer } from "../../types";

const app = express();
app.use(helmet());

app.get('*', (req, res) => {

    const timer: Timer = {
        remainingSecondsSinceLastStart: 23,
        started: new Date().toISOString(),
        status: 'paused',
        name: 'John plays Splatoon'
    };

    res.status(200).json(timer);
})

export default app;
