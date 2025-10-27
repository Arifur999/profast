import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      type: "document",
      parcelName: "",
      parcelWeight: "",
      senderName: "",
      senderContact: "",
      senderRegion: "",
      senderPickup: "",
      senderAddress: "",
      pickupInstruction: "",
      receiverName: "",
      receiverContact: "",
      receiverRegion: "",
      receiverPickup: "",
      receiverAddress: "",
      deliveryInstruction: "",
    },
  });

  const navigate = useNavigate();

  // 🔹 State for dynamic data
  const [regionsData, setRegionsData] = useState([]);
  const [senderCenters, setSenderCenters] = useState([]);
  const [receiverCenters, setReceiverCenters] = useState([]);

  // 🔹 Load region/district/service center data from public JSON
  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setRegionsData(data))
      .catch((err) => console.error("Failed to load warehouse data:", err));
  }, []);

  const type = watch("type");
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  // 🔹 Update sender centers when region changes
  useEffect(() => {
    if (senderRegion) {
      const selectedRegion = regionsData.find(
        (r) => r.region === senderRegion
      );
      // handle both serviceCenters or covered_area naming
      setSenderCenters(
        selectedRegion?.serviceCenters ||
          selectedRegion?.covered_area ||
          []
      );
    } else {
      setSenderCenters([]);
    }
  }, [senderRegion, regionsData]);

  // 🔹 Update receiver centers when region changes
  useEffect(() => {
    if (receiverRegion) {
      const selectedRegion = regionsData.find(
        (r) => r.region === receiverRegion
      );
      setReceiverCenters(
        selectedRegion?.serviceCenters ||
          selectedRegion?.covered_area ||
          []
      );
    } else {
      setReceiverCenters([]);
    }
  }, [receiverRegion, regionsData]);

  // 🔹 Simple cost calculation
  const calculateCost = (data) => {
    let base = data.type === "document" ? 50 : 100;
    let serviceCenterFactor =
      data.receiverRegion === "Dhaka"
        ? 1
        : data.receiverRegion === "Chittagong"
        ? 1.2
        : 1.3;

    let weightCost =
      data.type === "not-document" && data.parcelWeight
        ? parseFloat(data.parcelWeight) * 10
        : 0;

    return Math.round(base * serviceCenterFactor + weightCost);
  };

  // 🔹 Submit handler
  const onSubmit = async (data) => {
    const calculatedCost = calculateCost(data);

    Swal.fire({
      title: "Confirm Booking?",
      text: `Your delivery cost is ৳${calculatedCost}`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      // if (result.isConfirmed) {
      //   try {
      //     const res = await axios.post("/api/parcels", {
      //       ...data,
      //       creation_date: new Date(),
      //       cost: calculatedCost,
      //     });
      //     if (res.status === 200 || res.status === 201) {
      //       Swal.fire("Success!", "Parcel booked successfully!", "success");
      //       reset();
      //       navigate("/parcels");
      //     }
      //   } catch (err) {
      //     console.error(err);
      //     Swal.fire(
      //       "Error",
      //       err?.response?.data?.message || "Server error",
      //       "error"
      //     );
      //   }
      // }
      console.log(data);
    });
  };

  return (
    <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-1">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700">
          Send Your Parcel
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Door-to-Door delivery with pickup and drop-off service
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-10 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
      >
        {/* ===================== Parcel Info ===================== */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Parcel Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Type */}
            <div>
              <label className="label">Type</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    {...register("type")}
                    value="document"
                    type="radio"
                    className="radio radio-success"
                  />
                  Document
                </label>
                <label className="flex items-center gap-2">
                  <input
                    {...register("type")}
                    value="not-document"
                    type="radio"
                    className="radio"
                  />
                  Non-Document
                </label>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="label">Title</label>
              <input
                {...register("parcelName", { required: "Parcel name required" })}
                className="input input-bordered w-full"
                placeholder="Parcel title"
              />
              {errors.parcelName && (
                <p className="text-red-500 text-sm">
                  {errors.parcelName.message}
                </p>
              )}
            </div>

            {/* Weight */}
            {type === "not-document" && (
              <div>
                <label className="label">Weight (kg)</label>
                <input
                  {...register("parcelWeight", {
                    pattern: {
                      value: /^\d+(\.\d+)?$/,
                      message: "Enter valid number",
                    },
                  })}
                  className="input input-bordered w-full"
                  placeholder="Weight"
                  required
                />
                {errors.parcelWeight && (
                  <p className="text-red-500 text-sm">
                    {errors.parcelWeight.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ===================== Sender Info ===================== */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Sender Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Name</label>
              <input
                {...register("senderName", { required: "Required" })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Contact</label>
              <input
                {...register("senderContact", { required: "Required" })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Region</label>
              <select
                {...register("senderRegion", { required: "Required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select region</option>
                {[...new Set(regionsData.map((r) => r.region))].map(
                  (region, idx) => (
                    <option key={idx} value={region}>
                      {region}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label className="label">Service Center</label>
              <select
                {...register("senderPickup", { required: "Required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select center</option>
                {senderCenters.map((center, idx) => (
                  <option key={idx} value={center}>
                    {center}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full">
              <label className="label">Address</label>
              <input
                {...register("senderAddress", { required: "Required" })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-full">
              <label className="label">Pickup Instruction</label>
              <textarea
                {...register("pickupInstruction")}
                className="textarea textarea-bordered w-full"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* ===================== Receiver Info ===================== */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Receiver Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Name</label>
              <input
                {...register("receiverName", { required: "Required" })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Contact</label>
              <input
                {...register("receiverContact", { required: "Required" })}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Region</label>
              <select
                {...register("receiverRegion", { required: "Required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select region</option>
                {[...new Set(regionsData.map((r) => r.region))].map(
                  (region, idx) => (
                    <option key={idx} value={region}>
                      {region}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label className="label">Service Center</label>
              <select
                {...register("receiverPickup", { required: "Required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select center</option>
                {receiverCenters.map((center, idx) => (
                  <option key={idx} value={center}>
                    {center}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-full">
              <label className="label">Address</label>
              <input
                {...register("receiverAddress", { required: "Required" })}
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-full">
              <label className="label">Delivery Instruction</label>
              <textarea
                {...register("deliveryInstruction")}
                className="textarea textarea-bordered w-full"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* ===================== Submit ===================== */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn bg-lime-500 hover:bg-lime-600 border-0 text-white px-6 md:px-8"
          >
            {isSubmitting ? "Submitting..." : "Proceed to Confirm Booking"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
