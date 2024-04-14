import Title from "antd/es/typography/Title";
import React, { useOptimistic, useState } from "react";
import { Button, Card, Divider, Form, Input } from "antd";

type FieldType = {
  title: string;
  body: string;
  success: boolean;
};

type CreatePostProps = {
  createPost: (post: FieldType) => void;
  posts: FieldType[];
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const CreatePost: React.FC<CreatePostProps> = ({ createPost, posts }) => {
  const addPost = async (formData: FormData) => {
    const newPost = {
      title: formData.get("title") || "",
      body: formData.get("body") || "",
    } as FieldType;
    addOptimisticPost({ title: newPost.title, body: newPost.body });
    await createPost(newPost);
  };

  const [optimisticPosts, addOptimisticPost] = useOptimistic<
    FieldType[],
    { title: string; body: string }
  >(posts, (state, newPost) => [
    ...state,
    {
      title: newPost.title,
      body: newPost.body,
      success: true,
    },
  ]);

  return (
    <>
      <form style={{ maxWidth: 600 }} autoComplete="off" action={addPost}>
        <Form.Item<FieldType> label="Title" name="title">
          <Input name="title" />
        </Form.Item>

        <Form.Item<FieldType> label="Content" name="body">
          <Input name="body" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </form>
      <Divider />
      <RenderPosts posts={optimisticPosts} />
    </>
  );
};

type RenderPostsType = {
  posts: FieldType[];
};

const RenderPosts: React.FC<RenderPostsType> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts?.map(post => {
          return (
            <Card key={post.title}>
              <Title>{post?.title}</Title>
              {post?.body}
              <div>
                Status: {post.success ? "Posting..." : "Successfully Posted !"}
              </div>
            </Card>
          );
        })}
    </>
  );
};

const UseFormStatusExample = () => {
  const [post, _addPost] = useState<FieldType[]>([]);

  const addPost = async (post: FieldType) => {
    await delay(1000);
    _addPost(prev => [...prev, post]);
  };

  return (
    <>
      <Title>useOptimistic Example</Title>
      <CreatePost createPost={addPost} posts={post} />
    </>
  );
};

export default UseFormStatusExample;
