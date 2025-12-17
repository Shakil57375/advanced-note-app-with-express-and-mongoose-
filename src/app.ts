import express, { Application, Request, Response } from 'express';
import mongoose, { Schema } from 'mongoose';

const app: Application = express();

const noteSchema = new Schema({
  title: String,
  content: String,
  isCompleted: Boolean,
  publishedAt: Date, // Add the publishedAt field
});

const Note = mongoose.model('Note', noteSchema);
app.post('/create-note', async (req: Request, res: Response) => {
  const myNote = new Note({
    title: 'Sample Note',
    content: 'This is a sample note.',
    isCompleted: false,
    publishedAt: new Date(), // Add the publishedAt field
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
