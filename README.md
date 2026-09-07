## project overview
-The Shopping item backend is a Node.js backend application design to manage shopping items.
 it provides an API that allows users to create ,read, update and delete shopping items . 
 Each item can contain information such as its name ,quantity and price.

## Installation and setup
-install Node.js
-open new Terminal(npm install)
-to run project (npm run dev)
-http://localhost:4005

## Teck stack
-Node.js
-Type script

## API EndPoints
-GET shopping item - Read all items
-GET :id  shopping item - Read one item
-POST - create an item
-PUT :id - update an item
-DELETE :id - delete  item

## Error Handling
-Create : Post (Success: 201 created, 200 ok & ERRORS : 400 bad request ,409 conflict)
-Read : Get (success: 200 ok & Errors 404 not found / 401 login required)
-Update : Put (success: 200 ok / 204 content delete & Errors 404 login required  / 400 bad request )
-Delete : Delete (success: 200 ok /204 content delete & Errors 404 not found / 403 forbiden)

-https://github.com/nokuphiwa02/Shopping-List-Backend
