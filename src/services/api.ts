const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// API request helper
const request = async (endpoint: string, options: RequestInit = {}) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
    credentials: 'include', // Important for cookies
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Network error' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
};

// Lead API
export const leadAPI = {
  create: (data: {
    name: string;
    email: string;
    phone: string;
    course?: string;
    message?: string;
  }) => request('/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  getAll: (params?: {
    page?: number;
    limit?: number;
    status?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) queryParams.append(key, value.toString());
      });
    }
    return request(`/leads?${queryParams.toString()}`);
  },

  getStats: (period?: 'today' | 'week' | 'month' | 'all') => {
    const query = period ? `?period=${period}` : '';
    return request(`/leads/stats${query}`);
  },

  updateStatus: (id: string, status: string) =>
    request(`/leads/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  delete: (id: string) =>
    request(`/leads/${id}`, {
      method: 'DELETE',
    }),
};

// Admin API
export const adminAPI = {
  login: async (username: string, password: string) => {
    const response = await request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    // Store admin info in localStorage (not the token - that's in cookie)
    if (response.admin) {
      localStorage.setItem('admin_user', JSON.stringify(response.admin));
    }
    return response;
  },

  logout: async () => {
    const response = await request('/admin/logout', {
      method: 'POST',
    });
    localStorage.removeItem('admin_user');
    return response;
  },

  verify: () => request('/admin/verify'),

  create: (data: {
    username: string;
    email: string;
    password: string;
    role?: string;
  }) =>
    request('/admin/create', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

