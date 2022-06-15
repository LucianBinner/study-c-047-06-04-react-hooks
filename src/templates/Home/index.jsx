import Button from '../../components/Button';
import Heading from '../../components/Heading';

const Home = () => {
  return (
    <div>
      <Heading />
      <Button nameAction={'increase'} nameButton={'Increase'} />
      <Button nameAction={'decrease'} nameButton={'Decrease'} />
      <Button nameAction={'reset'} nameButton={'Reset'} />
      <Button
        nameAction={'setCounter'}
        nameButton={'SetCounter 10'}
        payload={{ counter: 10 }}
      />
      <Button
        nameAction={'setCounter'}
        nameButton={'SetCounter 100'}
        payload={{ counter: 100 }}
      />
      <Button
        disableLoading={true}
        nameAction={'asyncIncrease'}
        nameButton={'AsyncIncrease'}
      />
      <Button
        disableLoading={true}
        nameAction={'asyncError'}
        nameButton={'AsyncError'}
      />
    </div>
  );
};

export default Home;
