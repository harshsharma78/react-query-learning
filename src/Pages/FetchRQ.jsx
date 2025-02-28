import { fetchPosts } from "../api/api.js";
import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
  });

  return (
    <div>
      <ul className="section-accordion">
        {data?.map(curElem => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}
    </div>
  );
};

export default FetchRQ;
