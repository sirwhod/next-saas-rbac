import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default function AppLayout({
  children,
  test,
}: Readonly<{
  children: React.ReactNode
  test: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
      <>
        {children}
        {test}
      </>
    )

}
