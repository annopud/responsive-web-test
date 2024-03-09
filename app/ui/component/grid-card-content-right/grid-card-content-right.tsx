import cardStyles from './grid-card-content-right.module.css';
export default function GridCardContentRight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cardStyles.grid_content} ${cardStyles.right}`}>
      {children}
    </div>
  );
}
