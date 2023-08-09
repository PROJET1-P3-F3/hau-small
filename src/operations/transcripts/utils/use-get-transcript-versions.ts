import { useEffect, useState } from 'react'
import { StudentTranscriptVersion } from 'src/gen/haClient'
import { transcriptProvider } from 'src/providers/transcript-provider'

export const useGetTranscriptVersion = (studentId: string, transcriptId: string) => {
  const [versions, setVersions] = useState<StudentTranscriptVersion[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const res = await transcriptProvider.getVersions(studentId, transcriptId)
      setVersions(res as any)
      setLoading(false)
    }

    fetch()
  }, [studentId, transcriptId])

  return { versions, isLoading }
}
