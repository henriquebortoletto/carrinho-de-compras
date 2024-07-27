export interface Address {
  number: number;
  zipcode: string;
  street: string;
  complement: string | null;
  neighborhood: string;
  city: string;
  uf: string;
}
