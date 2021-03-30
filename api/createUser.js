import axios from 'axios';

const createUser = async (req, res) => {
  const { userId, userName } = req.body;

  axios
    .post('https://chatengine.io/projects/97cae069-70a1-40ca-bd55-b8710731ab1d/',
      { username: userName, secret: userId },
      { headers: { 'Private-Key': process.env.chat_engine_private_key } },
    )
    .then(apiRes => {
      res.json({
        body: apiRes.data,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: 'There was an error creating the user',
      });
    });
};

export default createUser;
