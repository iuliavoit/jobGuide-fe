import { ItemModel } from 'src/app/items/models/item.model';

export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  items: Array<ItemModel>;
}
