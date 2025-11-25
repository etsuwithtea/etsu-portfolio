export type CarouselMediaItem = {
  src: string;
  alt?: string;
  type?: 'video';
};

export type SocialLink = {
  name: string;
  icon: string;
  url: string;
};

export type Activity = {
  title: string;
  date: string;
  description: string;
  highlights: string[];
  images: CarouselMediaItem[];
};

export type Project = {
  title: string;
  images: CarouselMediaItem[];
  desc: string;
  role: string;
  tools: string[];
  github?: string;
  link?: string;
  isPrototype?: boolean;
};

export type Certificate = {
  title: string;
  desc: string;
  image: string;
  link: string;
};
