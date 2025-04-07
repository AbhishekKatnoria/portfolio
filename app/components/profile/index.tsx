import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full max-w-[532]  border border-borderColor rounded-3xl p-7">
      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <Image
            src="/profile/profile_img.png"
            alt="profile"
            width={101}
            height={101}
          />
          <div className="">
            <div className="flex gap-3 border border-borderColorSec rounded-3xl py-[6px] px-2 mb-2">
              <Image
                src="/profile/active.png"
                alt="active"
                height={17}
                width={17}
              />
              <p className="text-sm">Available To Work</p>
            </div>
            <h2 className="text-4xl">Jai Goyal</h2>
          </div>
        </div>
        <p>
          &quot;I am a passionate developer focused on building user-friendly,
          high-quality solutions while continuously improving my skills and
          staying updated with industry trends.&quot;
        </p>
        <div className="flex gap-[18px]">
          <div className="border border-borderColor rounded-2xl bg-background w-full">
            <h2 className="text-[55px] pt-5 text-center">01</h2>
            <div className="flex gap-2 items-center justify-center p-[10px] border-[0.5px] border-borderColorThird rounded-[40px] bg-backgroundSec w-full max-w-[126px] m-auto mb-[10px]">
              <Image
                src="/profile/flag.svg"
                alt="flag"
                width={9.5}
                height={14}
              />
              <span className="text-[13px]">Projects</span>
            </div>
          </div>
          <div className="border border-borderColor rounded-2xl bg-background w-full">
            <h2 className="text-[55px] pt-5 text-center">01</h2>
            <div className="flex gap-2 items-center justify-center p-[10px] border-[0.5px] border-borderColorThird rounded-[40px] bg-backgroundSec w-full max-w-[126px] m-auto mb-[10px]">
              <Image
                src="/profile/smile.svg"
                alt="flag"
                width={9.5}
                height={14}
              />
              <span className="text-[13px]">Happy Clients</span>
            </div>
          </div>
          <div className="border border-borderColor rounded-2xl bg-background w-full">
            <h2 className="text-[55px] pt-5 text-center">01</h2>
            <div className="flex gap-2 items-center justify-center p-[10px] border-[0.5px] border-borderColorThird rounded-[40px] bg-backgroundSec w-full max-w-[126px] m-auto mb-[10px]">
              <Image
                src="/profile/star.svg"
                alt="flag"
                width={9.5}
                height={14}
              />
              <span className="text-[13px]">Year Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
