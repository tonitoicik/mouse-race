export interface Position {
  top: number;
  left: number;
}

export function generateUniquePositions(count: number): Position[] {
  const positions: Position[] = [];
  const minDistance = 120;
  const maxWidth = window.innerWidth * 0.6;
  const maxHeight = window.innerHeight * 0.70;
  const leftMargin = 50; // Минимальное расстояние от левой границы

  const isOverlap = (top: number, left: number) => {
    return positions.some((position) => {
      const distance = Math.sqrt(
          Math.pow(top - position.top, 2) + Math.pow(left - position.left, 2)
      );
      return distance < minDistance;
    });
  };

  for (let i = 0; i < count; i++) {
    let top = 0;
    let left = 0;

    do {
      top = Math.floor(Math.random() * maxHeight);
      left = leftMargin + Math.floor(Math.random() * (maxWidth - leftMargin));
    } while (isOverlap(top, left));

    positions.push({ top, left });
  }

  return positions;
}


