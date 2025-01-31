# Stage 0 API - HNG12 Backend Track

## Description
This is a public API developed as part of the HNG12 Backend Track Stage 0 Task. The API returns the following information:
1. Registered email address.
2. Current datetime in ISO 8601 UTC format.
3. GitHub URL of the project's codebase.

## Technologies Used
- Node.js (JavaScript runtime environment)
- Express.js (Web framework for Node.js)
- CORS (Cross-Origin Resource Sharing)
- dotenv (For environment variable management)


## How To Run Locally
### 1. Clone the repository
  ```sh
git clone https://github.com/gharneeyart/HNG12-STAGE-0-BACKEND.git
cd stage-0-api

```
### 2. Navigate to the project folder
```sh
cd stage-0-api
```
### 3. Install dependencies
```sh
npm install
```
### 4. Create a .env file and add the following
```sh
EMAIL=your-email@example.com
GITHUB_URL=https://github.com/yourusername/your-repo
PORT=3000
```
### 5. Run the application
```sh
node index.js
```
### 6. Start the development server:
```sh
npm start
```
### Open your browser or Postman and visit:
```sh
http://localhost:3000/
```
## API Endpoint
**GET** https://hng12-stage-0-backend.onrender.com/
Returns a JSON response with the following structure:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```
## Backlink
- Node.js: https://hng.tech/hire/nodejs-developers

## License
This project is licensed under the MIT License.


