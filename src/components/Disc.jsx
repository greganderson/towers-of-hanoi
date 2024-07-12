import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export default function Disc({ disc, isTopDisc }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: disc.id,
    disabled: !isTopDisc,
  });

  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <img
      src={disc.disc}
      alt={"Disc"}
      ref={setNodeRef}
      style={style}
      draggable={false}
      {...listeners}
      {...attributes} />
  );
}

