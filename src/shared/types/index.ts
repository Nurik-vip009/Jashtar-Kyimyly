import { ReactNode } from 'react';

export type TypographyVariant =
  | 'title'
  | 'desc'
  | 'navigation'
  | 'card_title'
  | 'card_date'
  | 'card_button'
  | 'card_desc';
export type WeightVariant = '400' | '500' | '600';
export type ColorVariant = 'black' | 'white' | 'black400';

export interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  color?: ColorVariant;
  weight?: WeightVariant;
  className?: string;
}
