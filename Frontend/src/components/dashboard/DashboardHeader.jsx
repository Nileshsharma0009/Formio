import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">

      {/* Search */}

      <div className="flex w-80 items-center gap-2 rounded-xl bg-gray-50 px-4 py-2.5">

        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search documents..."
          className="w-full bg-transparent text-sm outline-none"
        />

      </div>


      {/* Right */}

      <div className="flex items-center gap-4">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-full p-2 hover:bg-gray-100"
        >
          <Bell size={20} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-600" />
        </motion.button>


        {/* Avatar */}

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
            N
          </div>

          <div className="hidden sm:block">

            <p className="text-sm font-semibold">
              Nilesh
            </p>

            <p className="text-xs text-gray-400">
              User
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;