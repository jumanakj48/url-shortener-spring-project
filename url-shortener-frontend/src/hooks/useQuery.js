import { useQuery } from "@tanstack/react-query"
import api from "../api/api"

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls"],
    queryFn: async () => {
      const response = await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    select: (data) => {
      // Sort by createdDate descending
      return data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    },
    onError,
    staleTime: 5000,
  });
};

export const useFetchTotalClicks = (token, onError, startDate, endDate) => {
  return useQuery({
    queryKey: ["url-totalclick", token],
    queryFn: async () => {
      const response = await api.get(
        `/api/urls/totalClicks?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      return response;
    },
    select: (data) => {
      return Object.keys(data.data).map((key) => ({
        clickDate: key,
        count: data.data[key],
      }));
    },
    onError, // Optional error handler
    staleTime: 5000,
    enabled: !!token, // prevent fetching if token is null
  });
};
