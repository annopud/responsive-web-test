import cardStyles from './grid-card.module.css';

export default function GridCard({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${cardStyles.grid_container} ${className}`}>
      {children}
    </div>
  );
}
