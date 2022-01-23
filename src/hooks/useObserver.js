import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();
    useEffect(() => {
        // условие чтобы не создавались новые обсерверы
        if(isLoading) return;
        // если существует обсервер - новые не создаются
        if(observer.current) observer.current.disconnect();
      var cb = function(entries, observer) {
     
          if (entries[0].isIntersecting && canLoad) {
           callback();
          }
      };
       observer.current = new IntersectionObserver(cb);
       if(ref.current &&  observer.current.observe(ref.current)) {
        ;
       }
      }, [isLoading]);
}