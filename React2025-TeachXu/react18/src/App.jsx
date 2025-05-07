/* eslint-disable react-refresh/only-export-components */
import { useState, memo, useTransition } from "react";

const TabContainer = () => {
  const [tab, setTab] = useState("home");
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();//计算密集型的渲染工作，延迟的不是状态更新本身，而是由状态更新触发的重渲染工作
  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  return (
    <div>
      <div>
        <TabButton isActive={tab==="home"} onClick={()=>selectTab("Home")}>Home</TabButton>
        <TabButton isActive={tab==="Article"} onClick={()=>selectTab("Article")}>
        {isPending ? 'loading' : 'Article'}
        </TabButton>  
        <TabButton isActive={tab==='About'} onClick={()=>{setTab("About")}}>About</TabButton>
      </div>
      {tab === "Home" && <HomeTab />}
      {tab === "Article" && <ArticleTab />}
      {tab === "About" && <AboutTab />}
    </div>
  );
}

const TabButton = ({children, isActive, onClick}) => {
  const buttonStyle = {
    backgroundColor: isActive ? "red" : "blue",
    border: "1px solid black",
    padding: "8px 16px",
    margin: "0 4px",
    cursor: "pointer",
  }
  return (
    <button style={buttonStyle} onClick={onClick} >
      {children}
    </button>
  )
}

const HomeTab = () => {
  return (
    <div>
      <h1>This is Home Component</h1>
    </div>
  )
}

const AboutTab = () => {
  return (
    <div>
      <h1>This is About Component</h1>
    </div>
  )
}

const SlowArt=({index})=>{
  let startTime = performance.now();
  while (performance.now() - startTime < 10) {
    // Simulate a slow operation
  }
  return <li> I am article {index}</li>
}

const ArticleTab = memo(() => {
  let items = [];
  for (let i = 0; i < 100; i++) {
    items.push(<SlowArt key={i} index={i}/>)
  }
  return (
    <div>
      <h1>This is Article Component</h1>
      <ul>
        {items}
      </ul>
    </div>
  )
})

export default TabContainer;