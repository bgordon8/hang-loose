import { encodeToken } from '../../src/utils'

describe('encodeToken', () => {
  it('encodes a JWT token', async () => {
    const user = { id: 1 }

    const token = await encodeToken(user)

    expect(token).toBeTruthy()
    expect(token).toMatchSnapshot({
      token: expect.any(String),
    })
  })
})
