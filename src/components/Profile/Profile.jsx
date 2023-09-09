// import user from "data/user.json";
import {BodyContainer} from "components/index.styled"
import PropTypes from 'prop-types';
import { ProfileImg, ProfileParagraph, ProfileList, ProfileItem } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
        <BodyContainer>
          <div>
  <div>
    <ProfileImg
      src={avatar}
      alt={username}
      class={avatar}
    />
                    <ProfileParagraph>{username}</ProfileParagraph>
                    <ProfileParagraph>Tag: {tag}</ProfileParagraph>
                    <ProfileParagraph>{location}</ProfileParagraph>
  </div>

  <ProfileList>
    <ProfileItem>
        <span>Followers:</span>
        <span>{followers}</span>
    </ProfileItem>
    <ProfileItem>
        <span>Views:</span>
        <span>{views}</span>
    </ProfileItem>
    <ProfileItem>
        <span>Likes:</span>
        <span>{likes}</span>
    </ProfileItem>
  </ProfileList>
</div>
        </BodyContainer>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}

