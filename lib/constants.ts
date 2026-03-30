export const EVENT_CATEGORIES = [
  "music",
  "sports",
  "theater",
  "conference",
  "festival",
  "other",
] as const;

export const EVENT_CATEGORY_LABELS: Record<(typeof EVENT_CATEGORIES)[number], string> = {
  music: "Music",
  sports: "Sports",
  theater: "Theater",
  conference: "Conference",
  festival: "Festival",
  other: "Other",
};
