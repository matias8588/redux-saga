export interface SystemState {
  user: Array<[]>;
}

export interface User {
  firstName: string;
  lastName: string;
  id: number;
}

export interface UserState {
  list: User[];
}
