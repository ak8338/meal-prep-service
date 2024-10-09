// nuxt.config.ts
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
                },
            ],
        },
    },
    css: [
        '~/assets/css/global.css'
    ],
    // modules: [
    //     '@nuxtjs/axios',
    // ],
    runtimeConfig: {
        public: {
            axios: {
                baseURL: 'http://localhost:8000/' // Ensure this is the correct URL for your backend
            }
        }
    }
})
