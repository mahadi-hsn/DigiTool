import { Check } from 'lucide-react';


const PackageCard = ({ pkg }) => {
  console.log(pkg);
  const { title, price, icon, features, description, billing, badge } = pkg;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <span className="badge badge-xs badge-warning absolute top-2 right-3">{badge}</span>
          <div className="space-y-3">
            <div className='flex items-center w-8 h-8'>
                <img className='w-full' src={icon} alt="" />
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{description}</p>
            <span className="text-xl"><span className='font-bold'>${price}</span>/{billing}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map(feature => <li className='flex items-center gap-3'><Check />{feature}</li>)}
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
