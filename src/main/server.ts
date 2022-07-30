import { app, env } from '@main/config'

app.listen(env.PORT, () => {
  console.clear()
  console.log(env.PORT)
  if (env.IS_DEV) {
    console.log(`\n⚡️ [SERVER]: API is running at http://localhost:${env.PORT}\n`)
  }
})
