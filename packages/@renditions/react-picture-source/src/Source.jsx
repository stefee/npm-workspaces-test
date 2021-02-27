import React from 'react'
import getSizes from '@renditions/get-sizes'
import getSrcset, { sortRenditions } from '@renditions/get-srcset'

const Source = ({
  getSrc,
  renditions,
  size = null,
  breakpoints = [],
  autoSortRenditions = false,
  autoSortBreakpoints = false,
  ...rest
}) => {
  // create a copy of renditions array for in-place transforms
  const renditionsConfig = renditions.slice(0)

  if (autoSortRenditions) {
    sortRenditions(renditionsConfig)
  }

  renditionsConfig.forEach(rendition => {
    rendition.src = getSrc(rendition)
  })

  return (
    <source
      srcSet={getSrcset(renditionsConfig)}
      sizes={size && getSizes({ size, breakpoints }, autoSortBreakpoints)}
      {...rest}
    />
  )
}

export default Source
