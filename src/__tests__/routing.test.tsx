import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Routing', () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  test('renders home page on root path', () => {
    renderWithRouter(<App />);
    // Look for a heading or distinctive text from Home page
    expect(screen.getByText(/Find Your Sanctuary/i)).toBeInTheDocument();
  });

  test('renders layout with navigation', () => {
    renderWithRouter(<App />);
    // Check for header/logo and main hero section
    expect(screen.getByText('Estates')).toBeInTheDocument();
    expect(screen.getByText(/Find Your Sanctuary/i)).toBeInTheDocument();
  });

  test('renders footer', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/TerraNova Estates/)).toBeInTheDocument();
  });

  test('renders project cards on home', () => {
    renderWithRouter(<App />);
    // Home should display featured projects
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  });
});
