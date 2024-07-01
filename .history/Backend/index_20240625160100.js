const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const bcrypt = require('bcrypt');

const getFields = multer();
const app = express();

app.use(cors());
app.use(express.json());

const db = async () => {

    try {
      // await mongoose.connect('mongodb+srv://Arun:1234@cluster0.mmyigrp.mongodb.net/NYAAYSAHAAYAK?retryWrites=true&w=majority');
  
    await mongoose.connect('mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/NYAAYSAHAAYAK?retryWrites=true&w=majority&appName=Cluster0');
    console.log('db connected!');
    
  } catch (error) {
    console.log(error);
  }
}

db();

app.get('/', (req, res) => {
  console.log("A new request has been raised on  " + new Date(Date.now()));
  res.writeHead(200, { 'Content-Type': "text/plain" })
  res.write('hey');
  res.end();
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

const Users = mongoose.model('User', userSchema);

app.get('/users', async (req, res) => {
  console.log("A new request has been raised on  " + new Date(Date.now()));
  const users = await Users.find({});
  console.log(users);
  res.json(users);
});

app.post('/login', async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await Users.findOne({ email });

    if (user) {
      if (password === user.password) {
        response.json({ success: true, message: 'Login successful' });
      } else {
        response.status(401).json({ success: false, message: 'Invalid password' });
      }
    } else {
      response.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
});

app.post('/signup', async (request, response) => {
  const { email, password, name } = request.body;
  try {
    const user = await Users.findOne({ email });
    if (user) {
      response.status(401).json({ success: false, message: 'Error' });
    } else {
      const user = new Users({ email, password, name });
      await user.save();
      response.send({ success: true, message: 'Login successful' });
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
});




// ....................Appointment.................

const appointmentSchema = new mongoose.Schema({
  Fullname: String,
  phone: String,
  email: String,
  date: Date,
  time: String,
  area: String,
  city: String,
  state: String,
  postcode: String,

  // feedback: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.post('/submit-appointment', async (req, res) => {
  const { name, phone, email, date, time, area, city, state, postCode } = req.body
  try {
    const newAppointment = new Appointment({ Fullname: name, phone, email, date, time, area, city, state, postcode: postCode});
    await newAppointment.save();
    res.status(200).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment.' });
  }
});


// .....................Appointment..................






// fetch data from database and show it in fronted part code if available

//  where to include tis code UI 

// app.get('/fetchData', verifyToken, async (req, res) => {
//   try {
//     const allAppointments = await Appointment.find();
//     res.send(allAppointments);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/appointments', async (req, res) => {
//   try {
//     const allAppointments = await Appointment.find();
//     res.send(allAppointments);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });







// const feedbackSchema = new mongoose.Schema({
//   text: String,
// });

// const Feedback = mongoose.model('Feedback', feedbackSchema);

// app.post('/feedback', async (req, res) => {
//   const { text } = req.body;
//   try {
//     const newFeedback = new Feedback({ text });
//     await newFeedback.save();
//     res.status(200).json({ message: 'Feedback submitted successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting feedback.' });
//   }
// });






// const Contact = mongoose.model('Contact', {
//   email: {
//     type: String,
//     required: true,
//   },
//   subject: {
//     type: String,
//     required: true,
//   },
//   feedback: String,
// });

// app.use(bodyParser.json());

// app.post('/contact', async (req, res) => {
//   try {
//     const { email, subject, feedback } = req.body;

//     // Validate email and subject
//     if (!email || !subject) {
//       return res.status(400).json({ success: false, message: 'Email and Subject are required fields' });
//     }

//     const newContact = new Contact({ email, subject, feedback });
//     await newContact.save();
//     res.status(201).json({ success: true, message: 'Contact form submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });











// app.get('/feedbacks', async (req, res) => {
//   try {
//     const allFeedbacks = await Feedback.find();
//     res.send(allFeedbacks);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });








const feedbackSchema = new mongoose.Schema({
  email: String,
  subject: String,
  message: String
});

const Feedbacks = mongoose.model('Feedback', feedbackSchema);

app.post('/submit-feedback', async (req, res) => {
  const { email, subject, message } = req.body;
  console.log(email);
  try {
    const newFeedback = new Feedbacks({ email:email, subject, message }); // Corrected line
    await newFeedback.save();
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback.' });
  }
});







const Q_As = new mongoose.Schema({ question: String, answer: [String] });
const LawSchema = new mongoose.Schema({
  constitutional_related_faqs: [Q_As],
});

const Laws = mongoose.model('law', LawSchema);

app.get('/laws', async (request, response) => {
  try {
    const allLaws = await Laws.find();
    response.send(allLaws);
  } catch (error) {
    console.error(error);
    response.status(500).send('Internal Server Error');
  }
});

app.listen(6000, () => console.log("listening at port 6000"));



