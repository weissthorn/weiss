import { commentProp } from './../interfaces/comment';
import { resProp } from 'interfaces/res';
import { observable, action, makeAutoObservable } from 'mobx';
import { discussionProp } from './../interfaces/discussion';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default class DiscussionStore {
  @observable page: number = 1;
  @observable limit: number = 20;
  @observable total: number = 0;
  @observable loading: boolean = false;
  @observable commentLoading: boolean = false;
  @observable discussions: discussionProp[] = [];
  @observable discussion: discussionProp = {};
  @observable comments: commentProp[] = [];
  @observable comment: commentProp = {};

  constructor() {
    makeAutoObservable(this);
  }

  @action setPage = (data: number) => {
    this.page = data;
  };

  @action setDiscussion = (data: discussionProp) => {
    this.discussion = data;
  };

  @action setDiscussions = (data: discussionProp[]) => {
    this.discussions = data;
  };

  headers: HeadersInit | any = {
    'content-type': 'application/json',
    apikey: API_KEY
  };

  @action newDiscussion = async (body: discussionProp) => {
    let url = `${API_URL}/discussion/create`;
    this.loading = true;
    return await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res) => {
        this.loading = false;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action updateDiscussion = async (body: discussionProp) => {
    let url = `${API_URL}/discussion/update`;

    return await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action deleteDiscussion = async (body: discussionProp) => {
    let url = `${API_URL}/discussion/delete`;

    return await fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action
  getDiscussions = async () => {
    let uri = `${API_URL}/discussion?page=${this.page}&limit=${this.limit}`;
    this.loading = true;

    await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.loading = false;
        this.discussions = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getRecommendation = async (title: string, category: string) => {
    let uri = `${API_URL}/discussion/recommend?title=${title}&category=${category}`;
    this.loading = true;

    await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.loading = false;
        this.discussions = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getUnansweredDiscussions = async () => {
    let uri = `${API_URL}/discussion/unanswered?page=${this.page}&limit=${this.limit}`;
    this.loading = false;

    await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.loading = false;
        this.discussions = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getPopularDiscussions = async () => {
    let uri = `${API_URL}/discussion/popular?page=${this.page}&limit=${this.limit}`;
    this.loading = true;

    await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.loading = false;
        this.discussions = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getDiscussionsByUser = async (id: string) => {
    let uri = `${API_URL}/discussion/user?id=${id}&page=${this.page}&limit=${this.limit}`;
    this.loading = false;

    await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.loading = false;
        this.discussions = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getComments = async (id: string) => {
    let uri = `${API_URL}/discussion/comment?id=${id}&page=${this.page}&limit=${this.limit}`;
    this.commentLoading = false;

    return await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.commentLoading = false;
        this.comments = data;
        this.total = res.count;
        return res;
      })
      .catch((err) => console.log(err));
  };

  @action
  refreshComments = async (id: string, type: string) => {
    let uri = `${API_URL}/discussion/comment?id=${id}&page=${this.page}&limit=${this.limit}`;
    return await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.comments = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getReplies = async (id: string) => {
    let uri = `${API_URL}/discussion/reply?id=${id}&page=${this.page}&limit=${this.limit}`;
    this.commentLoading = false;

    return await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.commentLoading = false;
        this.comments = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getDiscussionsByCategory = async (slug?: string) => {
    let uri = `${API_URL}/discussion/category?category=${slug}&page=${this.page}&limit=${this.limit}`;
    this.loading = true;
    this.discussions = [];

    await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        let data = res.data;
        this.loading = false;
        this.discussions = data;
        this.total = res.count;
      })
      .catch((err) => console.log(err));
  };

  @action
  getDiscussion = async (id?: any) => {
    this.loading = true;
    let uri = `${API_URL}/discussion/${id}`;

    return await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        this.loading = false;

        if (res.success) {
          this.discussion = res.data;
          return res.data;
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action
  refreshDiscussion = async (id?: any) => {
    let uri = `${API_URL}/discussion/${id}`;

    return await fetch(uri, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          this.discussion = res.data;
          return res.data;
        } else {
          return false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action searchDiscussion = async (query: string) => {
    this.loading = true;
    this.discussions = [];
    let url = `${API_URL}/discussion/search?search=${query}`;

    await fetch(url, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          setTimeout(() => {
            this.discussions = res.data;
            this.loading = false;
            this.total = res.count!;
          }, 1000);
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };

  @action publicDiscussionSearch = async (query: string) => {
    this.loading = true;
    this.discussions = [];
    let url = `${API_URL}/discussion/public-search?search=${query}`;

    await fetch(url, {
      headers: this.headers
    })
      .then((res) => res.json())
      .then((res: resProp) => {
        if (res.success) {
          setTimeout(() => {
            this.discussions = res.data;
            this.loading = false;
            this.total = res.count!;
          }, 1000);
        } else {
          this.loading = false;
        }
      })
      .catch((err) => console.log(err));
  };
}
