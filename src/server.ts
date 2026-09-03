import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 4000;

const requestItem = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {  "content-type": "application/json"});
    res.end(JSON.stringify({ message: "Hello World" }));
}

const server = http.createServer(requestItem);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});