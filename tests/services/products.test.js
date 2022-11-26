const { productsService } = require('../../src/services')

describe('#productsService', () => {
  it('should fetch product data with reviews', async () => {
    // given
    const sku = '102030'

    // when
    const data = await productsService.getProductsBySku({ sku })

    // then
    expect(data).toEqual({
      product: {
        image: 'https://http2.mlstatic.com/D_Q_NP_953917-MLA51045674653_082022-P.webp',
        name: 'GoPro Hero9 5k'
      },
      reviews: {
        reviews: [
          {
            comments: 'Very good',
            name: 'Andrea Good',
            stars: 5
          },
          {
            comments: 'Not so good',
            name: 'Andrea Bad',
            stars: 3
          },
          {
            comments: 'So good',
            name: 'Andrea So Good',
            stars: 5
          }
        ],
        stars: '4.33'
      }
    })
  })
})
