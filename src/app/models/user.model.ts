export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface User {
  id?: string;
  email: string;
  role: Role;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  role?: Role;
}

export interface AuthResponse {
  token?: string;
  user?: User;
  message?: string;
}

