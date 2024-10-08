import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Router from "next/router";
import { is } from "date-fns/locale";

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
};
const ProfileHeader = () => {
  //const router = useRouter();
  const isProfileImageNft = false;
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div
          onClick={() => {
            Router.push("/");
          }}
          className={style.background}
        >
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Ayush</div>
          <div className={style.secondary}>@tonystalkerr</div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src="https://pbs.twimg.com/profile_banners/105285543/1623392056/1500x500"
          alt="cover"
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? "hex" : style.profileImageContainer}
        >
          <img
            src="https://pbs.twimg.com/profile_images/1412723721414981634/9V1JYw2j_400x400.jpg"
            alt="profile"
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>Ayush </div>
        </div>
        <div>
          <div className={style.secondary}>@tonystalkerr</div>
        </div>
        <div className={style.nav}>
          <div className={style.activeNav}>Tweets</div>
          <div>Tweets & Replies</div>
          <div>Media</div>
          <div>Likes</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
