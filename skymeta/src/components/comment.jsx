import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded, BiTrash } from "react-icons/bi";
import ReplyComment from "./reply";
import EmojiKeyboard from "./emojis";
import { toast } from "react-toastify";
import { backendUrl } from "@/data/url";

function Comment({ comment, blogId, changing }) {
  const user = localStorage.getItem("user");
  const [replyArea, setReplyArea] = useState(false);
  const [edit, setEdit] = useState(false);
  const [replyValue, setReplyValue] = useState("");
  const [username, setUsername] = useState("");
  const [emojiState, setEmojiState] = useState("hidden");

  const toggleReply = () => {
    setReplyArea(!replyArea);
  };

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
      fetch(`${backendUrl}/api/v1/comments/${comment.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user ? user : username,
          content: replyValue,
          article: blogId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          toast.success(
            <p className="text-green-400 text-xs">
              Comment updated successfully!!
            </p>
          );
          setUsername("");
          setReplyValue("");
          setEdit(false);
          changing(Math.random())

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


  const Deletecomment = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (confirmation) {
      fetch(`${backendUrl}/api/v1/comments/${comment.id}/`, {
        method: "DELETE",
      })
        .then(() => {
          toast.success(
            <p className="text-green-400 text-xs">
              Blog Deleted successfully!!
            </p>
          );
          changing(Math.random())
        })
        .catch((error) => {
          toast.error(
            <p className="text-red-400 text-xs">
              Sorry and Error occur try again later
            </p>
          );
        });
    }
  };

  return (
    <div className="ml-1 tablet:ml-2 pc:ml-3 desktop:ml-4">
      <div className="pl-6 pt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex space-x-3 items-center">
            <div className="w-9 h-9 rounded-full flex justify-center items-center font-bold bg-orange-200 text-white">
              {comment.username?.slice(0, 1)}
            </div>
            <p className="inline-flex items-center mr-3 text-sm text-white font-semibold">
              {comment.username}
            </p>
            <p className="text-sm  text-gray-400">
              <time title={new Date(comment.created_at).toDateString()}>
                {new Date(comment.created_at).toDateString()}
              </time>
            </p>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button">
              <BiDotsHorizontalRounded size={30} color="lightgray" />
            </div>
            {comment.username == user ? (
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={Deletecomment}>
                  <a className="text-red-400">Delete</a>
                </li>
                <li
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  <a>Edit</a>
                </li>
              </ul>
            ) : (
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex items-center justify-center"
              >
                No action
              </ul>
            )}
          </div>
        </div>
        <p className="text-gray-400">{comment.content}</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm hover:underline text-gray-400 font-medium"
            onClick={toggleReply}
          >
            <svg
              className="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            {replyArea ? <div className="text-red-400">Close</div> : "Reply"}
          </button>
        </div>
        <ReplyComment
          commentId={comment.id}
          blogId={blogId}
          replyArea={replyArea}
        />
      </div>
      {edit && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] overflow-hidden bg-black bg-opacity-20 backdrop-blur-sm z-50 flex justify-stretch items-center">
          <div className="max-w-4xl w-full mx-auto">
            <form
              className="p-2 px-4 flex flex-col w-full"
              onSubmit={(e) => {
                e.preventDefault();
                onsubmit();
              }}
            >
              <div>
                {!user && (
                  <div className="flex flex-col tablet:flex-row gap-1 mb-1">
                    <input
                      type="text"
                      placeholder="username"
                      className="py-2 px-4 mb-4  rounded-lg rounded-t-lg border bg-gray-800 border-gray-700"
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
                <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border  bg-gray-800 border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your update
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    className="px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
                    placeholder="Write your update..."
                    required
                    value={replyValue}
                    onChange={(e) => setReplyValue(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="flex w-full items-center justify-between space-x-2">
                <div
                  onClick={() => setEdit(false)}
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-900 hover:bg-red-800"
                >
                  Cancle
                </div>
                <div className="flex w-full items-center justify-end space-x-2">
                  <div
                    onClick={() => handleEmoji()}
                    className=" cursor-pointer inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-900 hover:bg-green-800"
                  >
                    Emojis
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-900 hover:bg-green-800"
                  >
                    Update
                  </button>
                </div>
              </div>
              <EmojiKeyboard
                replyValue={replyValue}
                setReplyValue={setReplyValue}
                state={emojiState}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
