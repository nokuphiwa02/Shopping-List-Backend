<img src="https://socialify.git.ci/nokuphiwa02/Shopping-List-Backend/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Shopping-List-Backend" width="640" height="320" />

# Shopping List Backend

The Shopping List Backend is a Node.js and TypeScript application designed to manage shopping items. It provides a RESTful API to create, read, update, and delete (CRUD) shopping items, tracking essential details like name, quantity, and price.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript

## 📥 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd Shopping-List-Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   Start the development server:
   ```bash
   npm run dev
   ```

The server will run locally at: `http://localhost:4005`

## 🛣️ API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/items` | Read all shopping items |
| **GET** | `/items/:id` | Read a specific shopping item by ID |
| **POST** | `/items` | Create a new shopping item |
| **PUT** | `/items/:id` | Update an existing shopping item by ID |
| **DELETE** | `/items/:id` | Delete a shopping item by ID |

## 🚨 Error & Status Handling

### Create (POST)
- **201 Created / 200 OK:** Item successfully created.
- **400 Bad Request:** Missing required fields or invalid data structure.
- **409 Conflict:** Item already exists.

### Read (GET)
- **200 OK:** Items retrieved successfully.
- **401 Unauthorized:** Login required to view items.
- **404 Not Found:** The requested item ID does not exist.

### Update (PUT)
- **200 OK / 204 No Content:** Item successfully updated.
- **400 Bad Request:** Invalid update data payload.
- **404 Not Found / 401 Unauthorized:** Login required or item not found.

### Delete (DELETE)
- **200 OK / 204 No Content:** Item successfully deleted.
- **403 Forbidden:** You do not have permission to delete this item.
- **404 Not Found:** Item not found.
