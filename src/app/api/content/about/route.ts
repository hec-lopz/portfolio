import { NextResponse } from 'next/server'
import { getAboutData } from '../../../../lib/getData'

export async function GET() {
  const aboutData = getAboutData()

  return NextResponse.json(aboutData)
}
