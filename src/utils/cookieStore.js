function buildCookieEntry(name, value, maxAgeDays) {
  const encodedValue = encodeURIComponent(JSON.stringify(value))
  const maxAgeSeconds = Math.floor(maxAgeDays * 24 * 60 * 60)

  return `${name}=${encodedValue}; path=/; max-age=${maxAgeSeconds}; samesite=lax`
}

export function readJsonCookie(name, fallbackValue) {
  if (typeof document === 'undefined') {
    return fallbackValue
  }

  const entry = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith(`${name}=`))

  if (!entry) {
    return fallbackValue
  }

  const rawValue = entry.slice(name.length + 1)

  try {
    return JSON.parse(decodeURIComponent(rawValue))
  } catch {
    return fallbackValue
  }
}

export function writeJsonCookie(name, value, maxAgeDays = 365) {
  if (typeof document === 'undefined') {
    return
  }

  document.cookie = buildCookieEntry(name, value, maxAgeDays)
}