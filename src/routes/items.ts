import { IncomingMessage, ServerResponse } from "http";
import { getItems, getItemById, addItem } from "../controllers/items";

export const itemsRoute = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url?.startsWith("/items")) {
    console.log(req.url, "request url");

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
      res.writeHead(item ? 200 : 404, { "Content-Type": "application/json" });
      res.end(JSON.stringify(item || { message: "Item not found" }));
      return;
    }

    if (req.method === "POST") {
      await new Promise<void>((resolve) => {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          const { name, quantity, price } = JSON.parse(body);
          const newItem = addItem(name, quantity, price);
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify(newItem));
          resolve();
        });
      });
      return;
    }
  }
};
