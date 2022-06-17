export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  isFluid?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}
