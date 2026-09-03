import { IncomingMessage, ServerResponse } from "http";
import {
  getItems,
  getItemById,
  addItem,
  updateItem,
} from "../controllers/items";

export const itemsRoute = async (req: IncomingMessage, res: ServerResponse) => {
        if (req.url?.startsWith("/items")) {
            console.log(req.url, "request url");

            const parts = req.url?.split("/");
            // console.log(parts, "request url parts");

            const id = parts[2] ? parseInt(parts[2]) : undefined;

            if (req.method === "GET" && !id) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(getItems()));
            return;
            }
            if (req.method === "GET" && id) {
            // const item = getItemById(id);
            // res.writeHead(item? 200: 404, { 'Content-Type': 'application/json' });
            // res.end(JSON.stringify(item || { message: "Item not found" }));
            // return;
            if (!isNaN(id)) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid item Id" }));
                return;
            }
            const item = getItemById(id);
            if (!item) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Item not found" }));
                return;
            }
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(item));
                return;
            }
            if (req.method === "POST") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
                console.log(body, "body");
            });
            req.on("end", () => {
        
        try {
            const {name, quantity, price} = JSON.parse(body);
            if(!name || typeof name !== "string") {
                res.writeHead(400, {"content-type": "application/json"});
                res.end(JSON.stringify({ error: "item name is required"}))
                return;
            }
            if(!quantity || typeof quantity !== "number") {
                res.writeHead(400, {"content-type": "application/json"});
                res.end(JSON.stringify({ error: "item quantity is required"}))
                return;
            }
            if(!price || typeof price !== "number") {
                res.writeHead(400, {"content-type": "application/json"});
                res.end(JSON.stringify({ error: "item price is required"}))
                return;
            }
            const newItem = addItem(name, quantity, price);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify(newItem));
            }catch (error) {
            res.writeHead(400, {"content-type": "application/json"});
            res.end(JSON.stringify({ error: "Invalid JSON format"}))
        }
      });
            return;
            }
            if (req.method === "PUT" && id) {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });

            req.on("end", () => {
                const updates = JSON.parse(body);
                const updatedItem = updateItem(id, updates);

                if (!updatedItem) {
                res.writeHead(404, { "content-type": "application/json" });
                res.end(JSON.stringify({ message: "Not found" }));
                return;
                }

                res.writeHead(200, { "content-type": "application/json" });
                res.end(JSON.stringify(updatedItem));
            });
            return;
            }

            res.writeHead(405, { "content-type": "application/json" });
            res.end(JSON.stringify({ error: "Method not allowed on /items" }));
        }
};
