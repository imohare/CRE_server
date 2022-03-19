import { string } from "prop-types";

interface IArtist {
  name!: string;
  address!: string;
  date!: Date;
  description?: string;
  id!: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export { IArtist };