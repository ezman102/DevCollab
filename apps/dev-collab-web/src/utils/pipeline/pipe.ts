import type { PipelineFilter } from './filter'

export const pipe = (next: PipelineFilter, prev: PipelineFilter): PipelineFilter => next(prev)
