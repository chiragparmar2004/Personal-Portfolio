import { useRef } from 'react';

export const useGSAPAnimations = () => {
  const containerRef = useRef(null);
  
  // Return container ref without any animations
  return containerRef;
};

// Hover animation hooks - disabled
export const useHoverAnimation = () => {
  // No animations - just return
  return;
};

// Scroll-triggered animation hook - disabled
export const useScrollAnimation = () => {
  // No animations - just return
  return;
};

// Stagger animation hook - disabled
export const useStaggerAnimation = () => {
  // No animations - just return
  return;
};
