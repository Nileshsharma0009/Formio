const stats = [
  {
    title: "Total Documents",
    value: "5 / 5",
    description: "All required documents",
  },
  {
    title: "Valid Documents",
    value: "5",
    description: "Everything looks good",
  },
  {
    title: "Need Attention",
    value: "0",
    description: "No issues found",
  },
  {
    title: "Total Size",
    value: "350 KB",
    description: "Within limit",
  },
];

const DocumentStats = () => {
  return (
    <section className="document-stats">

      {stats.map((stat) => (
        <div className="stat-item" key={stat.title}>

          <span>{stat.title}</span>

          <strong>{stat.value}</strong>

          <small>{stat.description}</small>

        </div>
      ))}

    </section>
  );
};

export default DocumentStats;