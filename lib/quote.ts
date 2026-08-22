export const QUOTE_HASH = "#quote"
export const QUOTE_JOB_KEY = "sharky-quote-job"
export const QUOTE_EVENT = "sharky:quote"

export type QuoteDetail = {
  job?: string
}

function pathOnly() {
  return `${window.location.pathname}${window.location.search}`
}

export function readQuoteJob() {
  try {
    return sessionStorage.getItem(QUOTE_JOB_KEY) ?? ""
  } catch {
    return ""
  }
}

export function writeQuoteJob(job: string) {
  try {
    if (job) sessionStorage.setItem(QUOTE_JOB_KEY, job)
  } catch {
    /* private mode */
  }
}

export function isQuoteOpen() {
  return window.location.hash === QUOTE_HASH
}

export function openQuote(job?: string) {
  if (job) writeQuoteJob(job)
  window.dispatchEvent(new CustomEvent<QuoteDetail>(QUOTE_EVENT, { detail: { job } }))
  if (window.location.hash !== QUOTE_HASH) {
    window.history.pushState({ sharkyQuote: true }, "", `${pathOnly()}${QUOTE_HASH}`)
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }
}

export function closeQuote() {
  if (window.location.hash !== QUOTE_HASH) return
  if (window.history.state?.sharkyQuote) {
    window.history.back()
    return
  }
  window.history.replaceState(null, "", pathOnly())
  window.dispatchEvent(new HashChangeEvent("hashchange"))
}
