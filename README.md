# URL Shortener API

## Overview
The URL Shortener API allows users to shorten long URLs and retrieve the original URL using a short code. It also supports custom aliases and the short link would expire after 30 days.

## Base URL

[https://shorturl-3dz8.onrender.com/](https://shorturl-3dz8.onrender.com/)

---

## **Endpoints**

**1: POST /shorten**  
Shortens a long URL and returns a short URL.  

```json
// Request (JSON Body)
{ "longUrl": "https://notionpress.com/in/read/in-midnight-s-stillness/paperback" }

// Response
{ "shortUrl": "https://shorturl-3dz8.onrender.com/token" }
```

**2: POST /shorten?alias=customToken**  
Shortens a long URL and returns a short URL with your custom tokem.  

```json
// Request (JSON Body)
{ "longUrl": "https://notionpress.com/in/read/in-midnight-s-stillness/paperback" }

// Response
{ "shortUrl": "https://shorturl-3dz8.onrender.com/customToken" }
```

**3: GET /token**  
This will redirect you to URL associate with the token provided.

