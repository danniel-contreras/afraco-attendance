import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.afraco.attendance',
  appName: 'sotano-attendance',
  webDir: 'dist',
  server: {
    hostname:"192.168.101.5:5173",
    androidScheme: 'http',
  }
};

export default config;
