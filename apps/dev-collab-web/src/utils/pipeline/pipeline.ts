import type { PipelineFilter } from './filter'
import { filterError } from './filter-error'
import { pipe } from './pipe'

export const startPipeline = (filter: PipelineFilter): PipelineFilter => pipe(filterError, filter)
