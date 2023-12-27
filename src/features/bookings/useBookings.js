import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filters =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // to filter by multiple fields
  // :[
  //   { field: "totalPrice", value: 5000, method: "gte" },
  //   { field: "status", value: filterValue },
  // ];

  // SORT
  const sortBy = searchParams.get("sortBy");
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", { filters, sortBy }],
    queryFn: () => getBookings({ filters, sortBy }),
  });

  return { isLoading, bookings, error };
}
