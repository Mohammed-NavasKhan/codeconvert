export default function MortgageTools() {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold text-center">Get started with our tools</h2>
        <p className="text-center text-gray-600 mt-2">
          Looking for <a href="#" className="text-blue-600 underline">mortgage rates?</a> Use our mortgage calculator to compare rates and find deals that may be available for you.
        </p>
  
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          {/* Mortgage Calculators */}
          <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">Mortgage calculators and tools</h3>
            </div>
            <p className="mt-2 text-white">
              Find out how much you could borrow, view our mortgage rates, compare monthly repayment amounts, and more.
            </p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg w-full">
              Use our mortgage calculators
            </button>
          </div>
  
          {/* Agreement in Principle */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">Agreement in Principle</h3>
            </div>
            <p className="mt-2 text-gray-600">
              An Agreement in Principle confirms how much you could be eligible to borrow before you apply for a mortgage.
            </p>
            <button className="mt-4 border border-black text-black px-4 py-2 rounded-lg w-full">
              Get an Agreement in Principle
            </button>
          </div>
  
          {/* Mortgage Dashboard */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">Your personalised mortgage dashboard</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Track the progress of your home purchase from start to finish with your very own personalised mortgage dashboard.
            </p>
            <p className="mt-2 text-gray-600">
              Already registered? <a href="#" className="text-blue-600 underline">Sign back in</a>
            </p>
            <button className="mt-4 border border-black text-black px-4 py-2 rounded-lg w-full">
              Create your mortgage dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }
  