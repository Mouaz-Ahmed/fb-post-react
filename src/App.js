import logo from './logo.svg';
import './App.css';
import FbPost from './components/index.js'
function App() {
  const posts = [{
    username: "Babar Azam",
    date: "September 5",

    title:
      <p>Alhumdulillah - this team of champions delivered in a nail-biting game. Magnificent innings from Muhammad Rizwan and Nawaz.
        <p> This one is for all those people back in our Pakistan fighting with the floods. ❤️</p>
      </p>,

    images: [
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/285302861_375684097957163_9129279609274375905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sVTgY6KDSBUAX_rRamf&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfBfAm_nQ3edffOCDRHeGSmAoI3-ooxLnnfLXVIdOsDHSA&oe=639569C7',
      'https://www.geosuper.tv/assets/uploads/updates/2022-08-07/17597_431291_updates.jpg',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/305324123_455809399910832_4474955086945975094_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HclpfSFNlgQAX8EWTwW&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAQlBsasbcyBCVEjYjg0zliiBdaSvvK5BHg3e5TuPYQqA&oe=6396AFD2',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/305408871_455814029910369_4069361204807047307_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8hcNQGl1MCYAX8sD8dD&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfByfrZMn5ARZtLXtxI9yhOXtuwYmlWg0arMYEO13rNzKQ&oe=639537B1',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/305525386_455814076577031_4316444824685576123_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x3mxhE1f-NQAX9ZszjI&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAyl3oGzNjLjJEZLT9Pr-OGWDYwE87sQDKRzl0rhwhDog&oe=63965C22',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/285302861_375684097957163_9129279609274375905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sVTgY6KDSBUAX_rRamf&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfBfAm_nQ3edffOCDRHeGSmAoI3-ooxLnnfLXVIdOsDHSA&oe=639569C7',
    ],
    profilepic: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320400/320448.png",
  },
  {
    username: "Mouaz Ahmed",
    date: "September 5",

    title:
      <p>Alhumdulillah - this team of champions delivered in a nail-biting game. Magnificent innings from Muhammad Rizwan and Nawaz.
        <p> This one is for all those people back in our Pakistan fighting with the floods. ❤️</p>
      </p>,

    images: [
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/285302861_375684097957163_9129279609274375905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sVTgY6KDSBUAX_rRamf&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfBfAm_nQ3edffOCDRHeGSmAoI3-ooxLnnfLXVIdOsDHSA&oe=639569C7',
      'https://www.geosuper.tv/assets/uploads/updates/2022-08-07/17597_431291_updates.jpg',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/305324123_455809399910832_4474955086945975094_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HclpfSFNlgQAX8EWTwW&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAQlBsasbcyBCVEjYjg0zliiBdaSvvK5BHg3e5TuPYQqA&oe=6396AFD2',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/305408871_455814029910369_4069361204807047307_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8hcNQGl1MCYAX8sD8dD&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfByfrZMn5ARZtLXtxI9yhOXtuwYmlWg0arMYEO13rNzKQ&oe=639537B1',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/305525386_455814076577031_4316444824685576123_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x3mxhE1f-NQAX9ZszjI&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAyl3oGzNjLjJEZLT9Pr-OGWDYwE87sQDKRzl0rhwhDog&oe=63965C22',
      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/285302861_375684097957163_9129279609274375905_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sVTgY6KDSBUAX_rRamf&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfBfAm_nQ3edffOCDRHeGSmAoI3-ooxLnnfLXVIdOsDHSA&oe=639569C7',
    ],
    profilepic: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/99157966_250791406190783_1653192169894182912_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nGOjL60wJTcAX-wjfsr&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAxCo3Iflpfd2X0l2SlrgRGcQV0D-zL-e37AU9dGDE5xg&oe=63B97AE3",
  },


  ]
  return (
    <div className="App">
      {posts.map(post => {
        return <FbPost post={post} />
      })}

    </div >
  );
}

export default App;
