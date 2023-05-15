import { NextResponse } from 'next/server'
import { getHeroData } from '../../../../lib/getData'

export async function GET() {
  try {
    const heroData = getHeroData()

    return NextResponse.json(heroData)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
