import JWT from 'jsonwebtoken'
import dayjs from 'dayjs'

async function encodeToken(user) {
  const tokenSecret = process.env.TOKEN_SECRET || 'cowabunga'

  return {
    token: JWT.sign(
      {
        exp: dayjs().add(15, 'day').unix(),
        iat: dayjs().unix(),
        sub: user.id,
      },
      tokenSecret,
      {}
    ),
  }
}

export { encodeToken }
