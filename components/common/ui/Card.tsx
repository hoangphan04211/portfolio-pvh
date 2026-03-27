import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "minimal-card p-8",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
