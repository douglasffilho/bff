const build = require('../helper')

describe('#controllers', () => {
  const app = build()

  it('#reviews should find review by sku', async () => {
    // given
    const sku = '102030'

    // when
    const res = await app.inject({
      url: `/v1/reviews/${sku}`
    })

    // then
    expect(res.json()).toEqual({
      reviews: [
        {
          id: 'customer-id-1',
          name: 'Andrea Good',
          stars: 5,
          comments: 'Very good'
        },
        {
          id: 'customer-id-3',
          name: 'Andrea Bad',
          stars: 3,
          comments: 'Not so good'
        },
        {
          id: 'customer-id-5',
          name: 'Andrea So Good',
          stars: 5,
          comments: 'So good'
        }
      ],
      stars: '4.33'
    })
  })

  it('#reviews should get empty review by unknown sku', async () => {
    // given
    const sku = 'unknown'

    // when
    const res = await app.inject({
      url: `/v1/reviews/${sku}`
    })

    // then
    expect(res.json()).toEqual({
      reviews: [],
      stars: 0
    })
  })
})
