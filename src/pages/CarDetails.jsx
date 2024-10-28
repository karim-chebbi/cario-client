import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCarById } from "../JS/Actions/CarActions";
import Spinner from "../components/Spinner";
import { Button, Tooltip } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import EditCar from "../components/EditCar";
import DeleteCar from "../components/DeleteCar";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function CarDetails() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {id} = useParams()

    const car = useSelector(state => state.CarReducer.car)
    const load = useSelector(state => state.CarReducer.load)

    useEffect(() => {
      dispatch(getCarById(id))
    }, [dispatch, id])
    

    
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <Tooltip title="back">
            <Button
              onClick={() => navigate(-1)}
              type="primary"
              shape="circle"
              icon={<LeftOutlined />}
            />
          </Tooltip>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">{car.description}</p>

          <div className="flex justify-left gap-8 mt-4">
            <EditCar car={car} />
            <DeleteCar car={car} />
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {load ? (
              <Spinner />
            ) : (
              <>
                <div key={car._id} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Brand</dt>
                  <dd className="mt-2 text-sm text-gray-500">{car.brand}</dd>
                </div>
                <div key={car._id} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Model</dt>
                  <dd className="mt-2 text-sm text-gray-500">{car.model}</dd>
                </div>
                <div key={car._id} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Fuel</dt>
                  <dd className="mt-2 text-sm text-gray-500">{car.fuel}</dd>
                </div>
                <div key={car._id} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Price</dt>
                  <dd className="mt-2 text-sm text-gray-500">{car.price}k$</dd>
                </div>
              </>
            )}
          </dl>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
          {load ? (
            <Spinner />
          ) : (
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src={car.image}
              className="rounded-lg bg-gray-100"
            />
          )}
        </div>
      </div>
    </div>
  );
}
