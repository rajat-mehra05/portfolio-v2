import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

import 'photoswipe/dist/photoswipe.css';

export function LightBoxImage(props) {
  return (
    <Gallery>
      <Item
        original={props.src}
        thumbnail={props.src}
        width={props.width || 1024}
        height={props.height || 768}
      >
        {({ ref, open }) => (
          <Image
            ref={ref}
            alt={props.alt}
            className="rounded-lg overflow-hidden cursor-pointer"
            {...props}
            onClick={open}
          />
        )}
      </Item>
    </Gallery>
  );
}
