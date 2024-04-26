const BASE_URL = process.env.EXPO_PUBLIC_API_URL
const SESSION = BASE_URL + "/api/auth/session"
const ALLCOURSES = BASE_URL + "/api/courses"
const SIGNIN = BASE_URL + "/api/auth/signin"
const PROVIDERS = BASE_URL + "/api/auth/providers"
const CSRF = BASE_URL + "/api/auth/csrf"
const CREDENTIALS = BASE_URL + "/api/auth/callback/credentials"
export {
    BASE_URL,
    SESSION,
    ALLCOURSES,
    SIGNIN,
    PROVIDERS,
    CSRF,
    CREDENTIALS
}