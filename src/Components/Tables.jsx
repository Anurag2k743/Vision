import AuthorsTable from './Table/AuthorsTable';
import ProjectTable from './Table/ProjectTable';
const Tables = () => {

  return (
    <>
      <div className='mt-[85px] md:mt-[75px] overflow-x-auto w-full rounded-2xl' style={{
        background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
      }}>
        <AuthorsTable />
      </div>
      <div className='mt-6 overflow-x-auto w-full rounded-2xl' style={{
        background: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
      }}>
        <ProjectTable />
      </div>
    </>
  );
};

export default Tables;
