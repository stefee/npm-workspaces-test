const sortRenditions = renditions => {
  renditions.forEach(r => {
    if (typeof r.width === 'string') {
      r.width = parseInt(r.width, 10)
    }
  })

  renditions.sort((a, b) => a.width - b.width)

  return renditions
}

module.exports = sortRenditions
