import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Post, posts } from '#site/content'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)

  return date.toLocaleDateString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}

export function getAllTags(post: Array<Post>) {
  const tags: Record<string, number> = {}
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1
    })
  })

  return tags
}

export function sorTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a])
}
