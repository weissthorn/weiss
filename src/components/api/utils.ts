'use strict';

const slugify = (slug: string) => {
  slug = slug.trim();
  slug = slug.toLowerCase();
  slug = slug.replace(/[^\w]/g, '-');
  return slug;
};

const slug = () => {
  return (
    Math.random().toString(36).substring(2, 7) +
    Math.random().toString(36).substring(2, 7)
  );
};

const code = () => {
  let code = Math.random() * (1000000000 - 10000) + 10000;
  code = Math.round(code);
  return code;
};

const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const percentage = (current: number, total: number) => {
  let val: any = (current / total).toFixed(1);
  val = val * 100;
  return val;
};

const asyncForEach = async (array: any[], callback: any) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const parseCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};

const validateEmail = (email: any) => {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const withAuth = async (req: any) => {
  var allowlist: string[] | any =
    process.env.NEXT_PUBLIC_CLIENT_ORIGINS.split(',');

  if (allowlist.indexOf(req.headers.host) !== -1) {
    const apikey = req.headers.apikey;
    if (apikey !== process.env.NEXT_PUBLIC_API_KEY) {
      return { success: false, message: 'Invalid API key' };
    } else {
      return { success: true };
    }
  } else {
    return { success: false, message: 'Unathorized access' };
  }
};

const getEXT = (file: any) => {
  file = file.split('.');
  let count = file.length;
  count = count - 1;
  return file[count];
};

const isImage = (type: string) => {
  if (
    type === 'jpg' ||
    type === 'JPG' ||
    type === 'jpeg' ||
    type === 'JPEG' ||
    type === 'png' ||
    type === 'PNG' ||
    type === 'gif'
  ) {
    return true;
  } else {
    return false;
  }
};

const isDoc = (type: string) => {
  if (
    type === 'pdf' ||
    type === 'xls' ||
    type === 'xlsx' ||
    type === 'ppt' ||
    type === 'pptx' ||
    type === 'doc' ||
    type === 'docx' ||
    type === 'csv' ||
    type === 'txt'
  ) {
    return true;
  } else {
    return false;
  }
};

const pluralize = (val: number) => {
  return val > 1 ? 's' : '';
};

export {
  slugify,
  slug,
  code,
  guid,
  percentage,
  asyncForEach,
  parseCurrency,
  formatNumber,
  validateEmail,
  withAuth,
  getEXT,
  isDoc,
  isImage,
  pluralize
};
