import React from 'react';
import DashboardLayout from '../components/layouts/DahboardLyoutout';
import DashboardCard from '../components/admin/dashboard/dashboard';

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <DashboardCard />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
