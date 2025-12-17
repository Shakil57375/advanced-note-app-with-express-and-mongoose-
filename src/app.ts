import express, { Application, Request, Response } from 'express';
import mongoose, { Schema } from 'mongoose';

const app: Application = express();

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
  tags : {
    level : {
      type: String,
      enum: ['', 'low', 'medium', 'high'],
      default: 'low',
      required: true,
      trim: true,
    },
    color: {
      type: String,
      enum: ['', 'red', 'blue', 'green'],
      default: 'gray',
    }
  },
  isCompleted: Boolean,
  publishedAt: Date, // Add the publishedAt field
});

const Note = mongoose.model('Note', noteSchema);
app.post('/create-note', async (req: Request, res: Response) => {
  const myNote = new Note({
    title: 'Learning Express',
    tags : {
      level : 'high',
    }
    
  });
  res.status(201).json({
    success: true,
    message: 'Note created successfully',
    note: myNote,
  });
  await myNote.save(); // Save the note to the database
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
