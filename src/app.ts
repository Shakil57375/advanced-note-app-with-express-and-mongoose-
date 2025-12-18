import express, { Application, Request, Response } from 'express';
import mongoose, { Schema } from 'mongoose';

const app: Application = express();

app.use(express.json());

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    enum: ['', 'personal', 'work', 'others'],
    default: 'personal',
    trim: true,
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    level: {
      type: String,
      enum: ['', 'low', 'medium', 'high'],
      default: 'low',
      required: true,
      trim: true,
    },
    color: {
      type: String,
      enum: ['', 'red', 'blue', 'green', 'gray'],
      default: 'gray',
    },
  },
  isCompleted: Boolean,
  publishedAt: Date, // Add the publishedAt field
});

const Note = mongoose.model('Note', noteSchema);
app.post('/note/create-note', async (req: Request, res: Response) => {
  // const { title, content, category, pinned, tags : { level, color }, isCompleted, publishedAt } = req.body;
  const body = req.body;
  console.log(body);

  // approach - 1

  // const myNote = new Note({
  //   title: 'Learning Express',
  //   tags : {
  //     level : 'high',
  //   }

  // });
  // res.status(201).json({
  //   success: true,
  //   message: 'Note created successfully',
  //   note: myNote,
  // });
  // await myNote.save(); // Save the note to the database

  // approach - 2
  try {
    const note = await Note.create(body);

    res.status(201).json({
      success: true,
      message: 'Note created successfully',
      note,
    });
  } catch (error: any) {
    console.error('Error creating note:', error);
    res
      .status(500)
      .json({
        success: false,
        message: 'Failed to create note',
        error: error.message,
      });
  }

  // approach - 3
  // const note = new Note(req.body);
  // await note.save();
  // res.status(201).json(note);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
