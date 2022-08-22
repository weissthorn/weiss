import { resProp } from './../interfaces/res';
import { action, observable, makeAutoObservable } from 'mobx';
import { userProp } from '../interfaces/user';
import { settingsProp } from '../interfaces/settings';

const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

export default class SettingsStore {
  @observable loading: boolean = false;
  @observable settings: settingsProp = {
    email: { host: '', email: '', password: '' }
  };
  @observable admin: userProp = {};
  @observable files: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action setAdmin = (data: userProp) => {
    this.admin = data;
  };

  @action setSettings = (data: settingsProp) => {
    this.settings = data;
  };

  @action create = async (body: settingsProp) => {
    let url = `${API_URL}/settings/create`;
    this.loading = true;

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

  @action update = async (body: settingsProp) => {
    let url = `${API_URL}/settings/update`;
    this.loading = true;

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
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          return res;
        } else {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          return { success: false, message: res.message };
        }
      })
      .catch((err) => console.log(err));
  };

  @action getSettings = async () => {
    let url = `${API_URL}/settings`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.settings = res.data;
        }
      })
      .catch((err) => console.log(err));
  };

  @action uploadImage = async (id: any, body: any) => {
    let url = `${API_URL}/upload/image?id=${id}`;

    return await fetch(url, {
      method: 'POST',
      headers: {
        apikey: API_KEY
      },
      body: body
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

  @action uploadFile = async (id: any, body: any) => {
    let url = `${API_URL}/upload/document/${id}`;

    return await fetch(url, {
      method: 'POST',
      headers: {
        apikey: API_KEY
      },
      body: body
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

  @action getFile = async (id: any) => {
    let url = `${API_URL}/upload/relative/${id}`;

    await fetch(url, {
      headers: {
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.files = res.data;
        }
      })
      .catch((err) => console.log(err));
  };
}
