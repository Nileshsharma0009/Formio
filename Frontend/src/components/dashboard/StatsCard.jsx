import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  description,
  icon,
}) => {

  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="
        rounded-2xl
        border
        bg-white
        p-5
        shadow-sm
        hover:shadow-md
      "
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {description}
          </p>

        </div>

        <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
          {icon}
        </div>

      </div>

    </motion.div>
  );
};

export default StatsCard;