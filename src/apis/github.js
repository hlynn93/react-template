export const fetchUser = login => ({ endpoint: `users/${login}` })

export const fetchRepo = fullName => ({ endpoint: `repos/${fullName}` })

export const fetchStargazers = fullName => ({ endpoint: `repos/${fullName}/stargazers`})

export const fetchStarred = login => ({ endpoint: `users/${login}/starred`})

export const sendForm = (username, password) => ({
  endpoint: `post`,
  meta: {
    body: { username, password },
    method: 'post',
    mode: 'no-cors',
    isPostmanTest: true
  }
})

