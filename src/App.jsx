import './index.css';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"

import {DivStyle} from "./App.styled"; 

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        backgroundColor: 'azure',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <DivStyle>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </DivStyle>

      <div>
        <FriendList friends={friends} />
      </div>

        <TransactionHistory items={transactions} />

    </div>
  );
};

