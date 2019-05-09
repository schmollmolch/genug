import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());

app.get('*', (req, res) => {
    res.status(200).json({ hello: 'beautiful world', status: 'fine' });
})

export default app;
