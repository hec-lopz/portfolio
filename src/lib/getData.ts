import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { micromark } from 'micromark'
import { AboutData, HeroData, ProjectData } from '../models/Markdown.model'
import { createBrandIcons } from './createIcons'

const contentDirectory = path.join(process.cwd(), 'content')

export function getAboutData(): Omit<AboutData, 'title'> {
  try {
    const filePath = path.join(contentDirectory, 'about-me.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const matterResult = matter(fileContent)

    const { createdOn, modifiedOn, description, tech_skills, soft_skills } =
      matterResult.data

    const parsedMd = micromark(description)

    return {
      createdOn,
      modifiedOn,
      description: parsedMd,
      tech_skills,
      soft_skills,
    }
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
}

export function getHeroData(): HeroData {
  try {
    const filePath = path.join(contentDirectory, 'hero.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const {
      data: { createdOn, modifiedOn },
      content,
    } = matter(fileContent)

    const parsedBody = micromark(content)

    return {
      createdOn,
      modifiedOn,
      body: parsedBody,
    }
  } catch (err) {
    console.log({ err })
    throw new Error(err)
  }
}

export function getProjectsData(): ProjectData[] {
  try {
    const projectsDir = path.join(contentDirectory, 'projects')
    const fileNames = fs.readdirSync(projectsDir)

    const projects = fileNames.map((fileName): ProjectData => {
      const filePath = path.join(projectsDir, fileName)
      const fileContent = fs.readFileSync(filePath, 'utf8')

      const {
        data: { tech, ...data },
        content,
      } = matter(fileContent)

      const parsedBody = micromark(content)
      const parsedIcons = createBrandIcons(tech)

      return {
        ...(data as ProjectData),
        tech: parsedIcons,
        body: parsedBody,
      }
    })

    return projects
  } catch (err) {
    throw new Error(err)
  }
}
