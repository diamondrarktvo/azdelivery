export type commandTypes = {
  id: number;
  idOrder: string;
  datePublish: string;
  status: string;
  district: string;
  price: number;
  products: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
  distance: string;
};
