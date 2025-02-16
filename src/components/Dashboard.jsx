import React from 'react';
import { Card, CardContent } from './Card';

export const Dashboard = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Card>
            <CardContent>
              <div className="h-8 bg-pink-400 rounded-full w-3/4" />
              <p className="mt-2">GDSC Cyber Security Coordinator</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="h-8 bg-purple-400 rounded-full w-3/6" />
              <p className="mt-2">Bachelor of Civil Engineering</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="h-8 bg-blue-400 rounded-full w-5/6" />
              <p className="mt-2">Projects</p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-orange-50">
          <CardContent>
            <h3 className="font-bold mb-2">FEATURED</h3>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold">Featured Project</h4>
              <p>Coming Soon....!!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
