const sortRenditions = require('./sort-renditions')

const getSrcset = renditions => renditions
  .map(({ src, width }, i) => `${src} ${width}w`)
  .join(',')

const getSortedSrcset = (renditions, sort = false) => {
  if (!sort) {
    return getSrcset(renditions)
  }

  const renditionsCopy = [...renditions]

  const sortedRenditions = sortRenditions(renditionsCopy)

  return getSrcset(sortedRenditions)
}

module.exports = getSortedSrcset
