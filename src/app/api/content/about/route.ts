import { NextResponse } from 'next/server'
import { getAboutData } from '../../../../lib/getData'

export async function GET() {
  try {
    const aboutData = getAboutData()

    return NextResponse.json(aboutData)
  } catch (err) {
    return NextResponse.error()
  }
}
