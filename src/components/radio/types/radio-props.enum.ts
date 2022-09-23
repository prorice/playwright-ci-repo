export const RadioLabelPlacement = {
  end: 'end',
  start: 'start',
  top: 'top',
  bottom: 'bottom',
} as const;
export type RadioLabelPlacementType =
  typeof RadioLabelPlacement[keyof typeof RadioLabelPlacement];
