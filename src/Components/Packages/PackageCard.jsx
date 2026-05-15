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
            <p className='opacity-50'>{description}</p>
            <span className="text-xl"><span className='font-bold'>${price}</span>/ <span className='opacity-60'>{billing}</span> </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map(feature => <li className='flex items-center gap-3'><Check className='text-[#31b968]' />{feature}</li>)}
          </ul>
          <div className="mt-6">
            <button className="btn w-full bg-linear-to-r from-[#5f2df5] to-[#a10df5] shadow-[0_10px_25px_rgba(106,44,240,0.35) text-white rounded-full">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
