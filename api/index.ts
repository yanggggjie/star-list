import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { ofetch } from 'ofetch'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.get('/code2token', async (c) => {
  const code = c.req.query('code')
  const githubTokenURL = 'https://github.com/login/oauth/access_token'
  const body = {
    client_id: process.env.VITE_CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code
  }

  try {
    const res = await ofetch(githubTokenURL, {
      method: 'POST',
      body
    })
    if ('access_token' in res) {
      return c.json({
        access_token: res.access_token
      })
    }
    return c.json({
      error: res.error
    })
  } catch (e) {
    return c.json({
      msg: 'server error'
    })
  }
})

export default handle(app)
