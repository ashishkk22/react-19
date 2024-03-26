import { useState, useEffect } from "react";

const Post = () => {
  return <div>Post item</div>;
};

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
      }
    };

    fetchPost();
  });
  if (isFetching) return <div>Loading...</div>;

  return <div>{JSON.stringify(posts)}</div>;
};

export default Posts;
