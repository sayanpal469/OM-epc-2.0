// import PropTypes from 'prop-types';
import { RxCross2 } from "react-icons/rx";
const Notification = () => {

  return (
    <>
    <div className="px-2">
        <div className='flex flex-row gap-1 items-center justify-between'>
        <div>
        <p className='text-sm font-semibold'>Souvik</p>
        <p className='text-[14px]'>Report submitted</p>
        </div>
        <div>
        <button><RxCross2 /></button>
        </div>
        </div>
        <p className="text-[10px] mt-1">5 min ago</p>
    </div>
    </>
  );
};
// Notification.propTypes = {
//     message :  PropTypes.string.isRequired,
//     provider: PropTypes.string.isRequired,
// }


export default Notification;
