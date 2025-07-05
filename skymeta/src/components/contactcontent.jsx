"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import ScrollSpy from "react-ui-scrollspy";
import { ToastContainer, toast } from "react-toastify";
import { t } from "i18next";

function ContactContent() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const HandleMessage = async () => {
    setLoading(true);
    if (!email || !name || !message) {
      toast.error(
        <p className="text-red-400 text-xs">
          Please all the field are required before sending a message
        </p>
      );
      setLoading(false);
    } else {
      // await axios
      //   .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`, {
      //     email: email,
      //     name: name,
      //     message: message,
      //   })
      //   .then((data) => {
      //     if (data.data.message == "success") {
      //       toast.success(
      //         <p className="text-green-400 text-xs">
      //           Email envoye avec success
      //         </p>
      //       );
      //       setName("");
      //       setEmail("");
      //       setMessage("");
      //       setLoading(false);
      //     } else {
      //       toast.error(
      //         <p className="text-red-400 text-xs">
      //           Desole votre e-m n{"'"}as pas ete envoye
      //         </p>
      //       );
      //       setLoading(false);
      //     }
      //   })
      //   .catch((err) => {
      //     toast.error(
      //       <p className="text-red-400 text-xs">
      //         Une Erreur est produire essayer plus tard
      //       </p>
      //     );
      //     setLoading(false);
      //   });

      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[var(--background-color)] tablet:pt-20 pt-10 pb-32 text-[var(--neutral)]">
      <ToastContainer autoClose={1500} className="absolute top-20" />
      <div className="flex gap-10 w-full  relative tablet:border-l tablet:pl-24 border-[var(--neutral-5)]  max-w-6xl mx-auto px-10 z-0">
        <div className=" w-[95%] tablet:w-8/12">
          <div className="border-b pb-12 border-[var(--neutral-5)]">
            {t("contact header")}
            <br />
            <br />
            {t("contact header small")}
          </div>
          <ScrollSpy offsetTop={200}>
            {/* contact */}
            <div
              id="contact"
              className="pt-20 border-b pb-12 border-[var(--neutral-5)]"
            >
              <div className="text-2xl tablet:text-3xl text-white">Contact</div>
              <div className="my-8 rounded-md border border-[var(--neutral-5)]">
                <div className="w-full">
                  <div className="w-full flex p-4 border-b border-[var(--neutral-5)]">
                    <span className="w-2/5">Contact</span>
                    <span>Detail</span>
                  </div>
                  <div className="w-full  p-4">
                    <div className="w-full flex ">
                      <span className="w-2/5">Address</span>
                      <span>Antalya , Türkiye</span>
                    </div>
                    <div className="w-full flex mt-2">
                      <span className="w-2/5">E-mail</span>
                      <span>
                        <Link href="mailto:contact@skymeta.co">
                          contact@skymeta.co
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4">{t("contact details")}</div>
            </div>

            {/* links */}
            <div
              id="media"
              className="pt-20 border-b pb-12 border-[var(--neutral-5)]"
            >
              <div className="text-2xl tablet:text-3xl text-white">
                {t("Social Media")}
              </div>
              <div className="my-4">
                {t("social 1")}
                <span className="font-bold text-white"> @skymetaco </span>.
                {t("social 2")}
                <br />
                <br />
                {t("social 3")}
              </div>
              <div className="my-8 rounded-md border border-[var(--neutral-5)]">
                <div className="w-full">
                  <div className="w-full flex p-4 border-b border-[var(--neutral-5)]">
                    <span className="w-2/5">Social Media</span>
                    <span>Profile URL</span>
                  </div>
                  <div className="w-full  p-4">
                    <div className="w-full flex ">
                      <span className="w-2/6">LinkedIn</span>
                      <Link
                        href={"https://linkedin.com/company/skymeta-co"}
                        target="_blank"
                        className="relative group"
                      >
                        <div className="!z-10 from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
                          https://linkedin.com/company/skymeta-co
                        </div>
                        <div className="z-0 -mt-2 w-full h-1 bg-[var(--secondary20)] transition-all duration-500 group-hover:h-2 group-hover:-translate-y-1"></div>
                      </Link>
                    </div>
                    <div className="w-full flex mt-2">
                      <span className="w-2/6">Twitter</span>
                      <Link
                        href={"https://twitter.com/skymeta_co"}
                        target="_blank"
                        className="relative group"
                      >
                        <div className="!z-10 from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
                          https://twitter.com/skymeta_co
                        </div>
                        <div className="z-0 -mt-2 w-full h-1 bg-[var(--secondary20)] transition-all duration-500 group-hover:h-2 group-hover:-translate-y-1"></div>
                      </Link>
                    </div>
                    <div className="w-full flex mt-2">
                      <span className="w-2/6">Instagram</span>
                      <Link
                        href={"https://instagram.com/skymeta.co"}
                        target="_blank"
                        className="relative group"
                      >
                        <div className="!z-10 from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
                          https://instagram.com/skymeta.co
                        </div>
                        <div className="z-0 -mt-2 w-full h-1 bg-[var(--secondary20)] transition-all duration-500 group-hover:h-2 group-hover:-translate-y-1"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* direct contact */}
            <div id="directcontact" className="pt-20 pb-12">
              <div className="text-2xl tablet:text-3xl text-white">
                {t("Get in touch")}
              </div>
              <div className="mt-10 rounded-xl bg-gradient-to-br from-[#1D263A] to-[#212b3f] p-5 tablet:p-10 pt-0">
                <div className="font-bold text-[30px] mobilelg:text-[40px] text-[var(--neutral-3)] mt-4 relative group cursor-pointer">
                  {t("Let us Work")}{" "}
                  <span className="from-[var(--primary)] via-[var(--link)] to-[var(--secondary)] bg-gradient-to-r bg-clip-text text-transparent">
                    {" "}
                    {t("Together")}{" "}
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  className=" text-white w-full mt-10 rounded-xl bg-gradient-to-br from-[var(--secondary20)] to-[var(--border-color)] p-5 outline-none"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e-mail*"
                  className="text-white w-full mt-10 rounded-xl bg-gradient-to-br from-[var(--secondary20)] to-[var(--border-color)] p-5 outline-none"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <textarea
                  placeholder="Message*"
                  rows={6}
                  className="resize-y mt-20 text-white w-full rounded-xl bg-gradient-to-br from-[var(--secondary20)] to-[var(--border-color)] p-5 outline-none"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                />
                <div
                  className="w-full mt-10 rounded-xl bg-gradient-to-br from-[var(--secondary10)] to-[var(--secondary40)] p-5 text-white flex justify-center items-center cursor-pointer"
                  onClick={HandleMessage}
                >
                  {loading ? (
                    <FaSpinner className="animate-spin text-white]" size={25} />
                  ) : (
                    t("SEND")
                  )}
                </div>
              </div>
            </div>
          </ScrollSpy>
        </div>
        <div className="w-4/12 bg-[#1D263A] border-[0.5px] rounded-md border-[var(--neutral-5)] text-sm sticky top-24 h-fit hidden pc:block">
          <div className="border-b-[0.5px] border-[var(--neutral-5)] p-2 text-center w-full">
            Table of content
          </div>
          <div className="w-full mt-2 max-h-[70vh]">
            <p data-to-scrollspy-id="contact" className="px-2 py-[2px] pl-5">
              <Link href={"#contact"}>Contact</Link>
            </p>
            <p data-to-scrollspy-id="media" className="px-2 py-[2px] pl-5">
              <Link href={"#media"}>Social Media</Link>
            </p>
            <p
              data-to-scrollspy-id="directcontact"
              className="px-2 py-[2px] pl-5"
            >
              <Link href={"#directcontact"}>Direct contact</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
