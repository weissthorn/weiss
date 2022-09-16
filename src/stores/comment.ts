import { resProp } from './../interfaces/res';
import { action, observable, makeAutoObservable } from 'mobx';
import { commentProp } from '../interfaces/comment';

const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

export default class CommentStore {
  @observable _loading: boolean = false;
  @observable more: boolean = false;
  @observable page: number = 1;
  @observable limit: number = 20;
  @observable comment: commentProp = {};
  @observable comments: commentProp[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action setPage = (data: number) => {
    this.page = data;
  };

  @action newComment = async (body: any) => {
    let url = `${API_URL}/comment/create`;

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

  @action updateComment = async (body: any) => {
    let url = `${API_URL}/comment/update`;

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

  @action getComment = async (id?: string) => {
    let url = `${API_URL}/comment/${id}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.comment = res.data;
        }
      })
      .catch((err) => console.log(err));
  };

  @action getComments = async (requestId: any, paginate: boolean) => {
    this._loading = true;
    let url = `${API_URL}/comments?page=${this.page}&limit=${this.limit}&requestId=${requestId}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          if (paginate) {
            let data = this.comments;
            this.more = res.data.length === 0 ? true : false;
            data = [...data, ...res.data];
            this.comments = data;
            this._loading = false;
          } else {
            this.comments = res.data;
            this._loading = false;
          }
        } else {
          this._loading = false;
        }
      })
      .catch((err) => console.log(err));
  };
}
