export const getRoles = (req, res) => {
    console.log(req);
  return res.json({
      id: 1,
      role: 'admin',
      description: 'Administrator',
      createdAt: '2019-01-01T00:00:00.000Z',
      updatedAt: '2019-01-01T00:00:00.000Z',
    });
};