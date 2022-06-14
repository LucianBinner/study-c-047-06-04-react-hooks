import { useEffect, useState } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useEffect(() => {
    let isMonted = true;
    const matchMedia = window.matchMedia(queryValue);
    const handleChange = () => {
      if (!isMonted) return;
      setMatch(Boolean(matchMedia.matches));
    };
    matchMedia.addEventListener('change', handleChange);
    setMatch(Boolean(matchMedia.matches));

    return () => {
      isMonted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);
  return match;
};

function Home() {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 321px)');
  const background = huge
    ? 'green'
    : big
    ? 'red'
    : medium
    ? 'yellow'
    : small
    ? 'purple'
    : null;

  return (
    <div
      style={{
        background,
      }}
    >
      <h1>Ola</h1>
    </div>
  );
}

export default Home;
