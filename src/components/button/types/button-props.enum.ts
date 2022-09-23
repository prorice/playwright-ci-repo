export const ButtonVariant = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
} as const;
export type ButtonVariantType =
  typeof ButtonVariant[keyof typeof ButtonVariant];
