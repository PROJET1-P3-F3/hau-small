export type HaDataProviderType = {
  getList: (page: number, perPage: number, filter: any) => Promise<Array<any>>
  getOne: (id: string, options?: Record<string, any>) => Promise<any>
  saveOrUpdate: (resources: any, options?: Record<string, any>) => Promise<any>
}
