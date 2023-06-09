export interface CarProviderProps {
  children: React.ReactNode;
}

export interface CarProviderValues {
  setCars: React.Dispatch<React.SetStateAction<iCar[] | null>>;
  cars: iCar[] | null;
  refreshCars: () => Promise<void>;
}

export interface iCar {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: string;
  color: string;
  fipe: string;
  price: string;
  is_promo: boolean;
  description: string;
  created_at: string;
  user: {
    id: string;
    name: string;
  };
}
