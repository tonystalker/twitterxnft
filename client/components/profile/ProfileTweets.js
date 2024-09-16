import React from "react";
import Post from "../Post";
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};
const tweets = [
  {
    displayName: "Ayush",
    userName: "tonystalkerr",
    avatar: "",
    text: "Hello World",
    isProfileImageNft: false,
    timeStamp: "2024-08-29 15:17:22",
  },
  {
    displayName: "Ayush",
    userName: "tonystalkerr",
    avatar: "",
    text: "Hello World",
    isProfileImageNft: false,
    timeStamp: "2024-08-19 15:17:22",
  },
  {
    displayName: "Ayush",
    userName: "tonystalkerr",
    avatar: "",
    text: "Hello World",
    isProfileImageNft: false,
    timeStamp: "2024-01-29 15:17:22",
  },
  {
    displayName: "Ayush",
    userName: "tonystalkerr",
    avatar: "",
    text: "Hello World",
    isProfileImageNft: false,
    timeStamp: "2022-08-29 15:17:22",
  },
];
const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName="Ayush"
          userName="tonystalkerr"
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timeStamp={tweet.timeStamp}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
