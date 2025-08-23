
export function detectResponseType(contentType: string): 'json' | 'blob' | 'text' | 'arrayBuffer' {
  if (contentType.includes('application/json')) {
    return 'json';
  }
  
  if (contentType.includes('application/pdf') || 
      contentType.includes('image/') ||
      contentType.includes('video/') ||
      contentType.includes('audio/')) {
    return 'blob';
  }
  
  if (contentType.includes('text/')) {
    return 'text';
  }
  
  // Default para JSON (maioria das APIs)
  return 'json';
}
