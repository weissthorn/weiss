import { resProp } from './../interfaces/res';
import { action, observable, makeAutoObservable } from 'mobx';
import { categoryProp } from '../interfaces/category';

const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

export default class CategoryStore {
  @observable loading: boolean = false;
  @observable total: number = 0;
  @observable page: number = 1;
  @observable limit: number = 100;
  @observable category: categoryProp = {};
  @observable categories: categoryProp[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action setLoading = (data: boolean) => {
    this.loading = data;
  };

  @action setPage = (data: number) => {
    this.page = data;
  };

  @action setCategory = (data: categoryProp) => {
    this.category = data;
  };

  @action newCategory = async (body: categoryProp) => {
    let url = `${API_URL}/category/create`;

    return await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          return { success: true, data: res.data };
        } else {
          return { success: false, message: res.message };
        }
      })
      .catch((err) => console.log(err));
  };

  @action updateCategory = async (body: categoryProp) => {
    let url = `${API_URL}/category/update`;

    return await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          return res;
        } else {
          return { success: false, message: res.message };
        }
      })
      .catch((err) => console.log(err));
  };

  @action getCategory = async (slug: string) => {
    let url = `${API_URL}/category/${slug}`;

    return await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.category = res.data;
          return res.data.id;
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action getCategories = async () => {
    this.loading = true;
    let url = `${API_URL}/category?page=${this.page}&limit=${this.limit}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.categories = res.data.map((item: categoryProp) => ({
            ...item,
            ...{
              discussion: `${item.discussion}`,
              authRequired: item.authRequired ? 'yes' : 'no'
            }
          }));
          this.loading = false;
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action searchCategory = async (query: string) => {
    this.loading = true;
    this.categories = [];
    let url = `${API_URL}/category/search?page=${this.page}&limit=${this.limit}&query=${query}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          setTimeout(() => {
            this.total = res.count;
            this.categories = res.data.map((item: categoryProp) => ({
              ...item,
              ...{
                discussion: `${item.discussion}`,
                authRequired: item.authRequired ? 'yes' : 'no'
              }
            }));
            this.loading = false;
          }, 1000);
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };
}
