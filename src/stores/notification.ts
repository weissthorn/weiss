import { resProp } from './../interfaces/res';
import { action, observable, makeAutoObservable } from 'mobx';
import { notificationProp } from '../interfaces/notification';

const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

export default class NotificationStore {
  @observable loading: boolean = false;
  @observable more: boolean = false;
  @observable page: number = 1;
  @observable limit: number = 20;
  @observable total: number = 0;
  @observable unread: number = 0;
  @observable notification: notificationProp = {};
  @observable notifications: notificationProp[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action setPage = (data: number) => {
    this.page = data;
  };

  @action newNotification = async (body: any) => {
    let url = `${API_URL}/notification/create`;

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

  @action markRead = async (id: string) => {
    let url = `${API_URL}/notification/read`;

    return await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      },
      body: JSON.stringify({ id })
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

  @action markAllRead = async (userId: string) => {
    let url = `${API_URL}/notification/read-all`;

    return await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      },
      body: JSON.stringify({ userId })
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

  @action getNotification = async (id?: string) => {
    this.loading = true;
    let url = `${API_URL}/notification/${id}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.notification = res.data;
          this.loading = false;
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action getUnreadNotification = async (id?: string) => {
    let url = `${API_URL}/notification/unread/?userId=${id}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.unread = res.data;
        }
      })
      .catch((err) => console.log(err));
  };

  @action getNotifications = async (id: string, paginate: boolean) => {
    this.loading = true;
    let url = `${API_URL}/notification?page=${this.page}&limit=${this.limit}&userId=${id}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: any) => {
        if (res.success) {
          setTimeout(() => {
            if (paginate) {
              this.more = res.count > this.limit;
              let newNotification = this.notifications;
              this.notifications = [...newNotification, ...res.data];
              this.total = res.count;
            } else {
              this.notifications = res.data;
              this.total = res.count;
            }
            this.loading = false;
          }, 3000);
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };
}
