import { env } from '@saas/env'
import ky from 'ky'
import { cookies } from 'next/headers'

export const api = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  hooks: {
    beforeRequest: [
      async (request) => {
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value

        console.log('token na request', token)

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
  },
})
