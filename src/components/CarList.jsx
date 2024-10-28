import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../JS/Actions/CarActions";
import AddCar from "./AddCar";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";


export default function CarList() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const cars = useSelector(state => state.CarReducer.cars)

    const load = useSelector(state => state.CarReducer.load)

    useEffect(() => {
      dispatch(getCars());
    }, [dispatch]);
    

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Latest Luxury Cars
        </h2>
        <AddCar />
        {load && <Spinner />}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cars.map((car) => (
            <div
              onClick={() => navigate(`/carDetails/${car._id}`)}
              key={car._id}
              className="group relative"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={car.imageAlt}
                  src={car.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="my-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {car.brand}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{car.model}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {car.price}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{car.fuel}</p>
                </div>
 
              </div>
              <Button
                onClick={() => navigate(`/carDetails/${car._id}`)}
                icon={<ZoomInOutlined />}
              >
                View details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
