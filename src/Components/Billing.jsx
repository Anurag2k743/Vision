
import Vision from './Billing/Vision';
import Information from './Billing/Information';
import Transaction from './Billing/Transaction';

const Billing = () => {

  return (
    <>
     
      <div className='mt-[85px] md:mt-[74px]'>
        <Vision />
      </div>

      <div className='mt-6 P-6'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 lg:col-span-7 rounded-2xl  p-6 bg-[linear-gradient(127.09deg,_rgba(6,11,40,0.94)_19.41%,_rgba(10,14,35,0.49)_76.65%)] bg-origin-border'>
            <Information />
          </div>
          <div className='col-span-12 lg:col-span-5 rounded-2xl p-6 bg-[linear-gradient(127.09deg,_rgba(6,11,40,0.94)_19.41%,_rgba(10,14,35,0.49)_76.65%)] bg-origin-border'>
            <Transaction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
