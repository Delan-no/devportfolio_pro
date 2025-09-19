import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import PortfolioHomepage from "pages/portfolio-homepage";
import ContactForm from "pages/contact-form";
import ProfessionalExperienceTimeline from "pages/professional-experience-timeline";
import TechnicalBlog from "pages/technical-blog";
import ProjectsGallery from "pages/projects-gallery";
import AdminLogin from "pages/admin-login";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<PortfolioHomepage />} />
        <Route path="/portfolio-homepage" element={<PortfolioHomepage />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/professional-experience-timeline" element={<ProfessionalExperienceTimeline />} />
        <Route path="/technical-blog" element={<TechnicalBlog />} />
        <Route path="/projects-gallery" element={<ProjectsGallery />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;