import React from "react";
interface GithubStatsProps {
  repoUrl: string;
}

const GithubStats = ({ repoUrl }: GithubStatsProps) => {
  const [username, repo] = repoUrl.split("/").slice(-2);
  console.log(username, repo, "username, repo");
  return (
    <iframe
      src={`https://ghbtns.com/github-btn.html?user=${username}&repo=${repo}&type=star&count=true`}
      frameBorder="0"
      scrolling="0"
      width="83"
      height="20"
      title="GitHub"
      className="rounded-md"
    ></iframe>
  );
};

export default GithubStats;
