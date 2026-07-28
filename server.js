const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static("public"));
// In-memory database
const urls = [];

// Generate random short code
function generateCode(length = 5) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let code = "";

    do {
        code = "";
        for (let i = 0; i < length; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    } while (urls.find((item) => item.shortCode === code));

    return code;
}

// Validate URL
function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/*
========================================
1. Create Short URL
POST /shorten
========================================
*/

app.post("/shorten", (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            message: "URL is required",
        });
    }

    if (!isValidURL(url)) {
        return res.status(400).json({
            message: "Invalid URL",
        });
    }

    const shortCode = generateCode();

    urls.push({
        shortCode,
        originalUrl: url,
        clicks: 0,
        createdAt: new Date(),
    });

    res.status(201).json({
        shortUrl: `http://localhost:${PORT}/${shortCode}`,
    });
});

/*
========================================
3. Analytics
GET /analytics/:code
========================================
*/

app.get("/analytics/:code", (req, res) => {
    const { code } = req.params;

    const data = urls.find((item) => item.shortCode === code);

    if (!data) {
        return res.status(404).json({
            message: "Short URL not found",
        });
    }

    res.json({
        originalUrl: data.originalUrl,
        clicks: data.clicks,
        createdAt: data.createdAt,
    });
});


/*
========================================
2. Redirect to Original URL
GET /:code
========================================
*/

app.get("/:code", (req, res) => {
    const { code } = req.params;

    const data = urls.find((item) => item.shortCode === code);

    if (!data) {
        return res.status(404).json({
            message: "Short URL not found",
        });
    }

    data.clicks++;

    res.redirect(data.originalUrl);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});