import { BsStar } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
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

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2 className={style.headerTitle}>Home</h2>
        <BsStar />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          username={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timeStamp={tweet.timeStamp}
        />
      ))}
    </div>
  );
}
export default Feed;
