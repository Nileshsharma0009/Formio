// import {
//   FileText,
//   CheckCircle,
//   Clock,
// } from "lucide-react";

// import Sidebar from "../components/dashboard/Sidebar";
// import DashboardHeader from "../components/dashboard/DashboardHeader";
// import StatsCard from "../components/dashboard/StatsCard";

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-50">

//       <Sidebar />

//       <main className="flex-1">

//         <DashboardHeader />

//         <section className="p-8">

//           {/* Heading */}

//           <div className="mb-8">

//             <h1 className="text-3xl font-bold">
//               Welcome back 👋
//             </h1>

//             <p className="mt-1 text-gray-500">
//               Manage your documents and applications.
//             </p>

//           </div>


//           {/* Stats */}

//           <div className="grid gap-5 md:grid-cols-3">

//             <StatsCard
//               title="Documents"
//               value="24"
//               description="Total uploaded"
//               icon={<FileText size={20} />}
//             />

//             <StatsCard
//               title="Processed"
//               value="18"
//               description="Successfully processed"
//               icon={<CheckCircle size={20} />}
//             />

//             <StatsCard
//               title="Pending"
//               value="6"
//               description="Waiting for processing"
//               icon={<Clock size={20} />}
//             />

//           </div>


//           {/* More dashboard sections will come here */}

//         </section>

//       </main>

//     </div>
//   );
// };

// export default Dashboard;


import DashboardLayout from "../components/dashboard/DashboardLayout";

const Dashboard = () => {
  return <DashboardLayout />;
};

export default Dashboard;