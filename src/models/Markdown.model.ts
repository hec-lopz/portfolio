type BaseMarkdown = {
  createdOn: string
  modifiedOn: string
}

export interface AboutData extends BaseMarkdown {
  description: string
  title: string
  tech_skills: string[]
  soft_skills: string[]
}

export interface HeroData extends BaseMarkdown {
  body: string
}

export interface ProjectData extends BaseMarkdown {
  id: string
  published_date: string
  title: string
  tech: string[]
  img_name: string
  live_url: string
  github_url: string
  body: string
}
