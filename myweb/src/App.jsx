import Card from "./components/Card/index";
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar/Navbar";



function App() {
  let myData = [
    { name: "Sara", age: 25 },
    { name: "Zara", age: 35 },
    { name: "Ammara", age: 55 },
    { name: "Farah", age: 45 },
  ];

  return (
    <>
      {/* <Navbar /> */}
      {/* <Card /> */}
<div className="row">
{myData.map((student,index) => {
       return <Card key={index} name={student.name} age={student.age} />
      })}
</div>


      {/* <Footer /> */}
    </>
  );
}

export default App;
