import { AxiosError } from 'axios'
import { usePrompt } from '../prompt/prompt'
import type { PipelineFilter } from './filter'

export const filterError =
  (next: PipelineFilter): PipelineFilter =>
  async (...args) => {
    const prompt = usePrompt()

    try {
      return await next(...args)
    } catch (err) {
      if (err instanceof AxiosError) {
        prompt.alert(err.response?.data)
      }

      throw err
    }
  }
