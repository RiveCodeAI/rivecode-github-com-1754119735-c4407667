export const generateGradient = (color1: string = '#2EA44F', color2: string = '#4F46E5', opacity: number = 0.2) => {
  return `radial-gradient(circle at top right, ${color1}${Math.round(opacity * 255).toString(16)} 0%, ${color2}${Math.round(opacity * 255).toString(16)} 100%)`;
};

export const pulsingGradient = (baseColor: string = '#2EA44F') => {
  return {
    background: baseColor,
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  };
};

export const textGradient = (startColor: string = '#2EA44F', endColor: string = '#4F46E5') => {
  return {
    background: `linear-gradient(to right, ${startColor}, ${endColor})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
};