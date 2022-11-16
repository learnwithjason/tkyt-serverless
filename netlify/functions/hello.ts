export const handler = async (req) => {
  const user = JSON.parse(req.body);

  // TODO save to a database
  // TODO load extra details

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};
