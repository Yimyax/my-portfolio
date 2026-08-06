const tagColors = ["var(--cyan)", "var(--lime)", "var(--amber)"];

export function tagColor(index: number) {
  return tagColors[index % tagColors.length];
}