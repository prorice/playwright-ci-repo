export const InputVariant = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
} as const;
export type InputVariantType = typeof InputVariant[keyof typeof InputVariant];

export const InputIconPosition = {
  start: 'start',
  end: 'end',
} as const;
export type InputIconPositionType =
  typeof InputIconPosition[keyof typeof InputIconPosition];
