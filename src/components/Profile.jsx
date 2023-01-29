import './Profile.styled.jsx';
import PropTypes from "prop-types";
import {StyledDiv, Avatar, UserDescription, UserName, UserProps, ProfileItem, Stats, ProfileInfo } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats: { followers, likes, views } }) => {
    return (
        <StyledDiv>
            <ProfileInfo>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <UserName>{username}</UserName>
                <UserDescription>{tag}</UserDescription>
                <UserDescription>{location}</UserDescription>
            </ProfileInfo>

            <Stats>
                <ProfileItem>
                    <UserProps>Followers</UserProps>
                    <UserProps>{followers}</UserProps>
                </ProfileItem>
                <ProfileItem>
                    <UserProps>Views</UserProps>
                    <UserProps>{views}</UserProps>
                </ProfileItem>
                <ProfileItem>
                    <UserProps>Likes</UserProps>
                    <UserProps>{likes}</UserProps>
                </ProfileItem>
            </Stats>
        </StyledDiv>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
    }).isRequired,
}