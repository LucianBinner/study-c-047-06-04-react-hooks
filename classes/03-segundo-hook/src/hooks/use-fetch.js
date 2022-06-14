import { useEffect, useRef, useState } from 'react';

const isObjEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFetch = (url, options) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState();
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;
    // Mudando o valor de current manualmente
    if (!isObjEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    if (!isObjEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }
    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 500));
      try {
        const response = await fetch(urlRef.current, {
          signal, // Aborta a requisicao caso o componente seja desmontado antes do retorno
          ...optionsRef.current,
        });
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (error) {
        if (!wait) {
          setLoading(false);
          console.log('MY ERROR: ', error.message);
        }
      }
    };
    fetchData();
    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};
