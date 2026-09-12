interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}

export class PageDetailsDto<Type> {
  data!: Type[];
  pagination!: Pagination;
}
