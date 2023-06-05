const { Favorite } = require('./models');
const { User } = require('./models');

module.exports = {
    addFavorite(req, res)  {
        const { username } = req.body;
        const { userId } = req.user;
      
        // Validate both user IDs exist
        try {
          User.findOne({ where: { username } })
            .then(user => {
              if (!user || !userId) {
                return res.status(400).json({ error: 'Invalid user ID' });
              }
      
              // Check if an entry in the Favorites table already exists
              Favorite.findOne({ where: { user: userId, favorite: username } })
                .then(existingFavorite => {
                  if (existingFavorite) {
                    return res.status(400).json({ error: 'Favorite already exists' });
                  }
      
                  // Create a Favorites entry with user as the userId from the JWT, and the favorite as the request body
                  Favorite.create({ user: userId, favorite: username })
                    .then(() => {
                      // Return a 200 OK response
                      res.status(200).json({ message: 'Favorite created successfully' });
                    })
                    .catch(error => {
                      console.error(error);
                      res.status(500).json({ error: 'Internal Server Error' });
                    });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).json({ error: 'Internal Server Error' });
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).json({ error: 'Internal Server Error' });
            });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      },

      removeFavorite(req, res) {
        const { username } = req.body;
        const { userId } = req.user;
      
        // Validate both user IDs exist
        try {
          Favorite.findOne({ where: { user: userId, favorite: username } })
            .then(favorite => {
              if (!favorite) {
                return res.status(400).json({ error: 'Favorite does not exist' });
              }
      
              // Remove the entry from the database
              favorite.destroy()
                .then(() => {
                  // Return a 200 OK response
                  res.status(200).json({ message: 'Favorite removed successfully' });
                })
                .catch(error => {
                  console.error(error);
                  res.status(500).json({ error: 'Internal Server Error' });
                });
            })
            .catch(error => {
              console.error(error);
              res.status(500).json({ error: 'Internal Server Error' });
            });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }

}