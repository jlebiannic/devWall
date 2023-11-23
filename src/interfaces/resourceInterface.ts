type Lang = "fr" | "en";
type Media = "post" | "video" | "book";

interface Resource {
  id?: string;
  media: Media;
  title: string;
  lang: Lang;
  image: string;
  url: string;
  description: string;
  rating: number;
  isTop: boolean;
  isValid: boolean;
  date: string;
}

export default Resource;
