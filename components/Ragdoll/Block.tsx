import { forwardRef } from 'react';
import { RoundedBox } from '@react-three/drei';

export const Block = forwardRef(function Block({
  children,
  transparent=false, 
  opacity=1,
  color='white',
  args=[1, 1, 1],
  ...props
}: {
  children?: React.ReactNode,
  transparent?: boolean,
  opacity?: number,
  color?: string,
  args?: [number, number, number],
  [key: string]: any
}, ref: any) {
  return (
    <RoundedBox args={args} receiveShadow castShadow ref={ref} {...props}>
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </RoundedBox>
  )
});
