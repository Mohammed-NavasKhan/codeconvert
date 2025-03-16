import { LightBulbIcon } from "@heroicons/react/24/outline";

const DefaultChat = ({ name }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md">
      {/* Greeting Message */}
      <p className="text-gray-900">
        Hello <span className="font-bold">{name}</span>, get personalised assistance for your mortgage needs.
      </p>

      {/* Assistance Section */}
      <div className="mt-3 flex items-start gap-2">
        <LightBulbIcon className="w-5 h-5 text-gray-600" />
        <div>
          <p className="font-semibold text-gray-900">We assist you with</p>
          <ul className="list-disc list-inside text-gray-800 mt-1">
            <li>Personalised, Integrated experience</li>
            <li>Faster home buying process</li>
          </ul>
        </div>
      </div>

      {/* Closing Message */}
      <p className="mt-3 text-gray-900">How can I help you today?</p>
    </div>
  );
};

export default DefaultChat;
