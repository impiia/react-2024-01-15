
import ReactDOM from 'react-dom';
import { restaurants } from './materials/mock'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div>
      <h2>{restaurants[0].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </div>

    <div>
      <h2>{restaurants[1].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
       <li>{restaurants[1].reviews[0].text}</li>
       <li>{restaurants[1].reviews[1].text}</li>
       <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </div>

    <div>
      <h2>{restaurants[2].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
       <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </div>

    <div>
      <h2>{restaurants[3].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
       <li>{restaurants[3].reviews[0].text}</li>
       <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </div>
  </>
)

// root.render(React.createElement("div", {
//   children: React.createElement("div", {
//     children: [
//       React.createElement("div", {
//         children: [
//           React.createElement("h2", null, restaurants[0].name),
//           React.createElement("h3", null, "Меню"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[0].menu[0].name),
//             React.createElement("li", null, restaurants[0].menu[1].name),
//             React.createElement("li", null, restaurants[0].menu[2].name)
//           ]),
//           React.createElement("h3", null, "Отзывы"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[0].reviews[0].text),
//             React.createElement("li", null, restaurants[0].reviews[1].text)
//           ]),
//         ]
//       }),

//       React.createElement("div", {
//         children: [
//           React.createElement("h2", null, restaurants[1].name),
//           React.createElement("h3", null, "Меню"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[1].menu[0].name),
//             React.createElement("li", null, restaurants[1].menu[1].name)
//           ]),
//           React.createElement("h3", null, "Отзывы"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[1].reviews[0].text),
//             React.createElement("li", null, restaurants[1].reviews[1].text),
//             React.createElement("li", null, restaurants[1].reviews[2].text),
//           ]),
//         ]
//       }),

//       React.createElement("div", {
//         children: [
//           React.createElement("h2", null, restaurants[2].name),
//           React.createElement("h3", null, "Меню"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[2].menu[0].name),
//             React.createElement("li", null, restaurants[2].menu[1].name),
//             React.createElement("li", null, restaurants[2].menu[2].name)
//           ]),
//           React.createElement("h3", null, "Отзывы"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[2].reviews[0].text),
//           ]),
//         ]
//       }),

//       React.createElement("div", {
//         children: [
//           React.createElement("h2", null, restaurants[3].name),
//           React.createElement("h3", null, "Меню"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[3].menu[0].name),
//             React.createElement("li", null, restaurants[3].menu[1].name)
//           ]),
//           React.createElement("h3", null, "Отзывы"),
//           React.createElement("ul", null, [
//             React.createElement("li", null, restaurants[3].reviews[0].text),
//             React.createElement("li", null, restaurants[3].reviews[1].text),
//           ]),
//         ]
//       }),
//     ]
//   })
// }));

