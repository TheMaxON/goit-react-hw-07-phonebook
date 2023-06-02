import SyncLoader from 'react-spinners/ClipLoader';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <SyncLoader color="#313e3f" />
      Loading...
    </LoaderContainer>
  );
};

export default Loader;
