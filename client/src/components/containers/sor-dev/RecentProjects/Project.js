import { StyledRecentProjects, StyledProject } from './Style';
import image from '../../../../media/ss.png';
// import { SortableList } from '../../../input/';

export const Project = ({ projectInfo, idxManager }) => {
  // project title, key highlights, 2 screenshots
  const { title, desc, images, featuresList, links } = projectInfo;

  // const list = ['Linear API integration', '3 ways sortable lists (drag and drop)', 'Custom Editor and Publisher'];

  const orderChangeCallback = (obj) => {
    console.log(obj);
  };

  // const list = [<li>Linear API integration</li>,
  // <li>3 ways sortable lists (drag and drop)</li>,
  // <li>Custom Editor and Publisher</li>]

  return (
    <StyledProject>
      <button className='arrows' onClick={() => idxManager('backwards')}>
        <i className='fa-solid fa-circle-arrow-left'></i>
      </button>
      <button className='arrows' onClick={() => idxManager('forwards')}>
        <i className='fa-solid fa-circle-arrow-right'></i>
      </button>
      <div>
        <h3>{title}</h3>
        <span className='desc'>{desc}</span>
        {/* <ul>
        <h4>Key Highlights:</h4>
        <li>Linear API integration</li>
        <li>3 ways sortable lists (drag and drop)</li>
        <li>Custom Editor and Publisher</li>
      </ul> */}

        {/* {key, item, data} */}
        {/* <SortableList
          orderChangeCallback={orderChangeCallback}
          items={featuresList.map((item, idx) => {
            return { key: 'item' + idx, item: <div>{item}</div>, data: '' };
          })}
        /> */}
        {/* {console.log(featuresList)} */}

        {/* 
    <SortableList>
    {list.map((item, idx)=> {
        return {key:"item"+idx, item: <div>{item}</div>, data:""}
      })}
    </SortableList> */}

        <div className='links'>
          <a href={links[0]}>
            <span>
              link <i className='fa-solid fa-link'></i>
            </span>
          </a>
          <a href={links[1]}>
            github <i className='fa-brands fa-github'></i>
          </a>
        </div>
      </div>
      <div className='screenshots'>
        {images.map((image, idx) => (
          <img src={images[idx]} alt='' />
        ))}
      </div>

    </StyledProject>
  );
};
