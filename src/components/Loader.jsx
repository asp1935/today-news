import LoadingBar from 'react-top-loading-bar'
import { useDispatch, useSelector } from 'react-redux'
import { setProgress } from '../redux/slice/loader';


function Loader() {
    const lprogress=useSelector(state=>state.setProgress.progress)
    const dispatch=useDispatch();
  return (

        <LoadingBar className='shadow-none' color="#f11946" progress={lprogress} onLoaderFinished={() => dispatch(setProgress(0))} />

  )
}

export default Loader


