export const runtime = 'edge'

export function GET(request: Request) {
  return new Response(`I am a Serverless Function`, {
    status: 200
  })
}
