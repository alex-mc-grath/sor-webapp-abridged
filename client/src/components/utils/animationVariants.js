export const variants1 = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 1,
      };
    },
    center: ()=> {
      return {
      zIndex: 2,
      x: 0,
      opacity: 1,
    }
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 1,
      };
    },
  };