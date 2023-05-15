import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getHeroData() {
  try {
    const filePath = path.join(contentDirectory, 'hero.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const matterResult = matter(fileContent)

    return matterResult
  } catch (err) {
    throw new Error(err)
  }
}

export function getAboutData() {
  try {
    const filePath = path.join(contentDirectory, 'about-me.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')

    const matterResult = matter(fileContent)

    return matterResult
  } catch (err) {
    throw new Error(err)
  }
}
