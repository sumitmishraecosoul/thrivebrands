// Environment Configuration
export const config = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  
  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Thrive Meeting Scheduler',
  
  // Email Configuration
  ORGANIZER_EMAIL: import.meta.env.VITE_ORGANIZER_EMAIL || 'Swati.Nawani@thrivebrands.ai',
  
  // Environment Info
  MODE: import.meta.env.MODE || 'development',
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
};

// Debug logging
console.log('Environment Configuration:', {
  mode: config.MODE,
  apiBaseUrl: config.API_BASE_URL,
  appName: config.APP_NAME,
  organizerEmail: config.ORGANIZER_EMAIL,
  isDev: config.DEV,
  isProd: config.PROD
});

export default config;

