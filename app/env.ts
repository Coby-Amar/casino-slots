import { SessionOptions } from "iron-session"

const SESSION_COOKIE_PASSWORD = process.env.SESSION_COOKIE_PASSWORD ?? 'default-really-long-cookie-password'
const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME ?? 'default-cookie-name'

export const SESSION_OPTIONS: SessionOptions = {
    password: SESSION_COOKIE_PASSWORD,
    cookieName: SESSION_COOKIE_NAME,
} 