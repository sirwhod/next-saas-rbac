'use server'

import { sighInWithPassword } from '@/http/sign-in-with-password'

export async function signInWithEmailAndPassword(
  previusState: unknown,
  data: FormData,
) {
  console.log(previusState)

  const { email, password } = Object.fromEntries(data)

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const result = await sighInWithPassword({
    email: String(email),
    password: String(password),
  })

  console.log(result)

  return 'success'
}
