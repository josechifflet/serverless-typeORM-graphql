import User from './user';

export const entities = [
  User
];
export interface ModelType {
  User: typeof User;
}

export default {
  User
}
