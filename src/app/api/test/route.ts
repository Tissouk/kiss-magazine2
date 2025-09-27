import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Kiss Magazine API Test 🇰🇷',
    timestamp: new Date().toISOString(),
    status: 'No external imports - should work!'
  })
}