import bcrypt from 'bcryptjs'
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

async function comparePass(userPassword, dbPassword) {
  const valid = await bcrypt.compareSync(userPassword, dbPassword)

  if (valid) {
    return true
  } else {
    throw new Error('invalid credentials')
  }
}

export { encodeToken, comparePass }
