function generateDuration(postIndex: number, tagIndex: number): string {
  const duration = 8 + (postIndex * 2) + (tagIndex * 3); // Duración diferente
  return `${duration}s`;  
}

export default generateDuration;