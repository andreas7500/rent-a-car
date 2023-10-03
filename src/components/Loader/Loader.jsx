import { ThreeDots } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';
import Container from 'components/Container/Container';

const Loader = () => {
  return (
    <Container>
      <LoaderWraper>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#19354d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderWraper>
    </Container>
  );
};

export default Loader;
