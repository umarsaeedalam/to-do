// Define the type for the component props using TypeScript
type LongArrowProps = {
  /**
   * The direction the arrow points.
   * @default 'right'
   */
  direction?: 'right' | 'left' | 'up' | 'down';
  /**
   * Tailwind width/height class for the line length (e.g., 'w-40', 'h-32').
   * @default 'w-24'
   */
  length?: string;
  /**
   * Tailwind height/width class for the line thickness (e.g., 'h-1', 'w-0.5').
   * @default 'h-0.5'
   */
  thickness?: string;
  /**
   * Tailwind background color class for the arrow (e.g., 'bg-black', 'bg-blue-500').
   * @default 'bg-gray-800'
   */
  color?: string;
  /**
   * Additional Tailwind classes for the container.
   */
  tipColor?: string;
  className?: string;
};

/**
 * LongArrow Component (TypeScript Version)
 * Renders a long arrow shape using Tailwind CSS.
 * Customizable via props for direction, length, thickness, and color.
 */
const LongArrow: React.FC<LongArrowProps> = ({ 
  direction = 'right', 
  length = 'w-24', // Default length (width for horizontal, height for vertical)
  thickness = 'h-0.5', // Default thickness (height for horizontal, width for vertical)
  color = 'bg-gray-800', // Default color
  tipColor = 'text-gray-800',
  className = '' // Allow passing extra classes
}) => {

  // Determine orientation and adjust length/thickness classes accordingly
  const isHorizontal = direction === 'right' || direction === 'left';
  const lineLengthClass = isHorizontal ? length : thickness;
  const lineThicknessClass = isHorizontal ? thickness : length;

  // Base styles for the container (holds line and head)
  const containerClasses = `relative inline-flex items-center justify-center ${className}`;

  // Styles for the line part of the arrow
  const lineClasses = `
    ${lineLengthClass} 
    ${lineThicknessClass} 
    ${color} 
    rounded-full 
  `;

  // Styles for the arrowhead part
  // We use border tricks on a rotated square positioned absolutely
  // Size of the arrowhead base (adjusts the overall arrowhead size)
  const headSize = `w-2 h-2`; // Adjust size as needed (e.g., w-3 h-3)
  
  // Basic check for thickness to determine border size. 
  // You might refine this logic based on the exact Tailwind classes you use.
  const isThin = thickness.includes('px') || thickness.includes('0.5') || thickness.includes('1');
  const headBorderThickness = isThin ? 'border-2' : 'border-[3px]'; 

  let headPositionClasses = '';
  let headRotationClass = 'transform';
  // Ensure border color class is generated correctly
  const borderColorClass = color.startsWith('bg-') ? `border-${color.substring(3)}` : 'border-current'; // Fallback to current text color if format unknown
  let headBorderClasses = `absolute ${headSize} ${headBorderThickness} ${borderColorClass}`;


  // Determine arrowhead position, rotation, and visible borders based on direction
  switch (direction) {
    case 'up':
      headPositionClasses = '-top-1 left-1/2 -translate-x-1/2'; // Position at the top-center
      headRotationClass += ' -rotate-45'; // Rotate to point up
      headBorderClasses += ` border-t-transparent border-r-transparent`; // Show bottom and left borders
      break;
    case 'down':
      headPositionClasses = '-bottom-1 left-1/2 -translate-x-1/2'; // Position at the bottom-center
      headRotationClass += ' rotate-[135deg]'; // Rotate to point down (45 + 90)
      headBorderClasses += ` border-t-transparent border-r-transparent`; // Show top and left borders (after rotation)
      break;
    case 'left':
      headPositionClasses = '-left-1 top-1/2 -translate-y-1/2'; // Position at the left-center
      headRotationClass += ' rotate-[225deg]'; // Rotate to point left (135 + 90)
      headBorderClasses += ` border-t-transparent border-r-transparent`; // Show top and right borders (after rotation)
      break;
    case 'right':
    default: // Default to right
      headPositionClasses = '-right-1 top-1/2 -translate-y-1/2'; // Position at the right-center
      headRotationClass += ' rotate-45'; // Rotate to point right
      headBorderClasses += ` border-b-transparent border-l-transparent`; // Show top and right borders
      break;
  }
  
  // Combine all arrowhead classes
  const arrowHeadClasses = `${headBorderClasses} ${headPositionClasses} ${headRotationClass} ${tipColor}`;

  return (
    <div className={containerClasses} role="presentation">
      {/* The main line of the arrow */}
      <div className={lineClasses}></div>
      {/* The arrowhead */}
      <div className={arrowHeadClasses}></div>
    </div>
  );
};


export default LongArrow; 

