import { ImgHTMLAttributes, ReactNode } from 'react';

export interface HeroImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  children?: ReactNode;
}