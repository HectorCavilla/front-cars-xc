import React from 'react';

export const Title = ({ children }) => (
    <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
                { children }
            </h1>
          </div>
        </div>
    </section>
)