import './App.css';
import Btn from '../src/components/button/Button.jsx'
import Cart from './components/cart/Cart'
import Images from './components/images/Images'
import image1 from './components/picture/Byt10.jpg'
import image2 from './components/picture/Byt9.jpg'
import image3 from './components/picture/Byt8.jpg'
const BtnFiles=[
  {
    text:'Button',
  },
  {
    text:'ButtonBek',
  },
  {
    text:'ButtonChan',
  },
]
const items=[
  {
    title:'Mens Lace up fashion Shoe',
    price:'5000',
    btn:'ADD TO CART'
  },
  {
  title:'Womens sneakers 20225',
    price:'1000'
    ,
    btn:'ADD TO CART'
  }
]
const images=[
  {
img:image1
  },
  {
    img:image2
  },
  {
    img:image3
  },
]
function App() {
  return (
    <div className="App">
     {
        BtnFiles.map(BtnFile=>(
<Btn
text={BtnFile.text}

  />
        ))    
        }
             {
        items.map(item=>(
<Cart
title={item.title}
price={item.price}
text={item.title}
  />
        ))    
        }
        {
          images.map(image=>(
            <Images
            img={image.img}
            />
          ))
        }
    </div>
  );
}

export default App;
// import React from "react";

// class App extends React.Component {
//   state = {
//     users: [],
//     isShowTable: false,
//   }
//   componentDidMount() {
//     fetch('https://randomuser.me/api?results=20&inc=gender,name,email,phone,picture')
//       .then((r) => r.json())
//       .then((r) => {
//       this.setState({users: r.results});
//     })
//   }
//   allUsers() {
//     return <table className="table table-success">
//       <thead>
//       <tr>
//         <th>Gender</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Phone</th>
//         <th>Picture</th>
//       </tr>
//       </thead>
//       <tbody>
//       {
//         this.state.users.map((elm, ind) => {
//           return <tr key={ind}>
//             <td>{elm.gender}</td>
//             <td>{elm.name.title} {elm.name.first}</td>
//             <td>{elm.email}</td>
//             <td>{elm.phone}</td>
//             <td><img src={elm.picture.medium} alt="" /></td>
//           </tr>
//         })
//       }
//       </tbody>
//     </table>
//   }


//   render() {
//     return <>
//       <button className="btn btn-primary mt-3 ms-3" onClick={() => this.setState({isShowTable: true})}>All</button>
//       <div>{this.state.isShowTable && this.allUsers()}</div>
//     </>
//   }
// }

// export default App;
