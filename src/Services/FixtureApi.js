export default {
  postProduct: () => { return { ok: true, data: '21' } },
  loginCheckStatus: () => {
    console.log('loginCheckStatus invoked')
    return {
      ok: true,
      data: {}
    }
  },
  getLoginStatus: () => {
    console.log('getLoginStatus invoked')
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  loginDoLogin: () => {
    console.log('loginDoLogin invoked')
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        sessionToken: 'XXX',
        publicToken: 'YYYY',
        user: {
          userFullname: 'Nofrets Poai',
          userRole: '300',
          merchantCode: '000000070070070',
          merchantId: '8afb8b146d7212fa016d721bb5970005'
        }
      }
    }
  },
  merchantReadOneRequest: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        data: {
          instCd: '000000070070070',
          nm: 'Toko Tok',
          website: 'http://www.tokotok.com',
          merchantMobileNo: '085342805673',
          merchantEmail: 'tokotok@gmail.com',
          createdDt: '2019-10-10 13:00:00',
          addr: 'Menteng, Jakarta Selatan'
        }
      }
    }
  },
  merchantGetCredential: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        data: {
          keyId: 'keyIdxxxx',
          merchantId: '8afb8b146d7212fa016d721bb5970005',
          merchantSecretKey: 'xxxxxxxmerchantSecretKey',
          validFrom: '2019-10-10 13:00:00',
          validTo: '2019-12-10 13:00:00',
          remark: 'xxxremark',
          updatedDate: '2019-10-10 13:00:00',
          frontendCallbackUrl: 'http://frontend.tokotok.com',
          backendCallbackUrl: 'http://backend.tokotok.com'
        }
      }
    }
  },
  merchantRequestMinMaxLimit: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        data: {
          limitMinTrxDaily: 500000,
          limitTrxDaily: 1000000
        }
      }
    }
  },
  tablepaginationFetchAllTrxForRefundRequest: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        reports: [],
        pages: 4
      }
    }
  },
  tablepaginationFetchAllTrxForRefundReview: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        refundRequestData: [],
        pages: 4
      }
    }
  },
  tablepaginationReadRequest: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        reports: [],
        pages: 4
      }
    }
  },
  tablepaginationFetchAllUser: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS',
        content: [],
        totalPages: 4
      }
    }
  },
  removeLogin: () => {
    return {
      ok: true,
      data: {
        responseCode: 'MBDD00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  }
}
