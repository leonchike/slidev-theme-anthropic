import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    // Override Slidev's default bg-main (bg-white dark:bg-[#121212])
    // so #slide-content uses the Anthropic theme's white background
    'bg-main': 'bg-[#ffffff] dark:bg-[#191918]',
  },
})
