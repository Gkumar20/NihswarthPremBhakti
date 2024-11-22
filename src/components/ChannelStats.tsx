"use client";

const ChannelStats = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">Channel Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-2xl font-bold">Subscribers</h3>
          <p className="text-blue-600 text-3xl mt-2">25,000+</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-2xl font-bold">Views</h3>
          <p className="text-blue-600 text-3xl mt-2">1.2M+</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="text-2xl font-bold">Videos Published</h3>
          <p className="text-blue-600 text-3xl mt-2">150+</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelStats;
