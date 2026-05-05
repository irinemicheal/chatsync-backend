# 💬 ChatSync - Backend API

Node.js + Express backend for ChatSync real-time messaging app.

🌐 **API URL:** https://chatsync-backend-jkpd.onrender.com

---

## 🛠️ Tech Stack
- Node.js + Express.js
- MongoDB + Mongoose
- Socket.IO
- JWT Authentication
- bcryptjs

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/signup | Register new user |
| POST | /api/auth/login | Login user |
| PUT | /api/auth/update | Update profile |
| DELETE | /api/auth/delete | Delete account |

### Messages
| Method | Endpoint | Description |
|---|---|---|
| POST | /api/messages/send | Send message |
| GET | /api/messages/:userId | Get messages |
| GET | /api/messages/media/:userId | Get shared media |

### Users
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users | Get all users |

---

## 👩‍💻 Author
**Irine Micheal**
- GitHub: [@irinemicheal](https://github.com/irinemicheal)
