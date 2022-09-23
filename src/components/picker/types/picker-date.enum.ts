export const DateFormat = {
  YYMMDD: 'YYYY-MM-DD',
  YYMMDDHHMMSSA: 'YYYY-MM-DD  HH:mm:ss a',
} as const;
export type DateFormatType = typeof DateFormat[keyof typeof DateFormat];
