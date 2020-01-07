import AppConfig from '../../Config/AppConfig'
import { path } from 'ramda'
import { generateSha256 } from '../../Utils/Utils'
export const create = api => ({
  submitFilter: (data) => {
    const { filter, page, size, sort, table, columns, datasource } = data
    const filterStr = JSON.stringify(filter)
    const col = (columns.map(r => r.id) || []).join(' ')
    console.log('filterStr===>', filterStr)
    console.log('col===>', col)
    // api.setHeader('mId', userMerchantId)
    const query = `{${datasource}(page: ${page}, size: ${size}, where: "${filterStr.replace(/"/g, '\\"')}", sort: "") {content{ ${col} } size number totalPages}}`
    console.log('query===>', query)
    const resp = api.post('/graphql', { query })
    return resp
  }
})
