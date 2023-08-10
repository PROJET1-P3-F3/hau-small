import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

const claimValidator = zod.object({
  reason: zod.string().nonempty({ message: 'Ce champ est requis' })
})

export const claimResolver = zodResolver(claimValidator)
