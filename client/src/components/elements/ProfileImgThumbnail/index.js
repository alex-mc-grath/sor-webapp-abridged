import { IconProfile } from "../../../app/assets/icons"
import { DefaultItem, DropdownSelect, Item } from '../../../_boilerplate/inputs/Select/DropdownSelect'
import { Dropdown, Header as DropdownHeader, List} from '../../../_boilerplate/inputs/Select/Dropdown';

import managedImage from '../../../app/assets/imgs/logo-sor-center-shadow.png'
import { Style } from "./Style";
import Img from "../../../_boilerplate/elements/Img";

export const ProfileImgThumbnail = ({src, ...props}) => {

  // let profile = {managedImage:managedImage}
  // let managedImage = require('../../../app/assets/img/logo-sor-center-shadow.png')

  return (
    <Style {...props}>
      <Dropdown className="profile-dropdown" width="64px">
          <DropdownHeader>
            {/* {profile.managedImage && <img src={
              profile.managedImage
              } />} */}
              {src && <Img src={src} />}
            {/* {profile.image && !profile.managedImage && <img width={42} height={42} style={{borderRadius: "50%", marginLeft: "1rem"}} src={profile.image} />} */}
            {/* {!profile.image && !profile.managedImage && <IconProfile />} */}
          </DropdownHeader>
          {/* <List className="profile-dropdown-list" position="right">
            <div className="profile-option-button" onClick={() => navigate('/profile')}><button>My Profile</button></div>
            <div className="profile-option-button" onClick={() => dispatch(signOut())}><button>Sign Out</button></div>
          </List> */}
        </Dropdown>
    </Style>
  )
}
