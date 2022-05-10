/* eslint-disable @typescript-eslint/naming-convention */
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rickandmorty.christianhdz',
  appName: 'Rick and morty',
  webDir: 'dist/rickandmorty',
  bundledWebRuntime: false,
  backgroundColor: '#16ACC9',
  android: {
    backgroundColor: '#16ACC9',
  },
  plugins: {
    SplashScreen: {
      backgroundColor: '#16ACC9',
      launchAutoHide: true,
      launchShowDuration: 3000,
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
