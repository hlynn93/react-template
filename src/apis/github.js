export const fetchUser = login => `users/${login}`
export const fetchRepo = fullName => `repos/${fullName}`
export const fetchStargazers = fullName => `repos/${fullName}/stargazers`
export const fetchStarred = login => `users/${login}/starred`

