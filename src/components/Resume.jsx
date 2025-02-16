import React from 'react';
import { Card, CardContent } from './Card';

export const Resume = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        📄 Resume
      </h2>
      <Card className="bg-gradient-to-br from-orange-100 to-pink-100">
        <CardContent>
          <p>Download my resume to learn more about my experience.</p>
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download Resume
          </a>
        </CardContent>
      </Card>
    </section>
  );
};