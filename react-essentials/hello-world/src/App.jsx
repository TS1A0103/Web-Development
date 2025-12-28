import {Welcome} from "./Welcome";
import {Button} from "./Button";
import {Hello, HelloWithoutJSX} from "./Hello";
import {Card, CardWithoutJSX} from "./Card";
import {ContactForm} from "./ContactForm";
import { StyledForm } from "./StyledForm";
import {CandidateProfile} from "./CandidateProfile"
import { Product } from "./product";
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
import {ProductList} from "./ProductList"
import { NameList } from "./NameList";
import { TodoList } from "./TodoList";
import {Alert} from "./Alert"
import {NewButton} from "./NewButton"
import { CustomButton } from "./CustomButton";
import { Contact } from "./Contact";
import { NewsLetter } from "./NewsLetter";
import {Menu} from "./Menu"
import "./App.css"
function App() {

  return (
      <div>
        <h1>Coidevolution React Course</h1>
        <Menu />
        <Contact />
        <NewsLetter />
        <CustomButton text = "Like"/>
        <CustomButton text = "Book mark"/>
        <Alert type = "success">Code is successfully executed</Alert>
        <Alert type = "failure">Something went wrong</Alert>
        <NewButton />
        <TodoList />
        <NameList />
        <ProductList />
        <UserDetails
        name="Bruce Wayne"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role="moderator"
      />
      <UserDetails
        name="Clark Kent"
        isOnline={false}
        hideOffline={false}
        role="vip"
      />
        <CardWrapper title = "UserProfile"> 
          <p>Vamsi krishna </p> 
          <p>vamsi.ch@gmail.com</p>
          <button>Edit profile</button>
          </CardWrapper>
        <Greeting name = "Vamsi" message = "Hello" />
        <Greeting name = "Lokesh"  />
        <Greeting message = "How are you"  />
        <Greeting />
        <Product title = "Gaming laptop" price ={1299.99} inStock = {true} categeories ={["electronic", "charging", "sonic"]} />
        <Welcome name = "Krishna" alias ="web developer"/>
        <Welcome name = "Lokesh" alias = "Informatica developer"/>
        <CandidateProfile />
        <StyledForm />
        <ContactForm />
        <Card />
        <CardWithoutJSX />
        <Hello />
        <HelloWithoutJSX />
        <Welcome />
        <Button />
      </div>
  );
};

export default App;
