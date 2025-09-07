# Environment Configuration

This project uses environment-based configuration for different deployment environments.

## Environment Files

### `.env` (Local Development)
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Thrive Meeting Scheduler
VITE_ORGANIZER_EMAIL=Swati.Nawani@thrivebrands.ai
```

### `.env.production` (Production)
```env
VITE_API_BASE_URL=https://your-production-api.com/api
VITE_APP_NAME=Thrive Meeting Scheduler
VITE_ORGANIZER_EMAIL=Swati.Nawani@thrivebrands.ai
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:5000/api` |
| `VITE_APP_NAME` | Application name | `Thrive Meeting Scheduler` |
| `VITE_ORGANIZER_EMAIL` | Default organizer email | `Swati.Nawani@thrivebrands.ai` |

## Usage

### Development
```bash
npm run dev
```
Uses `.env` file automatically.

### Production Build
```bash
npm run build
```
Uses `.env.production` file automatically.

### Custom Environment
```bash
# Use specific env file
npm run build --mode staging
# Will look for .env.staging
```

## Configuration Access

Environment variables are accessed through the config utility:

```javascript
import { config } from './src/config/environment.js';

console.log(config.API_BASE_URL);
console.log(config.ORGANIZER_EMAIL);
console.log(config.MODE); // 'development' or 'production'
```

## Backend Endpoints

The application expects these endpoints on your backend:

- **Health Check**: `GET /` (base URL without /api)
- **Schedule Meeting**: `POST /api/schedule-discovery-call`
- **Available Slots**: `GET /api/available-slots?date=YYYY-MM-DD`

## Environment Detection

The app automatically detects the environment:
- **Development**: `import.meta.env.DEV === true`
- **Production**: `import.meta.env.PROD === true`
- **Mode**: `import.meta.env.MODE` (development/production)

## Debug Information

Check browser console for environment configuration logs:
```
Environment Configuration: {
  mode: "development",
  apiBaseUrl: "http://localhost:5000/api",
  appName: "Thrive Meeting Scheduler",
  organizerEmail: "Swati.Nawani@thrivebrands.ai",
  isDev: true,
  isProd: false
}
```