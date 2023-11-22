import image1 from '../../public/images/slide-1.jpg';
import image2 from '../../public/images/slide-2.jpg';
import image3 from '../../public/images/slide-3.jpg';
import image4 from '../../public/images/slide-4.jpg';

export const images: string[] = [image1.src, image2.src, image3.src, image4.src];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
