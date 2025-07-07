import React from 'react';
import { HeroImageProps } from './HeroImage.types';

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, children, ...rest }) => (
  <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
    <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} {...rest} />
    {children && (
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', background: 'rgba(0,0,0,0.3)'
      }}>
        {children}
      </div>
    )}
  </div>
);

export default HeroImage;