import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-muted" />
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <div className="h-5 bg-muted rounded mb-2 w-3/4" />
          <div className="h-4 bg-muted rounded mb-1 w-full" />
          <div className="h-4 bg-muted rounded w-2/3" />
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <div className="h-6 bg-muted rounded w-16" />
            <div className="h-6 bg-muted rounded w-20" />
            <div className="h-6 bg-muted rounded w-14" />
            <div className="h-6 bg-muted rounded w-18" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 bg-muted rounded" />
            <div className="w-5 h-5 bg-muted rounded" />
          </div>
          <div className="h-8 bg-muted rounded w-20" />
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <div className="h-3 bg-muted rounded w-24" />
          <div className="h-3 bg-muted rounded w-20" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;