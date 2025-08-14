import { useEffect, useState } from 'react';

interface AnimatedSphereProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'massive';
  interactive?: boolean;
}

const AnimatedSphere = ({ className = "", size = "medium", interactive = false }: AnimatedSphereProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.documentElement.getBoundingClientRect();
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [interactive]);

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-8 h-8 max-w-[32px] max-h-[32px]';
      case 'medium':
        return 'w-full h-full max-w-[200px] max-h-[200px]';
      case 'large':
        return 'w-64 h-64 max-w-[256px] max-h-[256px]';
      case 'massive':
        return 'w-[100vw] h-[100vh] max-w-none max-h-none';
      default:
        return 'w-full h-full max-w-[200px] max-h-[200px]';
    }
  };

  const getInteractiveStyles = () => {
    if (!interactive) return {};
    
    const intensity = isHovered ? 1.5 : 1;
    const offsetX = (mousePos.x - 50) * 0.1 * intensity;
    const offsetY = (mousePos.y - 50) * 0.1 * intensity;
    
    return {
      transform: `translate(${offsetX}px, ${offsetY}px) scale(${isHovered ? 1.1 : 1})`,
      transition: 'transform 0.3s ease-out',
    };
  };

  return (
    <div className={`relative ${className}`} style={interactive ? getInteractiveStyles() : {}}>
      <svg 
        viewBox="-5 -5 110 110" 
        strokeWidth="0" 
        className={getSizeClasses()}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="sphereGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.8)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.3)" />
          </radialGradient>
        </defs>
        <g 
          fill="none" 
          id="sphere" 
          transform="rotate(135 50 50)" 
          strokeWidth="0" 
          stroke="url(#sphereGradient)"
          filter={interactive ? "url(#glow) drop-shadow(0 0 20px rgba(59,130,246,0.8))" : "drop-shadow(0 0 3px rgba(59,130,246,0.8))"}
        >
          <ellipse cx="50" cy="3" rx="17" ry="4">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="0s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="0s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="6" rx="23.748684174075834" ry="4.4">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-0.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-0.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="10" rx="30" ry="4.84">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-0.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-0.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="14" rx="34.698703145794944" ry="5.324">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-0.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-0.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="18" rx="38.4187454245971" ry="5.8564">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-0.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-0.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="22" rx="41.42463035441595" ry="6.44204">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-1s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-1s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="26" rx="43.86342439892262" ry="7.086244">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-1.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-1.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="30" rx="45.8257569495584" ry="7.7948684">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-1.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-1.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="34" rx="47.37087712930805" ry="8.57435524">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-1.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-1.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="38" rx="48.53864439804639" ry="9.431790764">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-1.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-1.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="42" rx="49.35585071701226" ry="10.3749698404">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="46" rx="49.83974317750845" ry="11.41246682444">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-2.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="50" rx="50" ry="12.553713506884012">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-2.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-2.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="54" rx="49.83974317750845" ry="11.41246682444">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-2.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-2.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="58" rx="49.35585071701227" ry="10.3749698404">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-2.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-2.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="62" rx="48.53864439804639" ry="9.431790764">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-3s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-3s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="66" rx="47.37087712930804" ry="8.57435524">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-3.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-3.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="70" rx="45.825756949558404" ry="7.7948684">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-3.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-3.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="74" rx="43.86342439892262" ry="7.086244">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-3.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-3.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="78" rx="41.42463035441595" ry="6.44204">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-3.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-3.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="82" rx="38.4187454245971" ry="5.8564">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="86" rx="34.698703145794944" ry="5.324">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-4.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-4.2s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="90" rx="30" ry="4.84">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-4.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-4.4s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="94" rx="23.74868417407584" ry="4.4">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-4.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-4.6s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
          <ellipse cx="50" cy="96.75" rx="18" ry="3.5">
            <animate attributeName="stroke-width" values="0.1;1.2;0.1" dur={interactive ? "3s" : "5s"} begin="-4.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animate>
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur={interactive ? "3s" : "5s"} begin="-4.8s" repeatCount="indefinite" keyTimes="0;0.5;1" keySplines="0.9 0 0.9 0; 0 0.9 0 0.9" calcMode="spline"></animateTransform>
          </ellipse>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSphere;
