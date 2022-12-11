import React from 'react';

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onPrev, onNext, ui, setUi }) => {
  const goToPrev = (stepData) => {
    if (ui < 1) {
      return;
    } else if (ui > 1) {
      onPrev(stepData);
      setUi(ui - 1);
    }
  };

  const goToNext = (stepData) => {
    onNext(stepData);
    setUi(ui + 1);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToPrev, goToNext });
  }

  return currentChild;
};
