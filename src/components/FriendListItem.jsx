import { Ident, FriendsLi, Avatar } from "./FriendList.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendsLi>
            <Ident isOnline={isOnline}>{isOnline}</Ident>
            <Avatar src={avatar} alt="User avatar" />
            <p className="name" >{name}</p>
        </FriendsLi>
    )
}
