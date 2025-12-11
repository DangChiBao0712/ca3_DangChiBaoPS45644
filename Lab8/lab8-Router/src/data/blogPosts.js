export const blogPosts = [
  {
    id: 1,
    title: 'Vue Router cơ bản',
    content: 'Giới thiệu cách dùng Vue Router...'
  },
  {
    id: 2,
    title: 'Dynamic Route trong Vue',
    content: 'Cách sử dụng params trong router...'
  },
]

export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === Number(id))
}
