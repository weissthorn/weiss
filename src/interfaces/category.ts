export interface categoryProp {
  id?: string;
  slug?: string;
  title?: string;
  description?: string;
  discussion?: number;
  authRequired?: boolean;
  color?: string;
  moderator?: string | string[];
  logo?: string;
  adminId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
