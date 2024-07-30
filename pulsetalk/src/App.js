import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,

} from 'stream-chat-react';

import "./App.css"



const apiKey = 'nbk66uuz3dcs';


const userId = 'fredsample';
const UserName = 'fredsample';

const activetoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZnJlZHNhbXBsZSJ9.9orHBMfPgA93jAVpRAdwfV1VJ4BqfNCFiq8Bb0kBvcU';


const activeuser = {

  id: userId,
  name: UserName,
  image: 'https://getsream.io/random_png/?name=${UserName}',
}

const sort = {Latest_message_at: -1 };


const filters = {

  type: 'messaging',
  members: {$in: [userId]},
};



const options = {
  limit: 10,


}

function App() {


  const client = useCreateChatClient ({

apiKey,
tokenOrProvider:activetoken,
userData: activeuser ,


  });


  if (!client) return <div> Pulsing Up.... </div>


  return (
<Chat client={client}>

<ChannelList sort={sort} filters={filters} options={options}/>

<Channel>
  <Window>
    <ChannelHeader />

    <MessageList/>
    <MessageInput/>
  </Window>
  <Thread/>
</Channel>
</Chat>

  );
  
}



export default App;