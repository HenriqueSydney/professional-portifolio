const colors = {
  completed: "bg-green-500",
  active: "bg-blue-500",
  waiting: "bg-yellow-500",
  failed: "bg-red-500",
  delayed: "bg-purple-500",
} as const;

type State = keyof typeof colors;

export function getStateColor(state: State): string {
  return colors[state] || "bg-gray-500";
}
