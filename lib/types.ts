export type EventCategory =
  | "music"
  | "sports"
  | "theater"
  | "conference"
  | "festival"
  | "other";

export type SeatingType = "general" | "assigned" | "mixed";

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  category: EventCategory;
  image: string;
  description: string;
  capacity: number;
  soldTickets: number;
  ratings: number;
  reviews: Review[];
  seatingType: SeatingType;
}

export interface FAQ {
  question: string;
  answer: string;
}
