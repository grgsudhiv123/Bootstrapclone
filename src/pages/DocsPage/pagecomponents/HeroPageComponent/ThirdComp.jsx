const ThirdComp = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-medium">CDN Links</h1>
      <p className="text-md mb-4">As a reference, here are the primary CDN links.</p>

      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 border-b-2 border-gray-300">Description</th>
              <th className="text-left p-2 border-b-2 border-gray-300">URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-2">CSS</td>
              <td className="p-2 text-red-700">
                <code>https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css</code>
              </td>
            </tr>
            <tr>
              <td className="p-2">JS</td>
              <td className="p-2 text-red-700">
                <code>https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4">You can also use the CDN to fetch any of our <a href="" className="text-blue-700 underline hover:text-blue-800">additional builds listed in the Contents page.</a></p>
    </div>
  );
};

export default ThirdComp;
