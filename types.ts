export enum Pillar {
  OPORTUNIDADE = 'Oportunidade Real (40%)',
  FACILIDADE = 'Facilidade & Crédito (20%)',
  BASTIDORES = 'Bastidores & Gente (30%)',
  UTILIDADE = 'Utilidade do Lar (10%)'
}

export enum Channel {
  INSTAGRAM = 'Instagram',
  WHATSAPP = 'WhatsApp',
  GOOGLE = 'Google Business'
}

export interface CalendarItem {
  id: number;
  week: number;
  day: string;
  channel: Channel;
  format: string;
  topic: string;
  objective: string;
  done: boolean;
}

export interface KPIData {
  name: string;
  value: number;
  target: number;
  unit: string;
}

export interface GeneratedContent {
  caption: string;
  hashtags: string[];
  tips: string;
}