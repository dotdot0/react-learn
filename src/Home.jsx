import { useState } from "react";

const Home = () => {

  const [Blogs, setBlogs] = useState([
    {title: "My new website", body: "lorem ipsum...", author: "mario"}
  ])

  return ( 
    <div className="home">
      
    </div>
   );
}
 
export default Home;