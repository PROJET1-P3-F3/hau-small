import { useEffect, useState } from 'react'
import { StudentTranscriptVersion } from 'src/gen/haClient'
import dataProvider from 'src/providers/dataProvider'

export const useGetTranscriptVersion = (studentId: string, transcriptId: string) => {
  const [versions, setVersions] = useState<StudentTranscriptVersion[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const { data: res } = await dataProvider.getList('transcriptsVersion', { filter: { studentId, transcriptId }, pagination: { page: 1, perPage: 500 } })
      setVersions(res as any)
      setLoading(false)
    }

    fetch()
  }, [studentId, transcriptId])

  return { versions, isLoading }
}
