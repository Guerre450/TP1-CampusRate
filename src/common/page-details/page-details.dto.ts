import { IsInstance, IsNotEmpty } from "class-validator";

interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

export class PageDetailsDto<Type> {
  @IsNotEmpty()
  data!: Type[];
  @IsNotEmpty()
  pagination!: Pagination;
}
