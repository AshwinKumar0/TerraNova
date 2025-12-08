import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

describe('ProjectCard Component', () => {
  const mockProject: Project = {
    id: '1',
    title: 'Test Project',
    slug: 'test-project',
    type: 'villa',
    price: 500000,
    city: 'Bangalore',
    state: 'Karnataka',
    location: { lat: 12.9716, lng: 77.5946 },
    thumbnail: 'https://picsum.photos/800/600',
    images: ['https://picsum.photos/1200/800'],
    shortDescription: 'A test project',
    longDescription: 'This is a test project description',
    amenities: ['Pool', 'Gym'],
    status: 'available',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  test('renders project card with project details', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project')).toBeInTheDocument();
    expect(screen.getByText('Bangalore, Karnataka')).toBeInTheDocument();
  });

  test('renders as a link to project detail page', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });

  test('displays sold status badge when sold', () => {
    const soldProject = { ...mockProject, status: 'sold' as const };
    render(
      <BrowserRouter>
        <ProjectCard project={soldProject} />
      </BrowserRouter>
    );

    expect(screen.getByText('Sold Out')).toBeInTheDocument();
  });

  test('displays property type icon badge', () => {
    render(
      <BrowserRouter>
        <ProjectCard project={mockProject} />
      </BrowserRouter>
    );

    expect(screen.getByText('villa')).toBeInTheDocument();
  });
});
