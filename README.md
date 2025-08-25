# URL Shortener
<img width="1041" height="675" alt="Screenshot 2025-08-25 at 1 18 28 AM" src="https://github.com/user-attachments/assets/215c81a0-d712-41f3-9e0b-093a5f46d66f" />

A modern URL shortening service built with Next.js and Express.js, designed for local usage and development.

## ⚠️ Local Usage Only

This application is currently designed for local development and testing purposes only. It is not production-ready and should not be deployed to public environments without proper security configurations.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Modern UI**: Clean and responsive interface built with Next.js and Material-UI
- **Real-time Updates**: Redux state management for seamless user experience
- **Copy to Clipboard**: Easy sharing with one-click copy functionality
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with TypeScript
- **Material-UI** - Component library for consistent design
- **Styled Components** - CSS-in-JS styling
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API requests

### Backend
- **Express.js** - Node.js web framework
- **Neo4j** - Graph database for URL storage
- **nanoid** - Secure URL-safe unique ID generator
- **bcryptjs** - Password hashing (for future features)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Neo4j database instance

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   NEO4J_URI=bolt://localhost:7687
   NEO4J_USERNAME=neo4j
   NEO4J_PASSWORD=your_password
   PORT=5000
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the client (http://localhost:3000) and server (http://localhost:5000) concurrently.

## 📝 Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run client` - Start only the Next.js client
- `npm run server` - Start only the Express.js server
- `npm run build` - Build the client for production
- `npm run start` - Start both client and server in production mode
- `npm run lint` - Run ESLint on all projects
- `npm run lint:fix` - Fix ESLint issues automatically

## 🚧 Work in Progress

The following features are currently under development:

- **Password Protected URLs**: Secure your shortened links with password protection
- **Custom Domain Support**: Use your own domain for shortened URLs
- **Advanced URL Options**: Additional customization features for URL generation

## 🗺️ Roadmap

### Upcoming Features

- **User Management System**
  - User registration and authentication
  - Personal dashboard for managing URLs
  - User-specific URL history

- **Analytics & Statistics**
  - Click tracking for generated links
  - Geographic analytics
  - Referrer tracking
  - Usage statistics and reports
  - Real-time analytics dashboard

- **Enhanced Security**
  - Rate limiting
  - Spam protection
  - URL validation and safety checks

- **Additional Features**
  - Bulk URL shortening
  - API key management
  - Custom short codes
  - URL expiration dates
  - QR code generation

## 🏗️ Project Structure

```
url-shortener/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   ├── lib/              # Redux store and utilities
│   └── public/           # Static assets
├── server/                # Express.js backend
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   └── routes/          # API routes
└── package.json         # Root package configuration
```

## 🤝 Contributing

This project is currently in development. Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the ISC License.

---

**Note**: This application is for local development and testing purposes. Ensure proper security measures are implemented before any production deployment.
