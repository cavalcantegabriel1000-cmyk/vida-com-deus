// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
}

// Devotion types
export interface Devotion {
  id: string;
  title: string;
  content: string;
  verse?: string;
  date: Date;
  author: string;
  category: 'morning' | 'evening' | 'prayer' | 'reflection';
  duration?: number; // in minutes
  readBy?: string[];
}

// Prayer types
export interface Prayer {
  id: string;
  title: string;
  content: string;
  category: 'gratitude' | 'intercession' | 'petition' | 'praise';
  author?: string;
  createdAt: Date;
  savedBy?: string[];
}

// Bible verse types
export interface BibleVerse {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  version: string;
}

// User progress types
export interface UserProgress {
  userId: string;
  devotionsRead: number;
  prayersOffered: number;
  streakDays: number;
  lastActivityDate: Date;
}
