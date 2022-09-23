export const CheckboxLabelPlacement = {
  end: 'end',
  start: 'start',
  top: 'top',
  bottom: 'bottom',
} as const;
export type CheckboxLabelPlacementType =
  typeof CheckboxLabelPlacement[keyof typeof CheckboxLabelPlacement];
