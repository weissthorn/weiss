import { userProp } from './user';
import { categoryProp } from 'interfaces/category';
export interface discussionProp {
  userId?: string;
  id?: string;
  slug?: string;
  title?: string;
  description?: string;
  content?: string;
  comment?: number;
  categoryId?: string;
  category?: categoryProp;
  profile?: userProp;
  authRequired?: boolean;
  likes?: any[];
  status?: string;
  action?: any;
  view?: number;
  createdAt?: string;
  updatedAt?: string;
}
