import creatorsData from "./creators.json";

export interface CreatorBenefit {
  id: string;
  title: string;
  text: string;
}

export interface AlsoWithUsPoint {
  title: string;
  text: string;
}

export interface CreatorStep {
  step: string;
  title: string;
  text: string;
}

export interface CreatorFaq {
  q: string;
  a: string;
}

export const creatorsContent = creatorsData;

export const ecosystemNodes = [
  { id: "node-1", label: "Meme Pages", count: "120M+ Reach", x: 20, y: 30, color: "#FFAD32", radius: 52 },
  { id: "node-2", label: "Culture Creators", count: "Culture Talent", x: 75, y: 25, color: "#FFFFFF", radius: 48 },
  { id: "node-3", label: "Digital Newsrooms", count: "85+ Outlets", x: 80, y: 70, color: "#FFAD32", radius: 46 },
  { id: "node-4", label: "Subreddits & Discords", count: "25+ Communities", x: 25, y: 75, color: "#FFFFFF", radius: 44 },
  { id: "node-hub", label: "NOISECULTURE", count: "Nerve Center", x: 50, y: 50, color: "#FFAD32", radius: 64, isCenter: true },
];
