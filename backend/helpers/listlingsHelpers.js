module.exports = (db) => {
  const getListings = () => {
    const query = {
        text: 'SELECT * FROM listings',
    };

    return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
  };

  return {
      getListings
  };
};
