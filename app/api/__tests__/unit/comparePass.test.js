import bcrypt from 'bcryptjs'
import { comparePass } from '../../src/utils'

describe('comparePass', () => {
  it('returns true if the passwords match', async () => {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync('password123', salt)

    const res = await comparePass('password123', hash)

    expect(res).toBe(true)
    expect(res).toMatchSnapshot()
  })
})
