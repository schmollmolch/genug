import express from 'express';
import helmet from 'helmet';

import { Timer } from "../../types";

const app = express();
app.use(helmet());

app.get('*', (req, res) => {
    const id = req.query.id;
    if (!id) {
        res.status(401).send('Unauthorized');
    } else {
        const timer: Timer = {
            id: 'fancy_new_uuid_substitute',
            remainingSecondsSinceLastStart: 3576,
            started: new Date().toISOString(),
            status: 'paused',
            name: 'John plays Splatoon'
        };

        res.status(200).json(timer);
    }
})

export default app;
