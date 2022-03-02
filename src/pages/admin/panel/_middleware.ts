import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { user } = req.cookies
  if (user) return NextResponse.next()
  else return NextResponse.redirect('/admin/auth')
}
