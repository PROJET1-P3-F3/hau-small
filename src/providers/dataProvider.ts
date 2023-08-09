import { HaDataProviderType } from './HaDataProviderType'
import { RaDataProviderType } from './RaDataProviderType'
import profileProvider from './profileProvider'
import studentProvider from './studentProvider'
import feeProvider from './feeProvider'
import paymentProvider from './paymentProvider'
import teacherProvider from './teacherProvider'
import gradeProvider from './grades-provider'
import haTranscriptProvider, { transcriptClaimProvider, transcriptVersionProvider } from './transcript-provider'

export const maxPageSize = 500

const getProvider = (resourceType: string): HaDataProviderType => {
  if (resourceType === 'profile') return profileProvider
  if (resourceType === 'students') return studentProvider
  if (resourceType === 'fees') return feeProvider
  if (resourceType === 'payments') return paymentProvider
  if (resourceType === 'teachers') return teacherProvider
  if (resourceType === 'grades') return gradeProvider
  if (resourceType === 'transcripts') return haTranscriptProvider
  if (resourceType === 'transcriptsVersion') return transcriptVersionProvider
  if (resourceType === 'transcriptsClaim') return transcriptClaimProvider
  throw new Error('Unexpected resourceType: ' + resourceType)
}

const dataProvider: RaDataProviderType = {
  async getList(resourceType: string, params: any) {
    const pagination = params.pagination
    const page = pagination.page === 0 ? 1 /* TODO(empty-pages) */ : pagination.page
    let perPage = pagination.perPage
    if (perPage > maxPageSize) {
      console.warn(`Page size is too big, truncating to maxPageSize=${maxPageSize}: resourceType=${resourceType}, requested pageSize=${perPage}`)
      perPage = maxPageSize
    }

    const filter = params.filter
    const result = await getProvider(resourceType).getList(page, perPage, filter)
    return { data: result, total: Number.MAX_SAFE_INTEGER }
  },
  async getOne(resourceType: string, params: any) {
    const result = await getProvider(resourceType).getOne(params.id, params.options)
    return { data: result }
  },
  async update(resourceType: string, params: any) {
    const result = await getProvider(resourceType).saveOrUpdate([params.data], params.options)
    return { data: result[0] }
  },
  async create(resourceType: string, params: any) {
    const result = await getProvider(resourceType).saveOrUpdate(
      resourceType === 'students' || resourceType === 'teachers' ? toEnabledUsers([params.data]) : [params.data],
      params.options
    )
    return { data: result[0] }
  }
}

const toEnabledUsers = (users: Array<any>): Array<any> => {
  let enabledUsers = []
  for (const user of users) {
    let enabledUser = Object.assign(user)
    enabledUser.status = 'ENABLED'
    enabledUsers.push(enabledUser)
  }
  return enabledUsers
}

export default dataProvider
