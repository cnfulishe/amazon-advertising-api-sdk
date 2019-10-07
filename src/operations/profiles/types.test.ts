import { isRight } from 'fp-ts/lib/Either'
import * as t from './types'

describe('ProfileResponse', () => {
  it('should pass', () => {
    const res = t.ProfileResponse.decode({
      code: 'SUCCESS',
      profileId: 2984328618318898,
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.ProfileResponse.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('Profile', () => {
  it('should pass', () => {
    const res = t.Profile.decode({
      profileId: 2984328618318898,
      countryCode: 'US',
      currencyCode: 'USD',
      dailyBudget: 340,
      timezone: 'America/Los_Angeles',
      accountInfo: {
        marketplaceStringId: 'ATVPDKIKX0DER',
        id: 'AUZWHWR0590BC',
        type: 'seller',
      },
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.Profile.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('RegisterBrand', () => {
  it('should pass', () => {
    const res = t.RegisterBrand.decode({
      brand: 'yay',
      countryCode: 'US',
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.RegisterBrand.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})

describe('ProfileRegistrationResponse', () => {
  it('should pass', () => {
    const res = t.ProfileRegistrationResponse.decode({
      code: 'SUCCESS',
      description: 'Brand yay is registered',
      profileId: 2973802954634317,
    })

    expect(isRight(res)).toBeTruthy()
  })

  it('should fail', () => {
    const res = t.ProfileRegistrationResponse.decode({})

    expect(isRight(res)).toBeFalsy()
  })
})
