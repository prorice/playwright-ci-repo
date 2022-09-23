export const SwitchLabelPlacement = {
  end: 'end',
  start: 'start',
  top: 'top',
  bottom: 'bottom',
} as const;
export type SwitchLabelPlacementType =
  typeof SwitchLabelPlacement[keyof typeof SwitchLabelPlacement];
