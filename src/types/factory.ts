export interface FactoryInterface {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  certification: string;
  productionCapacity: string;
  description: string;
  recommendedReason: string;
  videoLink: string;
  mainImage: string;
  status: string;
  categoryId: number;
  category: {
    id: number;
    name: string;
  };
  products: [{ id: number; name: string; price: number; factoryId: number }];
  pictures: [{ id: number; url: string; factoryId: number }];
}
