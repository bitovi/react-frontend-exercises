import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

const config = defineConfig(() => {
  return mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest-setup.ts'],
      },
    }),
  )
})

export default config
