type Presentation = {
  id: string;
  name: string;
  slides: Slide[];
}

type Slide = {
id: string;
name: string;
}

export type { Presentation, Slide };