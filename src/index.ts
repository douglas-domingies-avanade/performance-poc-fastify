import fastify from "fastify";
import Users from "./repositories/users";

const app = fastify({})
const { PORT = 8001 } = process.env;

new Users().attachCRUDRoutes(app);

app.all('*', (req, res) => {
    res.status(200).send('OK');
});
app.listen(parseInt(`${PORT}`), (err, address) => {
    if (!err)
        console.log(`We are live on ${address}`);
    else console.log(err);
});

export default app;