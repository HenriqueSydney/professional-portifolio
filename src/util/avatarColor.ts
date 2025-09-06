const avatarColors = [
  "bg-purple-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-pink-600",
  "bg-orange-600",
  "bg-teal-600",
]

export function getAvatarColor(seed: string) {
  const index = seed.charCodeAt(0) % avatarColors.length
  return avatarColors[index]
}