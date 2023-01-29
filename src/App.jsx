import './index.css';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json"
import transactions from "./transactions.json"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
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

      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>

      <div>
        <FriendList friends={friends} />
      </div>

      <div>
        <TransactionHistory items={transactions} />;
      </div>
    </div>
  );
};

