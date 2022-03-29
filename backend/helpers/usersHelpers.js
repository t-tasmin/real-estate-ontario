module.exports = (db) => {
    const getUsers = () => {
        const query = {
            text: 'SELECT * FROM users',
        };
  
        return db
            .query(query)
            .then((result) => result.rows)
            .catch((err) => err);
    };
  
     //*************************************************************************/
    const getUserByEmail = email => {
  
        const query = {
            text: `SELECT * FROM users WHERE email = $1` ,
            values: [email]
        }
  
        return db
            .query(query)
            .then(result => result.rows[0])
            .catch((err) => err);
    }
  
    //*************************************************************************/
    const addUser = (name, email, password,  city)=> {
        const query = {
            text: `INSERT INTO users (name, email, password, city) VALUES ($1, $2, $3, $4) RETURNING *` ,
            values: [name, email, password, city]
        }
  
        return db.query(query)
            .then(result => result.rows[0])
            .catch(err => err);
    }
  
    //*************************************************************************/
    const getUsersPostalcode = (postal_code,email) => {
        
        const query = {
            text: `SELECT * FROM users WHERE postal_code LIKE $1 AND email != $2` ,
            values: [`${postal_code}%`, email]
        }
  
        return db
            .query(query)
            .then(result => result.rows)
            .catch((err) => err);
    }
  
  
    return {
        getUsers,
        getUserByEmail,
        addUser,
        getUsersPostalcode
    };
  };
  