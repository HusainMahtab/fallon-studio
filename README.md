# Feedback Collector

A simple feedback collection application built with Next.js, Tailwind CSS, and MongoDB.

## Features

- Submit feedback with name, email, and message
- Admin view to see all submitted feedbacks
- Responsive design
- Form validation
- Real-time notifications
- MongoDB database integration

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- MongoDB
- Sonner (for notifications)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The application is designed to be deployed on Netlify. To deploy:

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Add your MongoDB connection string as an environment variable in Netlify
4. Deploy!

## Project Structure

- `src/app/` - Next.js app router pages and API routes
- `src/components/` - Reusable UI components
- `src/lib/` - Utility functions and database connection
- `src/models/` - MongoDB models

## Author

Mahtab Hossain
