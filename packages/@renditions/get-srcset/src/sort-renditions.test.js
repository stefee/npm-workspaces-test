const sortRenditions = require('./sort-renditions')

describe('sort renditions', () => {
  let renditions
  let sortedRenditions

  beforeEach(() => {
    renditions = [
      {
        src: '/images/320.jpg',
        width: 320
      },
      {
        src: '/images/720.jpg',
        width: 720
      },
      {
        src: '/images/640.jpg',
        width: 640
      },
      {
        src: '/images/1024.jpg',
        width: 1024
      }
    ]
    sortedRenditions = [
      {
        src: '/images/320.jpg',
        width: 320
      },
      {
        src: '/images/640.jpg',
        width: 640
      },
      {
        src: '/images/720.jpg',
        width: 720
      },
      {
        src: '/images/1024.jpg',
        width: 1024
      }
    ]
  })

  it('should return sorted renditions', () => {
    expect(sortRenditions(renditions)).toEqual(sortedRenditions)
  })

  it('should sort renditions in place', () => {
    sortRenditions(renditions)
    expect(renditions).toEqual(sortedRenditions)
  })
})
