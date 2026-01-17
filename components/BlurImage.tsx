import Image from 'next/image';
import { useState } from 'react';
import cn from 'clsx';

export function BlurImage({ layout, src, alt, className, fill = false, ...props }: any) {
  const [isLoading, setLoading] = useState(true);
  const isFill = layout === 'fill' || fill;

  const imageProps = isFill
    ? { fill: true }
    : { width: props.width, height: props.height };

  return (
    <Image
      {...imageProps}
      src={src}
      alt={alt}
      className={cn(
        className,
        'duration-700 ease-in-out rounded-lg',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}
      onLoadingComplete={() => setLoading(false)}
      {...(props.quality && { quality: props.quality })}
      {...(props.priority && { priority: props.priority })}
    />
  );
}
