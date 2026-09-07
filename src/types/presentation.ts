import type { Slide } from './slide.ts';

type Presentation = {
  id: string;
  name: string;
  slides: Slide[];
  activeSlideId: string;
}

export type { Presentation };