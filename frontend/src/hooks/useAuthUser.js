import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../constant/url";

const useAuthUser = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch(`${baseUrl}/api/auth/me`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();

        if (data.error) {
          return null;
        }

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        return data;
      } catch (error) {
        throw error;
      }
    },
    retry: false,
  });
};

export default useAuthUser;