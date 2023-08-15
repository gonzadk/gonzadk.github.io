export type TimelineItem = {
  description?: string | string[];
  mainLetter: string;
  subtitle: string;
  subtitleSmall?: boolean;
  timeline: string;
  title: string;
  titleSmall?: boolean;
};

export type TimelineListProps = {
  list: TimelineItem[];
};
