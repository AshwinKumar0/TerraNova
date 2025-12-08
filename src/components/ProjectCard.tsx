import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { MapPin, Home } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Function to format price in Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Function to return appropriate icon based on property type
  const getPropertyIcon = (type: string) => {
    switch (type) {
      case 'residential':
        return <Home className="w-4 h-4" />;
      case 'commercial':
        return <MapPin className="w-4 h-4" />;
      case 'mixed':
        return <Home className="w-4 h-4" />;
      default:
        return <Home className="w-4 h-4" />;
    }
  };

  return (
    // Main card container as a Link to project details page
    <Link
      to={`/projects/${project.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full no-underline"
    >
      {/* Image section with fixed height (reduced by 30%) */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Property type badge in top-left */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5 shadow-sm">
          {getPropertyIcon(project.type)}
          {project.type}
        </div>
        {/* Sold out badge in top-right if applicable */}
        {project.status === 'sold' && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            Sold Out
          </div>
        )}
      </div>

      {/* Content section with padding and flex layout */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Project details section */}
        <div className="mb-4">
          {/* Location with icon */}
          <div className="flex items-center text-stone-500 text-sm mb-2 gap-1">
            <MapPin className="w-4 h-4" />
            <span>{project.city}, {project.state}</span>
          </div>
          {/* Project title with hover color change */}
          <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-800 transition-colors">
            {project.title}
          </h3>
          {/* Short description with line clamp */}
          <p className="text-stone-600 text-sm line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Price and arrow section at bottom */}
        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-400 uppercase font-semibold">Starting From</p>
            <p className="text-lg font-bold text-emerald-700">{formatPrice(project.price)}</p>
          </div>
          {/* Arrow icon that moves on hover */}
          <div className="text-emerald-700 group-hover:translate-x-2 transition-transform">
            →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
