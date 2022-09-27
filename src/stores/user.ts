import { resProp } from './../interfaces/res';
import { action, observable, makeAutoObservable } from 'mobx';
import { userProp } from '../interfaces/user';

const API_URL: any = process.env.NEXT_PUBLIC_API_URL;
const API_KEY: any = process.env.NEXT_PUBLIC_API_KEY;

export default class UserStore {
  @observable loading: boolean = false;
  @observable more: boolean = false;
  @observable page: number = 1;
  @observable limit: number = 30;
  @observable total?: number = 0;
  @observable user: userProp = {
    id: '',
    name: ''
  };
  @observable users: userProp[] = [];
  @observable files: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action setPage = (data: number) => {
    this.page = data;
  };

  @action setUsers = (data: userProp[]) => {
    this.users = data;
  };

  @action setUser = (data: userProp) => {
    this.user = data;
  };

  @action setup = async (body: userProp) => {
    let url = `${API_URL}/user/setup`;
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
        this.loading = false;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action signup = async (body: userProp) => {
    let url = `${API_URL}/user/create`;
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
        this.loading = false;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action forgot = async (body: any) => {
    let url = `${API_URL}/user/forgot`;
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
        this.loading = false;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action reset = async (body: any) => {
    let url = `${API_URL}/user/reset`;

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

  @action verifyAccount = async (body: any) => {
    let url = `${API_URL}/user/verify`;
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
        this.loading = false;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action updateUser = async (body: userProp) => {
    let url = `${API_URL}/user/update`;

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

  @action updateAccount = async (body: userProp) => {
    let url = `${API_URL}/user/update-account`;

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

  @action updatePassword = async (body: userProp) => {
    let url = `${API_URL}/user/update-password`;

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

  @action login = async (body: userProp) => {
    let url = `${API_URL}/user/login`;
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
        this.loading = false;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action getUsers = async () => {
    this.loading = true;
    this.users = [];

    let url = `${API_URL}/user?page=${this.page}&limit=${this.limit}`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.users = res.data;
          this.total = res.count;
          this.loading = false;
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action getModerators = async () => {
    this.loading = true;
    this.users = [];

    let url = `${API_URL}/user/moderators`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.users = res.data;
          this.total = res.count;
          this.loading = false;
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action getContributors = async () => {
    this.loading = true;
    this.users = [];

    let url = `${API_URL}/user/contributors`;

    await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.users = res.data;
          this.loading = false;
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action getUser = async (id: string) => {
    let url = `${API_URL}/user/${id}`;
    this.loading = true;
    return await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        this.loading = false;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action getUsername = async (id: string) => {
    let url = `${API_URL}/user/username?username=${id}`;

    return await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          this.user = res.data;
          return res.data.id;
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action checkUsername = async (query: string) => {
    let url = `${API_URL}/user/check-username?query=${query}`;

    return await fetch(url, {
      headers: {
        'content-type': 'application/json',
        apikey: API_KEY
      }
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action searchUsers = async (query: string) => {
    this.loading = true;
    let url = `${API_URL}/user/search?page=${this.page}&limit=${this.limit}&query=${query}`;

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
            this.users = res.data;
            this.loading = false;
          }, 1000);
        } else {
          this.loading = false;
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
    let url = `${API_URL}/upload/file?id=${id}`;

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
