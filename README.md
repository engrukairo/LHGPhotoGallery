# Photo Gallery Web Application

A responsive photo gallery web application built with Next.js, TypeScript, TailwindCSS, and Zustand.

## Features

- Browse photographers
- Filter photographers by location
- View photographer profile pages
- Responsive image gallery grid
- Mock authentication system
- Guests can only view first 3 images
- Logged-in users can view all images
- Image carousel/lightbox navigation

## Tech Stack

- Next.js 15
- TypeScript
- TailwindCSS
- Zustand
- yet-another-react-lightbox

## Installation

```bash
git clone https://github.com/engrukairo/LHGPhotoGallery.git lhgphotogallery
```
```bash
cd lhgphotogallery
```
```bash
npm install
```
```bash
npm run dev
```

### Remember to have your local project folder name in small letters.
Capitalization is used in the repository naming as part of my private remote naming convention.

Open:

```bash
http://localhost:3000
```

## Project Structure

```bash
app/
components/
data/
store/
types/
utils/
```

## Architecture Decisions

- Zustand was used for lightweight global state management.
- Mock data was used to keep the project within assessment scope.
- Components were separated for reusability and maintainability.
- Next.js App Router was used for clean routing and structure.

## Future Improvements

- Real authentication
- Backend/API integration
- Skeleton loaders
- Pagination or lazy loading
- Unit and integration tests
- Accessibility improvements
- Better image optimization

## Deployment

The project can be deployed easily using Vercel.

```bash
vercel
```