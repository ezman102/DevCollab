export const makeBase64ImgToUrl = (data: string | null, mimeType?: string) =>
  `data:${mimeType || 'image/png'};base64, ${data || ''}`
