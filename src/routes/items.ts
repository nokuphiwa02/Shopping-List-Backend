import { IncomingMessage, ServerResponse } from "http";
import { getItems, getItemById, addItem } from "../controllers/items";


//http://localhost:4000/items

export const itemsRoute = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith("/items")) {
    console.log(req.url, "request url");

    //http://localhost:4000/items/1

    const parts = req.url?.split("/");
    console.log(parts, "request url parts");

    const id = parts[2] ? parseInt(parts[2]) : undefined;


    if (req.method === "GET" && !id) {
       res.writeHead(200, { "Content-Type": "application/json" });
       res.end(JSON.stringify(getItems()));
       return;
    } 
    if (req.method === "GET" && id) {
        const item = getItemById(id);
        res.writeHead(item? 200: 404, { "Content-Type": "application/json" });
        res.end(JSON.stringify(item || { message: "Item not found" }));
        return;
    }
    if (req.method === "POST") {
        let body = "";
        req.on('data', (chunk) => {
            body += chunk.toString();
            console.log(body, "body");
        });
    }
}
};

