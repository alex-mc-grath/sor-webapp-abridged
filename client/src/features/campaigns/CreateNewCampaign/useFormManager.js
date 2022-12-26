import { useEffect, useRef, useState } from "react";

export const useFormManager = () => {

    const [campaignData, setCampaignData] = useState({
        formIndex: 0,
        images: [],
      });

//  //  //  //  //  //

const manager = useRef({
    setFormData: (formData) =>
      setCampaignData((state) => {
        let newFormData = { ...state, ...formData };
        return newFormData;
      }),
    setFormIndex: (formIndex) => {
      setCampaignData((state) => {
        if (formIndex + 1 > state.formIndex) {
          return { ...state, formIndex: formIndex + 1 };
        } else {
          return state;
        }
      });
    },
    previousStep: (formIndex)=>{
      setCampaignData((state) => {
        if (formIndex + 1 > state.formIndex) {
          return { ...state, formIndex: formIndex - 1 };
        } else {
          return state;
        }
      });
    },
    saveCampaign: (formData) => {
      setCampaignData((currentState) => {
        let newState = { ...currentState, ...formData };
        saveCampaign(newState);
        return newState;
      });
    },
  });

  const progessManager = () => {
    if (campaignData.formIndex === 1) {
      alert('alkjgdasljk');
      return 10;
    }
    if (campaignData.formIndex === 2) {
      return 90;
    }
    return 1;
  };

  useEffect(() => {
    // if (selection.breachType !== '' && selection.breachCategory !== '') {

    // }
    // if (caseData.breachType !== '') {
    //   manager.setFormData({ breachType: selection.breachType, breachCategory: selection.breachCategory, breachDate: selection.breachDate, breachTime: selection.breachTime });
    //   manager.setFormIndex(manager.formIndex);
    // }
  }, [campaignData]);

  let {formIndex} = manager

    return { manager, formIndex, campaignData }
}
