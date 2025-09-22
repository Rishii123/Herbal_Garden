const express = require("express")
const path = require("path")
const app = express()
const session = require('express-session');
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));
const router = express.Router();

const { LogInCollection, Movie, Plant ,User, Contact} = require('./mongo');
const { error } = require("console");
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))



app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})
app.get('/login', (req, res) => {
  res.render('login');
});


app.post('/signup', async (req, res) => {
    try {
        const usernameCheck = await LogInCollection.findOne({ name: req.body.name });

        if (usernameCheck) {
            
            return res.render('signup', { errorMessage: "Username already taken, please choose another." });
        }
        const data = {
            name: req.body.name,
            
            password: req.body.password,
            bookmarks: [] 
        };

        await LogInCollection.create(data);
        return res.status(201).render('login', { successMessage: "Signup successful! Please log in." });
        
    } catch (err) {
      console.error("Signup Error:", err); 
        return res.render("signup", { errorMessage: "Something went wrong, please try again." });
    }
});



app.post('/login', async (req, res) => {
  try {
      const user = await LogInCollection.findOne({ name: req.body.name }); 

      if (user && user.password === req.body.password) { 
          req.session.userId = user._id; 
          return res.redirect('/home');
      } else {
          res.render("login", { errorMessage: "Incorrect password or username. Please try again." });
      }
  } catch (e) {
      console.error('Error logging in:', e); 
      res.render("login", { errorMessage: "User not found or wrong details." });
  }
});



app.get('/plants/:plantName', async (req, res) => {
    try {
      const plantName = req.params.plantName;
      console.log('Searching for plant:', plantName);
      const baseUrl = `${req.protocol}://${req.get('host')}/plants/${plantName}`; 
  
      const plant = await Plant.findOne({ name: plantName });
      
      if (!plant) {
        console.log('Plant not found in database');
        return res.status(404).send("Plant not found");
      }
      
      console.log('Plant found:', plant);
      res.render('plants', { plant });
       
    } catch (err) {
      console.error('Error fetching plant details:', err); 
      res.status(500).send("Error fetching plant details");
    }
  });


  app.get('/debug/plants', async (req, res) => {
    try {
      const plants = await Plant.find({}, 'name');
      res.json(plants);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching plants' });
    }
  });


app.get('/search', async (req, res) => {
    try {
      const searchQuery = req.query.query;
      const searchResults = await Plant.find({
        name: { $regex: new RegExp(searchQuery, 'i') }
      });
  
      res.render('home', { searchResults });
    } catch (err) {
      console.error('Error searching for plants:', err);
      res.status(500).send("Error searching for plants");
    }
  });
  

app.get('/category/:categoryName', async (req, res) => {
  try {
      const categoryName = req.params.categoryName;
      const plants = await Plant.find({ category: categoryName });

      if (!plants || plants.length === 0) {
          return res.status(404).render('home', { errorMessage: `No plants found for the category ${categoryName}` });
      }
      res.render('home', { searchResultss: plants });
  } catch (err) {
      console.error('Error fetching plants by category:', err);
      res.status(500).send("Error fetching plants by category");
  }
});



function requireLogin(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
}

app.post('/add-to-bookmarks/:plantId', async (req, res) => {
  const { plantId } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ success: false, error: 'User not logged in' });
  }

  try {
    const user = await LogInCollection.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

 
    if (user.bookmarks.includes(plantId)) {
      console.log("Already bookmarked → sending error response");
      return res.json({ success: false, error: 'Plant is already bookmarked' });
    }

    user.bookmarks.push(plantId);
    await user.save();

    console.log("New bookmark added → sending success response");
    return res.json({ success: true, message: 'Plant added to bookmarks' });
  } catch (error) {
    console.error('Error adding to bookmarks:', error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});



app.post('/remove-bookmark/:plantId', async (req, res) => {
  const { plantId } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ success: false, error: 'User not logged in' });
  }

  try {
    
    await LogInCollection.updateOne(
      { _id: userId },
      { $pull: { bookmarks: plantId } }
    );

  
    res.status(303).redirect('/bookmarks');
  } catch (error) {
    console.error('Error removing bookmark:', error);
    res.status(500).send('Something went wrong');
  }
});



app.get('/bookmarks', async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.redirect('/login');
  }

  try {
    const user = await LogInCollection.findById(userId).populate('bookmarks');
    if (!user) {
      return res.status(404).send('User not found');
    }

    res.render('bookmark', { plants: user.bookmarks });
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/notes', async (req, res) => {
  const userId = req.session.userId;
  const noteText = req.body.noteText;

  if (!userId) {
    return res.status(401).json({ success: false, message: "You need to log in to save notes." });
  }

  if (!noteText || noteText.trim() === '') {
    return res.status(400).json({ success: false, message: "Note text cannot be empty." });
  }

  try {
    const user = await LogInCollection.findById(userId);


    const newNote = { text: noteText.trim() };

    user.notes.push(newNote);
    await user.save();
    res.status(303).redirect('/notes');
  } catch (error) {
    console.error('Error saving note:', error);
    res.status(303).redirect('/notes');

  }
});




app.get('/notes', async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.redirect('/login');
  }

  try {
   
    const user = await LogInCollection.findById(userId);

   
    res.render('notes', { notes: user.notes });
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).send("Error fetching notes.");
  }
});


app.post('/delete-note/:noteId', async (req, res) => {
  const userId = req.session.userId;
  const noteId = req.params.noteId;

  if (!userId) {
    return res.redirect('/login');
  }

  try {
    await LogInCollection.updateOne(
      { _id: userId },
      { $pull: { notes: { _id: noteId } } }
    );
   
    res.redirect('/notes');
  } catch (error) {
    console.error("Delete error:", error);
    res.redirect('/notes');
  }
});



app.get('/home', async (req, res) => {
  console.log('Home route accessed');
  try {
      
      const plants = await Plant.find({});
      
      res.render('home', { plantsList: plants });
  } catch (err) {
      console.error('Error fetching plants:', err);
      res.status(500).send("Error fetching plants from the database");
  }
});


app.get('/contact', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  res.render('contact'); 
});
app.post('/contact-submit', async (req, res) => {
  const { name, email, message } = req.body;


  if (!name || !email || !message) {
    return res.status(400).send('All fields are required!');
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save(); 

    res.send('Thank you! Your message has been submitted successfully.');
  } catch (error) {
    console.error('Error saving contact info:', error);
    res.status(500).send('Something went wrong. Please try again later.');
  }
});


app.listen(3000, () => {
    console.log('port connected');
})