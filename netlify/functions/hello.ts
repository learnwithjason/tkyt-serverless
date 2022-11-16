import fetch from 'node-fetch';

export const handler = async (req) => {
  const user = JSON.parse(req.body);

  const githubRes = await fetch(`https://api.github.com/users/${user.github}`);

  if (!githubRes.ok) {
    console.error(githubRes);
  }

  const profile = await githubRes.json();

  const avatar = profile.avatar_url;
  const location = profile.location;

  return {
    statusCode: 200,
    body: JSON.stringify({ ...user, avatar, location }),
  };
};
