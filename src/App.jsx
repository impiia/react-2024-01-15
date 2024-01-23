 import { restaurants } from './materials/mock';
 import { Layout } from './componets/layout/component';

export const App = () => {
  return (
    <>
    {/* <h1>hello app</h1> */}
     <Layout restaurants={restaurants}/> 
    </>
  )
}