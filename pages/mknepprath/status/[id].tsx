import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import tweets from "../../../tweet";

const Tweet = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    const t = tweets.find(
      (tweet: { tweet: { id_str: string } }) => tweet?.tweet?.id_str === id
    );
    setTweet((t?.tweet?.full_text as string) || "");
  }, [id]);

  return <p>{tweet}</p>;
};

export default Tweet;
