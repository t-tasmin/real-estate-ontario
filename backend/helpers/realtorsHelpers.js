module.exports = (db) => {
  const getRealtors = () => {
    const query = {
        text: 'SELECT * FROM realtors',
    };

    return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
  };

  return {
      getRealtors
  };
};
