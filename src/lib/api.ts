// STREAMING_CHUNK: Configuring custom fetch wrapper for DRF payloads...
import { useAuthStore } from './store';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

export async function drfFetch(endpoint: string, options: FetchOptions = {}) {
  const { token, companyCode } = useAuthStore.getState();
  
  // Construct destination URL along with search parameters
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  if (options.params) {
    Object.entries(options.params).forEach(([key, val]) => {
      url.searchParams.append(key, val);
    });
  }

  // Inject authentication and Multi-Tenant routing headers
  const headers = new Headers(options.headers || {});
  headers.set('Content-Type', 'application/json');
  
  if (token) {
    headers.set('Authorization', `Token ${token}`); // Standard DRF token Auth style
  }
  
  if (companyCode) {
    headers.set('X-Tenant-Schema', companyCode.toLowerCase()); // Routes log events inside the DB
  }

  const response = await fetch(url.toString(), {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || 'An error occurred on the server.');
  }

  return response.json();
}