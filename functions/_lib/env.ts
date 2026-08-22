export interface Env {
  DB: D1Database
  PHOTOS: R2Bucket
  SESSION_SECRET?: string
}

export const COOKIE = "sharkys_session"
export const FORM_SUBMIT = "https://formsubmit.co/ajax/sharkyslawncare.541@gmail.com"
export const STATUSES = ["New", "Called", "Scheduled", "Done"] as const
