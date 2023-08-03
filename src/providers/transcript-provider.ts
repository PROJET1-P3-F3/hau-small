import { StudentTranscriptClaim } from 'src/gen/haClient';
import { transcriptApi, usersApi } from './api';

const transcriptProvider = {
  async getTranscriptVersion (idStudent : string , idTranscript : string , idVersion : string){
    const {data} = await transcriptApi().getStudentTranscriptVersion(idStudent,idTranscript,idVersion)
    return data;
  },
  async sendClaim (idStudent:string,   transcriptId:string, versionId:string , ressources: StudentTranscriptClaim,){
    const claimId = ""
    const {data} = await transcriptApi().putStudentClaimsOfTranscriptVersion(idStudent, transcriptId, versionId, claimId, ressources)
    return data;
  },
  async getAllTranscripts ( studentId: string, page?: number | undefined, pageSize?: number | undefined){
    const {data} = await transcriptApi().getStudentTranscripts(studentId, page, pageSize)
    return data;
  },
  async getTranscriptById (idStudent: string, idTranscript: string) {
    const {data} = await transcriptApi().getStudentTranscriptById(idStudent,idTranscript)
    return data;
  },
  async getTranscriptVersionById (studentId: string, page?: number, pageSize?: number){
    const {data} = await transcriptApi().getStudentTranscripts(studentId, page, pageSize)
    return data;
  },
  async getTranscriptVersionPdf (studentId: string, transcriptId: string, versionId: string){
    const {data} = await transcriptApi().getStudentTranscriptVersionPdf(studentId, transcriptId, versionId)
    return data;
  }
};

export default transcriptProvider;
