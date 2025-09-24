import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: '服务器运行正常',
    status: 'ok',
    app: 'AI解说大师官网'
  })
}