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
