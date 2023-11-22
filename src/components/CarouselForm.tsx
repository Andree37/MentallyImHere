import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';

const OPTIONS: EmblaOptionsType = { containScroll: 'trimSnaps', dragFree: false, watchDrag: false };
const SLIDES = [
    {
        question: 'potato',
        answers: ['a', 'b', 'c'],
    },
    {
        question: 'potato',
        answers: ['a', 'b', 'c'],
    },
    {
        question: 'potato',
        answers: ['a', 'b', 'c'],
    },
];

export default function CarouselForm() {
    return (
        <div className="sandbox__carousel">
            <EmblaCarousel title={'Triagem'} slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
