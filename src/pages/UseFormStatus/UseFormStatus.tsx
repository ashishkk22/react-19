import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Button, Card, Divider, Form, Input } from "antd";
import { useFormStatus } from "react-dom";

type FieldType = {
  title?: string;
  body?: string;
};

type CreatePostProps = {
  createPost: (post: FieldType) => void;
};

const CreatePostButton = () => {
  const { action, data, method, pending } = useFormStatus();

  console.log({ action, data, method, pending });
  //^? { data: FormData {}, method: 'get', pending: true }

  return (
    <>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      <div>{pending && "Loading..."}</div>
      <div>{method && `Method:${method?.toUpperCase()}`}</div>
    </>
  );
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const CreatePost: React.FC<CreatePostProps> = ({ createPost }) => {
  const addPost = async (formData: FormData) => {
    await delay(1500);
    const newPost = {
      title: formData.get("title") || "",
      body: formData.get("body") || "",
    } as FieldType;
    createPost(newPost);
  };

  return (
    <form style={{ maxWidth: 600 }} autoComplete="off" action={addPost}>
      <Form.Item<FieldType> label="Title" name="title">
        <Input name="title" />
      </Form.Item>

      <Form.Item<FieldType> label="Content" name="body">
        <Input name="body" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <CreatePostButton />
      </Form.Item>
    </form>
  );
};

const UseFormStatus = () => {
  const [post, _addPost] = useState<FieldType[]>([]);

  const addPost = (post: FieldType) => {
    _addPost(prev => [...prev, post]);
  };

  return (
    <div>
      <Title>useFormStatus Example</Title>
      <CreatePost createPost={addPost} />
      <Divider />
      {post &&
        post?.map(post => {
          return (
            <Card>
              <Title>{post?.title}</Title>
              {post?.body}
            </Card>
          );
        })}
    </div>
  );
};

export default UseFormStatus;
