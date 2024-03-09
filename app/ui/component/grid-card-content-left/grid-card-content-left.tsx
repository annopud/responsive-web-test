import cardStyles from './grid-card-content-left.module.css';

export default function GridCardContentLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cardStyles.grid_content}  ${cardStyles.left}`}>
      {children}
    </div>
  );
}
