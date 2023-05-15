import { NextResponse } from 'next/server'
import { getAboutData } from '../../../../lib/getData'

export async function GET() {
  try {
    const matterResult = getAboutData()

    return NextResponse.json(matterResult.data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
