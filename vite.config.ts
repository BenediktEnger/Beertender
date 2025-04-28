import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Beertender',
        short_name: 'App',
        description: 'Track your alcoholism!',
        theme_color: '#ffffff',
        icons: [{
          src: 'Beertender-logo.512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'Beertender-logo.192x192.png',
          sizes: '512x512',
          type: 'image/png',
        }],
      },
    })],
});

