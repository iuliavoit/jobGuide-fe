import { UserModel } from 'src/app/users/models/user.model';

export interface ItemModel {
  id: string;
  title: string;
  description: string;
  itemType: string;
  quantity: string;
  imageURL: string;
  price: string;
  user?: UserModel;
}
