export interface SplitStat {
  value: string;
  label: string;
}

export interface SplitFeature {
  id: string;
  headline: string;
  paragraph: string;
  image: string;
  imageAlt: string;
  stats: SplitStat[];
}

export interface CreatorFeature {
  id: string;
  headline: string;
  paragraph: string;
  highlight: string;
  image: string;
  imageAlt: string;
  checklist: string[];
}
