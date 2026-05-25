export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export interface CardItem {
  id: string
  title: string
  description: string
  tag: string
  tagColor: string
}

export type Theme = 'light' | 'dark'
