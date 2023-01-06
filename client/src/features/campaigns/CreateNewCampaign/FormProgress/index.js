import { Badge } from "../../../../_boilerplate/elements/Badge"
import { Layout, NavBadge, Number } from "./Style"



export const FormProgress = ({formIndex, previousStep, setFormIndex, setCampaignData}) => {

    let data = [{step:'Build TAL & TPL with automated scans'},{step:'Define Sequence'},{step:'Campaign settings'},{step:'Campaign objectives'}]

  const navigationProgress = (idx) => {

    setCampaignData({ formIndex: idx })


  }

    return (
    	<Layout formIndex={formIndex}>
            {data.map((item,idx) => 
                <div key={idx} className={`li-wrapper ${formIndex === idx ? 'active' : ''}`} 
                // onClick={()=>setFormIndex(idx - 1)}
                onClick={()=>navigationProgress(idx)}
                >
                  <div className="circle"></div>

                  {formIndex === 3 && idx === 3 && <NavBadge>RECAP</NavBadge>}
                  <p className="main-item"><Number className="number" content={idx}/> {item.step}</p>
                </div>
           )}
    	</Layout>
    )
}


