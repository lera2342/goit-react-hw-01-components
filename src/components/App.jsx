import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import { Statistics } from "./Statistics.jsx/Statistics";
import data from "../data/data.json";
import { FriendsList } from "./FriendList/FriendList";
import friends from "../data/friends.json"
import { TransdctionsHistory } from "./Transaction/Transactions";
import transactions from "../data/transactions.json"

export const App = () => {
  return (
    <>
  <Profile
    //  key={user.id}
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics
        // key={data.id}
        title= "UPLOAD STATS"
        stats={data} />
      
      <FriendsList
      friends={friends}
      />
      
      <TransdctionsHistory
        items={transactions} />
</>
  );
};

