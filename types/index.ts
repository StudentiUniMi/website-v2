import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/* Localized string (example: { it: 'ita', en: 'eng} ) */
export interface LocalizedField {
  [key: string]: any;
}

export interface Faq {
  question: LocalizedField;
  answer: LocalizedField;
}

export interface Service {
  name: LocalizedField;
  description: LocalizedField;
  link: string;
  icon?: string;
}
