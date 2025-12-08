export type PropertyType = "plot" | "villa" | "resort";
export type PropertyStatus = "available" | "sold";

export interface Location {
  lat: number;
  lng: number;
}

export interface InvestmentItem {
  label: string;
  amount: number;
}

export interface RoiModel {
  title: string;
  area: string; // e.g. "40-50 Acres"
  highlights: string[];
  returnText: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  type: PropertyType;
  price: number;
  city: string;
  state: string;
  location: Location;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  status: PropertyStatus;
  brochureUrl?: string;
  
  // New Fields based on PDF
  investmentBreakdown?: InvestmentItem[];
  roiModels?: RoiModel[];
  keyHighlights?: string[]; // For the "Conclusion" slide bullets

  createdAt: number;
  updatedAt: number;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  projectId?: string;
  projectTitle?: string;
  createdAt: number;
}

export interface FilterState {
  city: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  search: string;
}
