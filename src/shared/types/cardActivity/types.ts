export interface cardProps {
  image: string;
  title: string;
  description: string;
  fullText?: string;
  isOpen: boolean;
  Course: boolean;
  onClick: () => void;
}
