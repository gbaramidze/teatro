import Api from "../Api";
import useSWR from "swr";

function useData(url, initialState) {
  const fetcher = (url) => fetch.get(url).then(res => res.json()).then((res) => res.data);

  // For fetching data
  const { data, error, isLoading, mutate } = useSWR(url, fetcher, {
    fallbackData: initialState,
  });

  // For updating data
  const { trigger: refetch, isMutating } = useSWRMutation(url, fetcher);

  const update = async (data, secondURL) => {
    const validURL = secondURL || url;
    const [, , s] = validURL.split("/");
    const table = s?.split("?")[0];

    const response = await Api.post(
      secondURL || `/addEdit?table=${table}`,
      data,
    );
    await refetch();
    return response;
  };

  const remove = async (id) => {
    const [, , s] = url.split("/");
    const table = s.split("?")[0];
    const response = await Api.post(`/removeData?table=${table}`, {
      _id: id,
    });
    await refetch();
    return response;
  };

  return {
    data,
    error,
    isLoading,
    mutate, // Function to revalidate data
    refetch,
    update,
    remove,
    isMutating, // State for the mutation process
  };
}

export default useData;
