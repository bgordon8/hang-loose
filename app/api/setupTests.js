import db from './src/db/connection'

beforeEach(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
  await db.seed.run()
})
afterEach(async () => {
  await db.migrate.rollback()
})
afterAll(async () => {
  await db.destroy()
})
