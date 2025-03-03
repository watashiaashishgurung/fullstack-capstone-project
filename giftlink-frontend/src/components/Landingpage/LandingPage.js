import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="display-4 mb-3">GiftLink</h1>
        <h2 className="mb-4">Share Gifts and Joy!</h2>
        <blockquote className="blockquote">
          <p className="lead">"Sharing is the essence of community. It is through giving that we enrich and perpetuate both our lives and the lives of others."</p>
        </blockquote>
        <a href="/app" className="btn btn-primary">Get Started</a>
      </div>
    </div>
  );
};

export default LandingPage;