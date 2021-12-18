import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useNavigate } from "react-router-dom";
import { GET_MESSAGES } from "./MessageList";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content, author: $author) {
      author
    }
  }
`;

export default function MessageForm(props) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [createMessage] = useMutation(CREATE_MESSAGE, {
    // fetch the list of messages again for update
    refetchQueries: [{ query: GET_MESSAGES }],
  });

  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await createMessage({ variables: { title, author, content } });
                navigate("/");
              }}
            >
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Write a Title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="my-2">
                <textarea
                  rows="2"
                  placeholder="Content..."
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  className="form-control"
                ></textarea>
              </div>
              <button className="btn btn-success btn-block">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
