export interface Resume {
  firstName: string;
  lastName: string;
  jobTitle: string;
  imageUrl: string;
  linkedInUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  skills: Skill[];
  languages: Language[];
}
interface Language {
  name: string;
  level: string;
}
interface Skill {
  name: string;
  level: number;
  maximumLevel: number;
}
