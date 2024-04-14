import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Button, Card, Divider, Form, Input } from "antd";
import { useFormState } from "react-dom";

type FieldType = {
  title?: string;
  body?: string;
};

type CreatePostProps = {
  createPost: (post: FieldType) => void;
};

const CreatePost: React.FC<CreatePostProps> = ({ createPost }) => {
  const addPost = (prevState: string, queryData: FormData) => {
    console.log("prev state", prevState);

    const newPost = {
      title: queryData.get("title") || "",
      body: queryData.get("body") || "",
    } as FieldType;
    if (newPost?.title && newPost?.title) {
      createPost(newPost);
      return "Post Created Successfully !";
    } else {
      return "Please enter all the filed";
    }
  };

  const [state, formAction] = useFormState<string, FormData>(addPost, "");

  return (
    <form style={{ maxWidth: 600 }} autoComplete="off" action={formAction}>
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
      <div>{state}</div>
    </form>
  );
};

const UseFormState = () => {
  const [post, _addPost] = useState<FieldType[]>([]);

  const addPost = (post: FieldType) => {
    _addPost(prev => [...prev, post]);
  };

  return (
    <div>
      <Title>useFormState Example</Title>
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

export default UseFormState;
