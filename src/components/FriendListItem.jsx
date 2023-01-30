import { Ident, FriendsLi, Avatar } from "./FriendList.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendsLi>
            <Ident>{isOnline}</Ident>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </FriendsLi>
    )
}
