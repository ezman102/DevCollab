import moment from 'moment'

export const formatDate = (date: string | null, format?: string) =>
  date ? moment(date).format(format || `DD/MM/YYYY`) : '-'
