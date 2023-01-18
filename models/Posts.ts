export interface PostsModel {
  slug: string;
  title: string;
  image: string;
  except: string;
  date: string;
}

export interface FormModel {
  _id: string;
  email: string;
  name: string;
  message: string | number;
}

export interface PostsModel {
  slug: string;
  Description: string;
  content: string;
  date: string;
  except: string;
  image: string;
  isFeatured: boolean;
  link: string;
  resource: string;
  title: string;
}
