import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Title from 'components/SpaceBetweenTasks/SpaceBetweenTasks.jsx';
// Zadanie1
import * as Zadanie1 from 'components/Profile/Profile.jsx';
import user from 'components/Profile/user.json';
// Zadanie2
import * as Zadanie2 from 'components/Statistics/Statistics.jsx';
import data from 'components/Statistics/data.json';
// Zadanie3
import * as Zadanie3 from 'components/FriendList/FriendList.jsx';
import friends from 'components/FriendList/friends.json';
// Zadanie4
import * as Zadanie4 from 'components/TransactionHistory/TransactionHistory.jsx';
import transaction from 'components/TransactionHistory/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title.SpaceBetweenTasks message={'Zadanie 1:'} />
    <Zadanie1.Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Title.SpaceBetweenTasks message={'Zadanie 2a:'} />
    <Zadanie2.Statistics title="Upload stats" stats={data} />
    <Title.SpaceBetweenTasks message={'Zadanie 2b:'} />
    <Zadanie2.Statistics stats={data} />
    <Title.SpaceBetweenTasks message={'Zadanie 3:'} />
    <Zadanie3.FriendList friends={friends} />
    <Title.SpaceBetweenTasks message={'Zadanie 4:'} />
    <Zadanie4.TransactionHistory items={transaction} />
  </React.StrictMode>
);
