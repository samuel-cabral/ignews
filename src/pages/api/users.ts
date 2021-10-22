import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'John1', email: 'john1@gmail.com' },
    { id: 2, name: 'John2', email: 'john2@gmail.com' },
    { id: 3, name: 'John3', email: 'john3@gmail.com' },
  ];

  return response.json(users);
};
