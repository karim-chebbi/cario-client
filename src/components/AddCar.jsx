import React, { useState } from 'react'
import { Modal } from "antd";
import { addCar } from '../JS/Actions/CarActions';
import { useDispatch } from "react-redux";

const AddCar = () => {

const dispatch = useDispatch();
      const [isModalOpen, setIsModalOpen] = useState(false);

      const [newCar, setNewCar] = useState({})

          const handleChange = (e) => {
            setNewCar({ ...newCar, [e.target.name]: e.target.value }); 
          };


          const handleAdd = () => {
            dispatch(addCar(newCar))
            handleCancel()
          }
      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      
  return (
    <div>
      <button
        onClick={showModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add car
      </button>

      <Modal
        title="Adding a new car"
        open={isModalOpen}
        onOk={handleAdd}
        onCancel={handleCancel}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
          className="p-4 md:p-5"
        >
          <div className="grid gap-4 mb-4 grid-cols-2">
            {/* Brand */}
            <div className="col-span-2">
              <label
                for="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand name
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type the brand name"
                required=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Model */}
            <div className="col-span-2 sm:col-span-1">
              <label
                for="model"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Model
              </label>
              <input
                type="text"
                name="model"
                id="model"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type the model name"
                required=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Year */}
            <div className="col-span-2 sm:col-span-1">
              <label
                for="year"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="2024"
                required=""
                min={1800}
                max={2025}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Price */}
            <div className="col-span-2 sm:col-span-1">
              <label
                for="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Fuel */}
            <div className="col-span-2 sm:col-span-1">
              <label
                for="fuel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fuel
              </label>
              <select
                id="fuel"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={newCar.fuel}
                name="fuel"
                onChange={handleChange}
              >
                <option selected="">Select category</option>
                <option value="Gas">Gas</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            {/* Image */}
            <div className="col-span-2">
              <label
                for="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type the image url"
                required=""
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Description */}
            <div className="col-span-2">
              <label
                for="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Car Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the car description here"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add new car
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AddCar