export interface CarProviderProps {
  children: React.ReactNode;
}

export interface CarProviderValues {
  setCars: React.Dispatch<React.SetStateAction<iPaginationCars | null>>;
  cars: iPaginationCars | null;
  refreshCars: () => Promise<void>;
  createCar: (newData: iCarReq) => Promise<iCarRes | undefined>;
  getCar: (carId: string | undefined) => Promise<iCarRes | undefined>;
  editCar: (data: Partial<iCarReq>, carId: string) => Promise<void>;
  deleteCar: (carId: string) => Promise<void>;
}

export interface iCarReq {
  brand: string;
  model: string;
  spec: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  fipe: string;
  price: number;
  description: string;
}

export interface iCarRes extends iCarReq {
  id: string;
  is_promo: boolean;
  created_at: string;
  is_published: boolean;
  user: {
    id: string;
    name: string;
    avatar_bg: string;
    personalInformation?: {
      phone?: string | null | undefined;
      description?: string | null | undefined;
    };
  };
  images: { id: string; url: string }[];
}

export interface iPaginationCars {
  next: string | null;
  previous: string | null;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  results: iCarRes[];
}
