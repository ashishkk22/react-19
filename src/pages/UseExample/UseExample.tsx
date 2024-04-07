import { Button, Card } from "antd";
import Title from "antd/es/typography/Title";
import { Suspense, use, useState } from "react";

type Post = {
  title: string;
  useId: number;
  body: string;
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Posts = () => {
  const [isFetchPost, setIsFetchPost] = useState(false);

  let data;

  if (isFetchPost) {
    data = use<Post[]>(fetchPosts());
  }

  return (
    <div>
      <Title>use() Example</Title>
      <Button onClick={() => setIsFetchPost(prev => !prev)}>Fetch Posts</Button>
      {data &&
        data?.map(data => {
          return <Card>{data.body}</Card>;
        })}
    </div>
  );
};

const UseExample = () => {
  return (
    <Suspense fallback={<Title>Loading...</Title>}>
      <Posts />
    </Suspense>
  );
};

export default UseExample;
