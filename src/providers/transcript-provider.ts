import { transcriptApi } from './api'
import { HaDataProviderType } from './HaDataProviderType'

const haTranscriptProvider: HaDataProviderType = {
  //get all transcripts of student
  async getList(page: number | undefined, pageSize: number | undefined, filter: any) {
    const { data } = await transcriptApi().getStudentTranscripts(filter.studentId, page, pageSize)
    return data
  },
  async getOne(id: string): Promise<any> {},
  saveOrUpdate: function (resources: any): Promise<any> {
    throw new Error('Function not implemented.')
  }
}

export const transcriptProvider = {
  async getOne(studentId: string, transcriptId: string, versionId: string) {
    const { data } = await transcriptApi().getStudentTranscriptVersionPdf(studentId, transcriptId, versionId)
    return data
  },
  async getVersions(studentId: string, transcriptId: string) {
    const { data } = await transcriptApi().getTranscriptsVersions(studentId, transcriptId)
    return data
  }
}

// const transcriptProvider = {
//   //get all transcripts of student
//   async getAllTranscripts(studentId: string, page?: number | undefined, pageSize?: number | undefined) {
//     const { data } = await transcriptApi().getStudentTranscripts(studentId, page, pageSize)
//     return data
//   },
//   // Create new transcript or update existing transcript
//   async putTranscriptById (idStudent: string, transcript: Transcript[]) {
//     const {data} = await transcriptApi().crudStudentTranscripts(idStudent,transcript)
//     return data;
//   },
//   //get transcript by id
//   async getTranscriptByIdStudent(idStudent: string, idTranscript: string) {
//     const { data } = await transcriptApi().getStudentTranscriptById(idStudent, idTranscript)
//     return data
//   },
//   //get all versions of a transcript
//   async getTranscriptVersionByIdTranscript(idStudent: string, idTranscript: string) {
//     const { data } = await transcriptApi().getTranscriptsVersions(idStudent, idTranscript)
//     return data
//   },
//   //get details of specific version of a student transcript
//   async getVersionByIdTranscript(idStudent: string, idTranscript: string, idVersion: string) {
//     const { data } = await transcriptApi().getStudentTranscriptByVersion(idStudent, idTranscript, idVersion)
//     return data
//   },
//   //get pdf of a specific version of student transcript
//   async getVersionPdf(idStudent: string, idTranscript: string, idVersion: string) {
//     const { data } = await transcriptApi().getStudentTranscriptVersionPdf(idStudent, idTranscript, idVersion)
//     return data
//   },
//   //submit transcript pdf file to latest transcript version
//   async postTranscriptPdf(idStudent: string, idTranscript: string, body: File) {
//     const { data } = await transcriptApi().putStudentTranscriptVersionPdf(idStudent, idTranscript, body);
//     return data;
//   },
//   //get All Claims for a specific version of a student transcript
//   async getAllClaims(idStudent: string, idTranscript: string, idVersion: string, idClaim: string) {
//     const { data } = await transcriptApi().getStudentTranscriptClaims(idStudent, idTranscript, idVersion)
//     return data
//   },
//   // get a claim of transcript version
//   async getClaim(idStudent: string, idTranscript: string, idVersion: string, idClaim: string) {
//     const { data } = await transcriptApi().getStudentClaimOfTranscriptVersion(idStudent, idTranscript, idVersion, idClaim)
//     return data
//   },
//   // create or modify claim of Transcript Version
//   async sendClaim(idStudent: string, transcriptId: string, versionId: string, ressources: StudentTranscriptClaim) {
//     const claimId = ''
//     const { data } = await transcriptApi().putStudentClaimsOfTranscriptVersion(idStudent, transcriptId, versionId, claimId, ressources)
//     return data
//   }
// }

export default haTranscriptProvider
