const router = require('express').Router();

const Friends = require('./friends-model.js');

router.get('/friends', (req, res) => {
    Friends.getAll()
      .then(friends => {
        res.status(200).json(rows);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

// Add friend to database
  router.post('/', (req, res) => {
    const friendData = req.body;
  
    Schemes.add(friendData)
    .then(friend => {
      res.status(201).json(friend);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new friend' });
    });
  });




// delete friend from database

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Friends.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete friend' });
    });
  });