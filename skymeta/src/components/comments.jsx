import React, { useEffect, useState } from "react";
import EmojiKeyboard from "./emojis";
import { useRouter } from "next/navigation";
import Comment from "./comment";
import { toast } from "react-toastify";
import NoData from "./nodata";
import { backendUrl } from "@/data/url";

function Comments({ id }) {
  const user = localStorage.getItem("user");
  const [loadComment, setLoadComment] = useState(false);
  const [replyValue, setReplyValue] = useState("");
  const [username, setUsername] = useState("");
  const [emojiState, setEmojiState] = useState("hidden");
  const [blogComments, setBlogComments] = useState([]);
  const [change, setChange] = useState(0);

  const updateParentState = (newState) => {
    setChange(newState);
  };

  useEffect(() => {
    const getComments = async () => {
      await fetch(`${backendUrl}/api/v1/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setBlogComments(data.filter(item=> item.article === id && item.parent === null).reverse());
        });
    };

    getComments();
  }, [change]);

  let router = useRouter();
  const onsubmit = async () => {
    if ((!username && !replyValue) || (!user && !replyValue)) {
      toast.error(
        <p className="text-red-400 text-xs">
          Please both username and password are required!
        </p>
      );
    } else {
      if (!user) {
        localStorage.setItem("user", username);
      }
      fetch(`${backendUrl}/api/v1/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user ? user : username,
          content: replyValue,
          article: id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          toast.success(
            <p className="text-green-400 text-xs">
               Comment send successfully!!
            </p>
          );
          setUsername("");
          setReplyValue("");
          setBlogComments((prev) => [data.content, ...prev]);
          setLoadComment(true);
        })
        .catch((error) => {
          toast.error(
            <p className="text-red-400 text-xs">
              Sorry and Error occur try again later
            </p>
          );
          setIsLoading(false);
        });
    }
  };

  const handleEmoji = () => {
    emojiState == ""
      ? setEmojiState((emojiState) => "hidden")
      : setEmojiState("");
  };
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg lg:text-2xl font-bold text-white">
          Discussion ({blogComments.length})
        </div>
      </div>
      <form
        className="mb-6"
        onSubmit={(e) => {
          e.preventDefault();
          onsubmit();
        }}
      >
        {!user && (
          <div className="flex flex-col tablet:flex-row gap-1 mb-1">
            <input
              type="text"
              placeholder="username"
              className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border bg-gray-800 border-gray-700"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="py-2 px-4 mb-4 bg-[#3ABFF8] flex items-center rounded-lg w-full gap-3 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>
                {"Please Enter a correct username you won't be able to change it"}
              </span>
            </div>
          </div>
        )}
        <div className="py-2 px-4 mb-4  rounded-lg rounded-t-lg border  bg-gray-800 border-gray-700">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
            placeholder="Write a comment..."
            required
            value={replyValue}
            onChange={(e) => setReplyValue(e.target.value)}
          ></textarea>
        </div>
        <div className="flex w-full items-center justify-end space-x-2">
          <div
            onClick={() => handleEmoji()}
            className="cursor-pointer inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4  focus:ring-green-900 hover:bg-green-800"
          >
            Emojis
          </div>
          <button
            type="submit"
            className="cursor-pointerinline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4  focus:ring-green-900 hover:bg-green-800"
          >
            Post comment
          </button>
        </div>
        <EmojiKeyboard
          replyValue={replyValue}
          setReplyValue={setReplyValue}
          state={emojiState}
        />
      </form>

      {!loadComment && (
        <div
          className="text-center mt-6 text-lg hover:font-semibold cursor-pointer"
          onClick={() => {
            setLoadComment(true);
          }}
        >
          Load Comments
        </div>
      )}
      {loadComment && (
        <div className="">
          {blogComments.length > 0 ? (
            blogComments.map((comment, index) => (
              <Comment key={index} comment={comment} blogId={id} changing={updateParentState}/>
            ))
          ) : (
            <NoData text={"No data to show"} />
          )}
        </div>
      )}
    </div>
  );
}

export default Comments;
