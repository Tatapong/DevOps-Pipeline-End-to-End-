import React from 'react'

function NoData({text}) {
  return (
    <div className="pt-32">
          <div className="min-h-[15rem] w-[90%] flex flex-col border shadow-sm rounded-xl bg-gray-800 :border-gray-700 shadow-slate-700/[.7] mx-10">
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
              <svg
                className="max-w-[5rem]"
                viewBox="0 0 375 428"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M254.509 253.872L226.509 226.872"
                  className="stroke-white"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
                <path
                  d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                  className="stroke-white"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
                <rect
                  x="270.524"
                  y="221.872"
                  width="137.404"
                  height="73.2425"
                  rx="36.6212"
                  transform="rotate(40.8596 270.524 221.872)"
                  className="fill-white"
                  fill="currentColor"
                />
                <ellipse
                  cx="133.109"
                  cy="404.372"
                  rx="121.5"
                  ry="23.5"
                  className="fill-white"
                  fill="currentColor"
                />
                <path
                  d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                  className="stroke-white"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
                <ellipse
                  cx="96.6084"
                  cy="116.872"
                  rx="9"
                  ry="12"
                  className="fill-white"
                  fill="currentColor"
                />
                <ellipse
                  cx="172.608"
                  cy="117.872"
                  rx="9"
                  ry="12"
                  className="fill-white"
                  fill="currentColor"
                />
                <path
                  d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                  className="fill-white"
                  fill="currentColor"
                />
              </svg>
              <p className="mt-5 text-sm text-gray-500">
                {text}
              </p>
            </div>
          </div>
        </div>
  )
}

export default NoData