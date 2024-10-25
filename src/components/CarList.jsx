import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../JS/Actions/CarActions";
import AddCar from "./AddCar";


export default function CarList() {

    const dispatch = useDispatch()

    const cars = useSelector(state => state.CarReducer.cars)

    useEffect(() => {
      dispatch(getCars());
    }, [dispatch]);
    

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Latest Luxury Cars
        </h2>
        <AddCar />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cars.map((car) => (
            <div key={car._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={car.imageAlt}
                  src={car.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {car.brand}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{car.model}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {car.price}k$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
