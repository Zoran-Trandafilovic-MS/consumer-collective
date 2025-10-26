/**
 * Helper function to get the correct asset path based on environment
 * In development: returns /path
 * In production: returns /consumer-collective/path
 */
export function assetPath(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
