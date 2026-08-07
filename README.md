# 🔗 URL Shortener

A simple URL Shortener built with **Node.js** and **Express.js**. It allows users to shorten long URLs, redirect to the original URL, and track the number of clicks for each shortened link.



---

## 📌 Features

- Create a short URL
- Redirect to the original URL
- Track click count (analytics)
- Validate URLs
- Generate unique short codes
- Return appropriate error messages for invalid requests

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- HTML
- CSS
- JavaScript

---

## 📂 Project Structure

```
url-shortener/
│── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── server.js
│── package.json
│── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
```

### 2. Navigate to the project

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

or (if using nodemon)

```bash
npx nodemon server.js
```

The server will start at:

```
http://localhost:5000
```

---

## 🌐 REST API

### 1. Create Short URL

**POST**

```
/shorten
```

Request Body

```json
{
    "url":"https://www.google.com"
}
```

Response

```json
{
    "shortUrl":"http://localhost:5000/aB12X"
}
```

---

### 2. Redirect to Original URL

**GET**

```
/:code
```

Example

```
GET /aB12X
```

This redirects the user to the original URL.

---

### 3. Get Analytics

**GET**

```
/analytics/:code
```

Example

```
GET /analytics/aB12X
```

Response

```json
{
    "originalUrl":"https://www.google.com",
    "clicks":5,
    "createdAt":"2026-07-28T10:00:00.000Z"
}
```

---

## 📦 Data Structure

Each shortened URL is stored in memory using the following structure:

```javascript
{
    shortCode: "aB12X",
    originalUrl: "https://www.google.com",
    clicks: 0,
    createdAt: Date
}
```

---

## ✅ Validation Rules

- URL is required.
- URL must be valid.
- Short code must be unique.
- Returns **404 Not Found** if the short code does not exist.

---

## 💻 Frontend

The application includes a simple frontend where users can:

- Enter a long URL
- Generate a shortened URL
- Open the shortened URL
- View analytics by entering the short code

Open the application in your browser:

```
http://localhost:5000
```

---

## 📸 Example Workflow

1. Enter a long URL.

```
https://www.google.com
```

2. Click **Shorten URL**.

3. Receive a shortened URL.

```
http://localhost:5000/aB12X
```

4. Open the shortened URL.

5. View analytics.

```
Original URL: https://www.google.com
Clicks: 1
```

---

## ⚠️ Limitations

- Uses in-memory storage.
- Data is lost when the server restarts.
- No authentication.
- No database integration.

---

## 🔮 Future Improvements

- MongoDB integration
- User authentication
- Custom short URLs
- URL expiration
- QR Code generation
- Copy-to-clipboard button
- Search and delete URLs
- Dashboard with analytics charts

---

## 👨‍💻 Author

Developed as a classroom project using **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**.