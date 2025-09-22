# Runware Image & Video Generator

A simple full-stack application that lets you generate **AI-powered images and videos** using the [Runware SDK](https://www.npmjs.com/package/@runware/sdk-js).  
The project includes a Node.js/Express backend for handling Runware API requests and a frontend UI for user interaction.

---

## 🚀 Features
- Generate **images** with customizable width, height, and number of results.  
- Generate **short videos** with different resolutions.  
- Clean, interactive web UI with tabs for switching between images and videos.  
- Error handling and real-time status updates.  

---

## 📂 Project Structure
```
.
├── server.js        # Express backend server
├── public/
│   ├── index.html   # Frontend UI
│   ├── style.css    # Styles (you can customize)
│   └── (assets)     # Any additional frontend assets
└── .env             # Environment variables
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/runware-generator.git
cd runware-generator
```

### 2. Install dependencies
```bash
npm install express dotenv @runware/sdk-js
```

### 3. Create a `.env` file
Add your Runware API key inside `.env`:
```env
RUNWARE_API_KEY=your_api_key_here
PORT=3000
```

### 4. Run the server
```bash
node server.js
```
Server will start at:
```
http://localhost:3000
```

---

## 🖥️ Usage
1. Open `http://localhost:3000` in your browser.  
2. Enter a **prompt** describing what you want to generate.  
3. Choose **Images** or **Videos**:  
   - **Images**: Set number of results, width, and height.  
   - **Videos**: Choose resolution.  
4. Click **Generate** and wait for results.  

---

## 📡 API Endpoints

### `POST /generate-image`
Generate images from a text prompt.
```json
{
  "prompt": "A futuristic cityscape at sunset",
  "count": 3,
  "width": 512,
  "height": 512
}
```
**Response:**
```json
{
  "images": ["url1", "url2", "url3"]
}
```

### `POST /generate-video`
Generate a short video from a text prompt.
```json
{
  "prompt": "A flying car over a neon city",
  "width": 1280,
  "height": 720
}
```
**Response:**
```json
{
  "videoUrl": "video_url_here"
}
```

---

## 📦 Dependencies
- [Express](https://expressjs.com/) – Backend server.  
- [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable management.  
- [Runware SDK](https://www.npmjs.com/package/@runware/sdk-js) – AI image & video generation.  

---

## 📝 License
MIT License. Feel free to use and modify.  
