import { NextResponse } from 'next/server'
import { getProjectsData } from '../../../../lib/getData'
import { ProjectData } from '../../../../models/Markdown.model'

export async function GET() {
  try {
    const projectsData = getProjectsData()

    return NextResponse.json(projectsData)
  } catch (err) {
    throw new Error(err)
  }
}
