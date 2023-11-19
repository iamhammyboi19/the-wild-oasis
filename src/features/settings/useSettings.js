import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../../services/apiSetting";

export function useSettings() {
  const {
    data: settings,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });

  return { settings, isLoading, isError };
}
