export function getTagToneClass(tag) {
  const normalizedTag = tag.toLowerCase()

  if (
    normalizedTag.includes('react') ||
    normalizedTag.includes('frontend') ||
    normalizedTag.includes('ui') ||
    normalizedTag.includes('ux') ||
    normalizedTag.includes('mobile')
  ) {
    return 'tag-pill--coral'
  }

  if (
    normalizedTag.includes('node') ||
    normalizedTag.includes('api') ||
    normalizedTag.includes('java') ||
    normalizedTag.includes('spring') ||
    normalizedTag.includes('go') ||
    normalizedTag.includes('backend') ||
    normalizedTag.includes('microservices') ||
    normalizedTag.includes('testing')
  ) {
    return 'tag-pill--teal'
  }

  if (
    normalizedTag.includes('data') ||
    normalizedTag.includes('machine learning') ||
    normalizedTag.includes('pandas') ||
    normalizedTag.includes('d3')
  ) {
    return 'tag-pill--violet'
  }

  if (
    normalizedTag.includes('rust') ||
    normalizedTag.includes('systems') ||
    normalizedTag.includes('automation') ||
    normalizedTag.includes('python') ||
    normalizedTag.includes('firebase') ||
    normalizedTag.includes('realtime') ||
    normalizedTag.includes('cli')
  ) {
    return 'tag-pill--gold'
  }

  return 'tag-pill--teal'
}
