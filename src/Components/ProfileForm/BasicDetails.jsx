import React from "react";

export default function BasicDetailsForm({ formData, onChange, onNext, errors }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div className="space-y-2">
        <label className="block font-medium text-lg">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={`w-full py-4  border  p-2 rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-500'}`}
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

        <div className="space-y-2">
        <label className="block font-medium mb-1 text-lg">User Type</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
            type="button"
            onClick={() => onChange("userType", "student")}
            className={`border  rounded-lg p-6 text-left transition hover:border-yellow-500 hover:shadow-lg ${
                formData.userType === "student" ? "border-yellow-600 bg-blue-50 shadow-md" : "border-gray-500 shadow-sm"
            }`}
            >
            <p className="font-semibold">🎓 Student</p>
            <p className="text-sm text-gray-600">For students looking to create profiles with academic details.</p>
            </button>
            <button
            type="button"
            onClick={() => onChange("userType", "working")}
            className={`border rounded-lg p-6 text-left transition hover:border-yellow-500 hover:shadow-lg ${
                formData.userType === "working" ? "border-yellow-600 bg-blue-50 shadow-md" : "border-gray-300 shadow-sm"
            }`}
            >
            <p className="font-semibold">💼 Working Professional</p>
            <p className="text-sm text-gray-600">For professionals to add experience and skills to their profiles.</p>
            </button>
        </div>
        {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
        </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block font-medium text-lg">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={`w-full border p-2 rounded-lg py-4 focus:outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-500'}`}
            placeholder="First Name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div className="space-y-2">
          <label className="block font-medium ">Middle Name</label>
          <input
            type="text"
            value={formData.middleName}
            onChange={(e) => onChange("middleName", e.target.value)}
            className="w-full border p-2 rounded-lg py-4 border-gray-500 focus:outline-none"
            placeholder="Middle Name"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={`w-full border p-2 rounded-lg py-4 focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-500'}`}
            placeholder="Last Name"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-medium text-lg">Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => onChange("age", e.target.value)}
          className={`w-full border p-2 rounded-lg py-4  focus:outline-none ${errors.age ? 'border-red-500' : 'border-gray-500'}`}
          placeholder="Enter your age"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block font-medium text-lg">Village</label>
          <input
            type="text"
            value={formData.village}
            onChange={(e) => onChange("village", e.target.value)}
            className="w-full border p-2 rounded-lg py-4 border-gray-500 focus:outline-none"
            placeholder="Village"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-lg">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => onChange("city", e.target.value)}
            className={`w-full border p-2 rounded-lg py-4 focus:outline-none ${errors.city ? 'border-red-500' : 'border-gray-500'}`}
            placeholder="City"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-lg">State</label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => onChange("state", e.target.value)}
            className={`w-full border p-2 rounded-lg py-4 focus:outline-none ${errors.state ? 'border-red-500' : 'border-gray-500'}`}
            placeholder="State"
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-lg">Country</label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => onChange("country", e.target.value)}
            className={`w-full border p-2 rounded-lg py-4 focus:outline-none ${errors.country ? 'border-red-500' : 'border-gray-500'}`}
            placeholder="Country"
          />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="px-8 py-3 font-semibold bg-yellow-600 text-white rounded-lg text-xl hover:bg-yellow-700 transition">Continue</button>
      </div>
    </form>
  );
}



