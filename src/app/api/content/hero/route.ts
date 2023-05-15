import { NextResponse } from 'next/server'
import { getHeroData } from '../../../../lib/getData'

export async function GET() {
  try {
    const matterResult = getHeroData()

    return NextResponse.json(matterResult.data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
