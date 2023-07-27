import { HaDataProviderType } from './HaDataProviderType'

const gradeProvider: HaDataProviderType = {
  async getOne(raId: string) {
    return {
      id: 'grades-1',
      pdfUrl: 'https://education.github.com/git-cheat-sheet-education.pdf',
      version: '1.0.0'
    }
  },
  getList: function (page: number, perPage: number, filter: any): Promise<any[]> {
    throw new Error('Function not implemented.')
  },
  saveOrUpdate: function (resources: any): Promise<any> {
    throw new Error('Function not implemented.')
  }
}

export default gradeProvider
