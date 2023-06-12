export interface CarProviderProps {
  children: React.ReactNode;
}

export interface CarProviderValues {
  setCars: React.Dispatch<React.SetStateAction<iCarRes[] | null>>;
  cars: iCarRes[] | null;
  refreshCars: () => Promise<void>;
  createCar: (data: iCarReq) => Promise<void>;
  getCar: (carId: string) => Promise<iCarRes | undefined>;
  editCar: (data: Partial<iCarReq>, carId: string) => Promise<void>;
  deleteCar: (carId: string) => Promise<void>;
}

export interface iCarReq {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  color: string;
  fipe: string;
  price: string;
  description: string;
}

export interface iCarRes extends iCarReq {
  id: string;
  is_promo: boolean;
  created_at: string;
  user: {
    id: string;
    name: string;
  };
}

export interface iCarEdit extends iCarReq {
  asd: string;
}
