import React, { FormEvent, useState } from "react";
import Image from "next/image";
import button from "@/images/chat-anonim-img/button.svg";
import profil from "@/images/chat-anonim-img/profile.svg";

type CommentDataType = {
  id: number;
  comment: string;
};

export default function Comments() {
  const [commentData, setCommentData] = useState<CommentDataType[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setCommentData([...commentData, { id: Date.now(), comment: newComment }]);
    setNewComment(""); // Clear the input field after submitting
  }

  return (
    <div>
      <div className="absolute overflow-auto w-[738px] h-[820px] bg-primary-200 rounded-[10px] shadow border border-primary-300 top-[25px] right-[80px] left-[420px] bottom-[20px] flex">
        <div className="flex absolute left-[25px] top-[35px]">
          <div>
            <form onSubmit={handleSubmit} className="flex mb-5">
              <input
                placeholder="Masukkan pesan Anda"
                className="w-[583px] h-[50px] px-4 py-3.5 bg-slate-50 rounded-tl-[1px] rounded-bl-[1px] border border-[#e4e4e7] justify-start items-center gap-2 inline-flex"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit">
                <Image src={button} alt="button send" />
              </button>
            </form>
            <div className="flex flex-col gap-5 ">
              {[...commentData].reverse().map((value) => (
                <article
                  className="text-base bg-marina-950 p-4 rounded-xl"
                  key={value.id}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                        <div className="mr-2 w-6 h-6 relative">
                          <Image
                            className="w-full rounded-full"
                            src={profil}
                            alt="User"
                            fill
                          />
                        </div>
                      </div>
                      <p className="text-sm text-marina-50">Anonim</p>
                    </div>
                  </div>
                  <p className="text-marina-50">{value.comment}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
